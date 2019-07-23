import { Query } from 'react-apollo';
import GET_LISTS from '../../queries/lists.graphql';
import Spinner from '../Spinner';

const ListListing = () => (
  <Query query={GET_LISTS}>
    {({ loading, data }) => {
      if (loading) return <Spinner loading={loading} target="site-container" />;
      const { allLists: lists } = data;

      return (
        <React.Fragment>
          <h1>HERE IS A LIST</h1>
          {lists[0].listItems.map((list, index) => <h2 key={index}>{list}</h2>)}
        </React.Fragment>
      );
    }}
  </Query>
);

export default ListListing;
