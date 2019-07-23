const user = require('./user')
const list = require('./list')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    user.typeDefs,
    list.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers, list.resolvers),
  context: req => ({ ...req,
    models: {
      user: user.model
    }
  })
}