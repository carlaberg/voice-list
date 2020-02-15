import {
  InputWrapper, StyledInput, Underline, Message, Indicator
} from './styles';

class EditableInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }
  }

  render() {
    const { editable } = this.state
    return (
      <InputWrapper className={this.props.className} onClick={() => this.setState({ showIndicators: true })}>
        <StyledInput
          editable={editable}
          {...this.props}
          onFocus={() => this.setState({ editable: !editable })}
          onBlur={() => this.setState({ editable: !editable })}
        />
      </InputWrapper>
    );
  }
}

export default EditableInput;
