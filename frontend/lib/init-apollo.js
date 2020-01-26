import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { persistCache } from 'apollo-cache-persist'
import fetch from 'isomorphic-unfetch'
import { setContext } from 'apollo-link-context'

const {
  API_HOST_DEV,
  API_HOST_PROD,
  NODE_ENV
} = process.env

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
  const localStorage = {}
  localStorage.getItem = 'token'
}

const httpLink = new HttpLink({
  uri: 'https://voice-list.netlify.com/.netlify/functions/graphql-api', // Server URL (must be absolute)
  // uri: 'NODE_ENV === 'production' ? API_HOST_PROD : API_HOST_DEV', // Server URL (must be absolute)
  credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('graphcoolToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const clientCache = new InMemoryCache()

  //Adding initial state to cache for currentList
  clientCache.writeData({
    data: {
      currentList: {
        __typename: 'CurrentList',
        name: 'initial list name',
        items: [
          'this is the inital list item',
          'this is another initialized list item'
        ]
      }
    }
  })


  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: process.browser ? authLink.concat(httpLink) : httpLink,
    cache: clientCache.restore(initialState || {}),
    resolvers: {
      Mutation: {
        updateCurrentList: (_, args, { cache }) => {
          const currentList = {
            __typename: 'CurrentList',
            name: args.name,
            items: args.list
          }
          cache.writeData({ data: { currentList } })

          return currentList
        }
      }
    }
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
