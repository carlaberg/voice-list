import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import LOGGED_IN_USER from '../queries/loggedInUser.graphql';
import BaseLayout from '../components/BaseLayout';
import Spinner from '../components/Spinner';
import SigninRequired from '../components/SigninRequired'

class Dashboard extends React.Component {

  render() {
    return (
      <SigninRequired>
        <BaseLayout>Dashboard</BaseLayout>
      </SigninRequired>
      // <Query query={LOGGED_IN_USER} fetchPolicy="network-only">
      //   {({ loading, error, data, refetch }) => {
      //     if (loading) return 'Loading...';
      //     if (error) return `Error! ${error.message}`;
      //     // if (!data.loggedInUser.userId) {
      //     //   // Router.replace('/')
      //     //   return null
      //     // }
      //     // refetch()
      //     // console.log(data)

      //     return <BaseLayout>Dashboard</BaseLayout>;
      //   }}
      // </Query>
    );
  }
}

export default withRouter(Dashboard)
