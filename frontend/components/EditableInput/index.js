import {
  InputWrapper, StyledInput, Underline, Message, Indicator
} from './styles';

class EditableInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      showIndicators: false
    }
  }

  render() {
    const { editable } = this.state
    const { showIndicators } = this.state
    const { message, valid, showMessage } = this.props
    return (
      <InputWrapper className={this.props.className} onClick={() => this.setState({ showIndicators: true })}>
        <StyledInput
          editable={editable}
          {...this.props}
          onFocus={() => this.setState({ editable: !editable })}
          onBlur={() => this.setState({ editable: !editable })}
        />
        <Underline />
        {/* <Message message={message} show={showMessage}>
          {message}
        </Message>
        <Indicator show={showIndicators} valid={valid} /> */}
      </InputWrapper>
    );
  }
}

export default EditableInput;
