module.exports = {
    resolvers: require('./list.resolvers'),
    typeDefs: require('../utils/gqlLoader')('list/list.graphql'),
    model: require('./list.model')
  }