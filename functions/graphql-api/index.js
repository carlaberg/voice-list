const user = require('./user')
const list = require('./list')
const listitem = require('./listitem')
const merge = require('lodash/merge')
const MongoConnector = require('./utils/Mongo')
const jwt = require('jsonwebtoken')

// Init DB
const dbConnection = MongoConnector.initDb()

module.exports = {
  typeDefs: [
    user.typeDefs,
    list.typeDefs,
    listitem.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers, list.resolvers, listitem.resolvers),
  context: (req) => {
    const authHeader = req.event.headers.authorization
    let tempUser = null

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
        user: user.model,
        listitem: listitem.model
      }
    }
  }    
}