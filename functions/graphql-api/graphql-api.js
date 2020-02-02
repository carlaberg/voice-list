const path = require('path');
require('dotenv').config({ path: path.resolve('../.env') });
const MongoConnector = require('./utils/Mongo');
const serverless = require("serverless-http");
const { GraphQLServerLambda } = require('graphql-yoga');
const gqlServerConfig = require('.');

// Connect to database
MongoConnector.initDb();

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServerLambda(gqlServerConfig)

exports.handler = server.handler