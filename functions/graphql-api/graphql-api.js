const path = require('path');
require('dotenv').config({ path: path.resolve('../.env') });
const serverless = require("serverless-http");
// const { GraphQLServerLambda } = require('graphql-yoga');
const { ApolloServer } = require("apollo-server-lambda");

const gqlServerConfig = require('.');

// const serverOptions = {
//   port: 5000,
//   endpoint: '/graphql',
//   playground: '/docs',
//   tracing: true,
//   debug: true
// }

const server = new ApolloServer(gqlServerConfig)
// const server = new GraphQLServerLambda(gqlServerConfig)

exports.handler = server.createHandler()