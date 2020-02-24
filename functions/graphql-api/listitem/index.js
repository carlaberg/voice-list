module.exports = {
    resolvers: require('./listitem.resolvers'),
    typeDefs: require('../utils/gqlLoader')('listitem/listitem.graphql'),
    model: require('./listitem.model')
  }