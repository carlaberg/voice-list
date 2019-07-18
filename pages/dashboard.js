import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import LOGGED_IN_USER from '../queries/loggedInUser.graphql';
import BaseLayout from '../components/BaseLayout';
import Spinner from '../components/Spinner';

class Dashboard extends React.Component {
  render() {
    return (
      <Query query={LOGGED_IN_USER} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) return null;
          if (data.loggedInUser.id) {
            return <BaseLayout>Dashboard</BaseLayout>;
          }

          return null;
        }}
      </Query>
    );
  }
}

export default withRouter(Dashboard);
