import { FormWrapper, Input, Button } from './styles';
import { Mutation } from 'react-apollo';
import CREATE_USER from '../../queries/createUser.graphql';
import { withRouter } from 'next/router';

class AuthForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: ''
  };

  resetForm() {
    this.setState({
      email: '',
      name: '',
      password: ''
    });
  }

  render() {
    const { email, name, password } = this.state;
    const { formType } = this.props;

    return (
      <Mutation
        mutation={CREATE_USER}
        variables={{
          email,
          name,
          password
        }}
      >
        {createUser => (
          <FormWrapper
            onSubmit={e => {
              e.preventDefault();
              createUser()
                .then(user => {
                  localStorage.setItem('graphcoolToken', user.data.signupUser.token);
                  this.resetForm();
                  this.props.router.replace('/dashboard');
                })
                .catch(error => console.error(error));
            }}
          >
            <Input onChange={e => this.setState({ email: e.target.value })} value={email} />
            <Input onChange={e => this.setState({ name: e.target.value })} value={name} />
            <Input onChange={e => this.setState({ password: e.target.value })} value={password} />
            <Button>{formType}</Button>
          </FormWrapper>
        )}
      </Mutation>
    );
  }
}

export default withRouter(AuthForm);
