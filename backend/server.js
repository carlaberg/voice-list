const MongoConnector = require('./utils/Mongo');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const jwt = require('jsonwebtoken')
const { GraphQLServer } = require('graphql-yoga');
const gqlServerConfig = require('./api');

// Connect to database
MongoConnector.initDb();

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServer(gqlServerConfig)

// Authentication middleware
server.express.use((req, res, next) => {
  const authHeader = req.get('Authorization')

  if (authHeader) { 
    const token = authHeader.split(' ')[1]
    try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET)
      req.userId = userId      
    } catch (err) {
      console.error(err)
    }
  }
  next()
})

server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))



