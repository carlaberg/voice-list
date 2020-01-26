const user = require('./user')
const list = require('./list')
const merge = require('lodash/merge')
const middlewares = require('./middlewares')

module.exports = {
  typeDefs: [
    user.typeDefs,
    list.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers, list.resolvers),
  // middlewares,
  context: (req) => {
    const authHeader = req.event.headers.authorization
    const tempUser = null

    if (authHeader) { 
      const token = authHeader.split(' ')[1]
      try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET)
        tempUser = userId
  
      } catch (err) {
        console.error(err)
      }
    }
    
    return { 
      ...req,
      request: {
        userId: tempUser
      },  
      models: {
        user: user.model
      }
    }
  }    
}