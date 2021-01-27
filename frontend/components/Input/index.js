import {
  Wrapper,
  InputWrapper,
  StyledInput,
  Underline,
  Message,
  Indicator,
  Label
} from './styles';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndicators: false
    };
  }

  render() {
    const { showIndicators } = this.state
    const { message, valid, showMessage, label, allowIndicators = true } = this.props
    
    return (
      <Wrapper className={this.props.className} onClick={() => this.setState({ showIndicators: true })}>
        <InputWrapper>
          {label && <Label>{label}</Label>}
          <StyledInput {...this.props} />
        </InputWrapper>
        <Underline />
        <Message message={message} show={showMessage}>
          {message}
        </Message>
        {allowIndicators && <Indicator show={showIndicators} valid={valid} />} 
      </Wrapper>
    );
  }
}

export default Input;
