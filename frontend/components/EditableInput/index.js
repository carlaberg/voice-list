import {
  InputWrapper, StyledInput, Underline, Message, Indicator
} from './styles'

class EditableInput extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      editable: false,
      showIndicators: false
    }

    this.input = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if(this.props.isFocused !== prevProps.isFocused) {
      this.updateFocus()
    }
  }

  updateFocus() {
    if (this.props.isFocused) {
      this.input.current.focus()
    } else {
      this.input.current.blur()
    }
  }

  render() {
    const { editable } = this.state
    const { showIndicators } = this.state
    const { message, valid, showMessage, onBlur } = this.props

    return (
      <InputWrapper
        className={this.props.className}
        onClick={() => this.setState({ showIndicators: true })}
      >
        <StyledInput
          ref={this.input}
          editable={editable}
          {...this.props}
          onFocus={() => this.setState({ editable: !editable })}
          onBlur={() => {
            this.setState({ editable: !editable })
            if (typeof onBlur === 'function') {
              onBlur()
            }
          }}
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
