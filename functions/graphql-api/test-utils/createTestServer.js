const { ApolloServer } = require("apollo-server-lambda");
const { fakeUser1 } = require('../../fixtures/entities/users');
const user = require('../user');
const listitem = require('../listitem');

const {
  typeDefs,
  resolvers,  
} = require('../');

const defaultContext = {
  request: {
    userId: fakeUser1.objectId
  },
  models: {
    user: user.model,
    listitem: listitem.model
  }  
}

/**
 * Integration testing utils
 */
const createTestServer = ({ context = defaultContext } = {}) => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  return { server };
};

module.exports.createTestServer = createTestServer;
