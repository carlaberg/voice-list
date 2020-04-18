import LISTS from '../queries/lists.graphql'

export const clientSideResolvers = {
  Mutation: {
    updateCurrentList: (_, args, { cache }) => {
      const currentList = {
        __typename: 'CurrentList',
        name: args.name,
        items: args.items
      }
      cache.writeData({ data: { currentList } })

      return currentList
    },
    updateListVisibilityFilter: (_, args, { cache }) => {
      const { userLists } = cache.readQuery({ query: LISTS })

      const itemToUpdate = userLists.find((item) => item._id == args.id)
      
      itemToUpdate.open = !itemToUpdate.open
      cache.writeData({ data: { userLists } })

      return userLists
    }
  },
  List: {
    open: () => {
      return false
    }
  }
}