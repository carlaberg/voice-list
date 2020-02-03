import Link from 'next/link';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import { Toggle, Modal } from 'carls-components'
import { Transition, animated } from 'react-spring'
import AuthForm from '../AuthForm'
import Button from '../Button'
import {
  HeaderWrapper, HeaderBar, Home, ButtonWrapper, LoginButtons, SignoutButton
} from './styles'
import { Halign } from '../../layout/mixins'
import LOGGED_IN_USER from '../../queries/loggedInUser.graphql'

const Header = props => (
  <Query query={LOGGED_IN_USER} fetchPolicy="network-only">
    {({ loading, error, data, refetch }) => {
      if (loading) return null
      if (error) return null

      const loginButton = () => (
        <React.Fragment>
          <Transition
            native
            from={{ opacity: 0, y: 180 }}
            enter={{ opacity: 1, y: -50 }}
            leave={{ opacity: 0, y: -180 }}
          >
            {loading === false
              && (styles => (
                <LoginButtons
                  style={{
                    opacity: styles.opacity.interpolate(opacity => opacity),
                    transform: styles.y.interpolate(y => `translateY(${y}%)`)
                  }}
                >
                  <Toggle>
                    {({ on, toggle }) => (
                      <React.Fragment>
                        <Button style={styles} theme="light" onClick={toggle}>
                          Sign up
                        </Button>
                        <Modal toggle={toggle} on={on}>
                          {() => <AuthForm 
                          formType="create" 
                          title="Create a new account" 
                          toggleModal={toggle}
                          onSubmitSuccess={props => props.router.replace('/dashboard')}
                          />}
                        </Modal>
                      </React.Fragment>
                    )}
                  </Toggle>
                  <Toggle>
                    {({ on, toggle }) => (
                      <React.Fragment>
                        <Button theme="light" onClick={toggle}>
                          Sign in
                        </Button>
                        <Modal toggle={toggle} on={on}>
                          {() => (
                            <AuthForm
                              formType="login"
                              title="Sign in to your account"
                              toggleModal={toggle}
                              onSubmitSuccess={props => props.router.replace('/dashboard')}
                            />
                          )}
                        </Modal>
                      </React.Fragment>
                    )}
                  </Toggle>
                </LoginButtons>
              ))}
          </Transition>
        </React.Fragment>
      );

      const signoutButton = () => (
        <Transition
          native
          from={{ opacity: 0, y: 180 }}
          enter={{ opacity: 1, y: -50 }}
          leave={{ opacity: 0, y: -180 }}
        >
          {loading === false
            && (styles => (
              <SignoutButton
                style={{
                  opacity: styles.opacity.interpolate(opacity => opacity),
                  transform: styles.y.interpolate(y => `translateY(${y}%)`)
                }}
              >
                <Button
                  theme="light"
                  onClick={() => {
                    localStorage.removeItem('graphcoolToken');
                    props.router.replace('/');
                    setTimeout(() => refetch(), 500);
                  }}
                >
                  Sign out
                </Button>
              </SignoutButton>
            ))}
        </Transition>
      );

      return (
        <HeaderWrapper>
          <Halign>
            <HeaderBar>
              <Link href="/" prefetch>
                <Home>Voice List</Home>
              </Link>
              <ButtonWrapper>{data.loggedInUser && data.loggedInUser.userId ? signoutButton() : loginButton()}</ButtonWrapper>
            </HeaderBar>
          </Halign>
        </HeaderWrapper>
      );
    }}
  </Query>
);

export default withRouter(Header);
