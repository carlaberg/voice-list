const { lists } = require('../../../fixtures/entities/lists');
const { listItems } = require('../../../fixtures/entities/listitems');
const TestDatabase = require('../../test-utils/TestDatabase')
const db = new TestDatabase()
const List = require('../list.model')
const GQLTestClient = require('../../test-utils/GQLTestCLient')
const gql = require('graphql-tag');
const { fakeList1 } = require('../../../fixtures/entities/lists')

beforeAll(async () => {
  await db.connect();
  await db.seed('lists', lists)
  await db.seed('listitems', listItems)
})

afterAll(async () => {
  await db.stop();
})
 
describe('List resolvers', () => {
  it('Can retrieve single list by list ID', async () => {
    const GET_LIST = `
      query List($id: ID!) {
        list(id: $id) {
          _id
          name
          items {
            text
          }
          createdBy {
            _id
          }
        }
      }
    `

    const { query, mutate } = GQLTestClient()
    res = await query({
      query: GET_LIST,
      variables: { id: fakeList1.stringId }
    })

  });
});