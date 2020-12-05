const { createTestServer } = require('./createTestServer')
const { createTestClient } = require('apollo-server-testing')

const GQLTestClient = () => {

  const { server } = createTestServer()

  const { query, mutate } = createTestClient(server)
    
  return {
    query,
    mutate
  }
};

module.exports = GQLTestClient