const path = require('path');
require('dotenv').config({ path: path.resolve('../.env') });
const serverless = require("serverless-http");
const { ApolloServer } = require("apollo-server-lambda");
const MongoConnector = require('./utils/Mongo');

// Init DB
const dbConnection = MongoConnector.initDb();

const gqlServerConfig = require('.');

const server = new ApolloServer(gqlServerConfig);

exports.ApolloServer = ApolloServer;
exports.handler = server.createHandler();