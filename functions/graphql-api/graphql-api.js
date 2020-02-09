const path = require('path');
require('dotenv').config({ path: path.resolve('../.env') });
const serverless = require("serverless-http");
const { ApolloServer } = require("apollo-server-lambda");

const gqlServerConfig = require('.');

const server = new ApolloServer(gqlServerConfig)

exports.handler = server.createHandler()