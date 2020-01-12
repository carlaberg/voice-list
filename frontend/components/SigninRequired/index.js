import { Query } from 'react-apollo'
import CURRENT_USER_QUERY from '../../queries/loggedInUser.graphql'
import AuthForm from '../AuthForm'
import Modal from '../Modal'
import Toggle from '../Toggle'

const SigninRequired = props => (
  <Query query={CURRENT_USER_QUERY} fetchPolicy="network-only">
    {({
      loading, error, data, refetch
    }) => {
      if (loading) return null
      if (error) return `Error! ${error.message}`

      if (!data.loggedInUser.userId) {
        return (
          <Toggle initial>
            {({ on, toggle }) => (
              <>
                <Modal toggle={toggle} on={on}>
                  {() => (
                    <AuthForm
                      formType="login"
                      title="Sign in to your account"
                      toggleModal={toggle}
                      onSubmitSuccess={refetch}
                    />
                  )}
                </Modal>
              </>
            )}
          </Toggle>
        )
      }
      return props.children
    }}
  </Query>
)

export default SigninRequired