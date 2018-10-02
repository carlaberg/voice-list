import { Mutation, graphql, compose } from 'react-apollo';
import { withRouter } from 'next/router';
import {
  FormWrapper, FormTitle, StyledHr, InputGroup, BackendMessage
} from './styles';
import LOGIN_USER from '../../queries/authenticateUser.graphql';
import CREATE_USER from '../../queries/createUser.graphql';
import Button from '../Button';
import Input from '../Input';
import Overlay from '../Overlay';
import Spinner from '../Spinner';
import validate from '../../utils/validate';
import * as variables from '../../style/variables';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.queries = {
      signup: CREATE_USER,
      authenticate: LOGIN_USER
    };

    this.state = {
      email: '',
      emailValid: false,
      emailMessage: '',
      emailShowMessage: false,
      password: '',
      passwordValid: false,
      passwordMessage: '',
      passwordShowMessage: false,
      loading: false,
      backendMessage: ''
    };
  }

  resetForm() {
    this.setState({
      email: '',
      password: ''
    });
  }

  updateMessages() {
    const { email, password } = this.state;
    let emailMessage = '';
    let passwordMessage = '';

    if (!validate.email(email)) {
      emailMessage = 'Please fill in a valid email';
    }

    if (!validate.password(password)) {
      passwordMessage = 'Please fill in a valid password';
    }

    this.setState({
      emailMessage,
      passwordMessage,
      emailShowMessage: true,
      passwordShowMessage: true
    });
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    if (validate[field](value)) this.setState({ [`${field}ShowMessage`]: false });
    this.setState({
      [field]: value,
      [`${field}Valid`]: validate[field](value)
    });
  }

  render() {
    const {
      email,
      password,
      emailMessage,
      passwordMessage,
      emailValid,
      passwordValid,
      emailShowMessage,
      passwordShowMessage,
      loading,
      backendMessage
    } = this.state;
    const { formType, title, toggleModal } = this.props;

    return (
      <Mutation
        mutation={this.queries[formType]}
        variables={{
          email,
          password
        }}
        errorPolicy="all"
      >
        {(handleUser, { loading, error }) => (
          <FormWrapper
            id="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.updateMessages();

              if (!validate.email(email) || !validate.password(password)) return;

              this.setState({ loading: true });
              handleUser()
                .then((user) => {
                  this.setState({ loading: false });
                  localStorage.setItem('graphcoolToken', user.data[`${formType}User`].token);
                  this.resetForm();
                  toggleModal();
                  setTimeout(() => {
                    this.props.router.replace('/dashboard');
                  }, 1000);
                })
                .catch((error) => {
                  console.log(error.graphQLErrors.functionError);
                  this.setState({ loading: false });
                });
            }}
          >
            <Spinner loading={loading} target="auth-form" />
            <FormTitle>{title}</FormTitle>
            <InputGroup>
              <Input
                name="email"
                placeholder="E-mail"
                onChange={e => this.handleChange(e)}
                value={email}
                valid={emailValid}
                showMessage={emailShowMessage}
                message={emailMessage}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={e => this.handleChange(e)}
                value={password}
                valid={passwordValid}
                showMessage={passwordShowMessage}
                message={passwordMessage}
              />
            </InputGroup>
            <BackendMessage>
              {error && error.graphQLErrors.map(item => item.functionError.message)}
            </BackendMessage>
            <Button type="submit" theme="light">
              {formType === 'signup' ? 'sign up' : 'sign in'}
            </Button>
          </FormWrapper>
        )}
      </Mutation>
    );
  }
}

export default withRouter(AuthForm);
