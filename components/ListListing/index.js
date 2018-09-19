import { Query } from 'react-apollo';
import GET_LISTS from '../../queries/lists.graphql';

const ListListing = () => (
  <Query query={GET_LISTS}>
    {({ loading, data }) => {
      if (loading) return <div>loading...</div>;
      const { allLists: lists } = data;

      return lists[0].listItems.map((list, index) => <h2 key={index}>{list}</h2>);
    }}
  </Query>
);

export default ListListing;
