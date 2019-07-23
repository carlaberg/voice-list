import {
  InputWrapper, StyledInput, Underline, Message, Indicator
} from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndicators: false
    };
  }

  render() {
    const { showIndicators } = this.state;
    const { message, valid, showMessage } = this.props;
    return (
      <InputWrapper onClick={() => this.setState({ showIndicators: true })}>
        <StyledInput {...this.props} />
        <Underline />
        <Message message={message} show={showMessage}>
          {message}
        </Message>
        <Indicator show={showIndicators} valid={valid} />
      </InputWrapper>
    );
  }
}

export default Input;
