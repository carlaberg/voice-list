import styled from 'styled-components';
import * as variables from '../../style/variables';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: ${variables.lightWhite.hex};
  height: 40px;
  ${variables.fontMedium()};
  color: ${variables.black.hex};
  border-bottom: 1px solid rgba(${variables.gray.rgb}, 0.2);
  padding-right: 20px;

  &::placeholder {
    ${variables.fontSmall()};
    color: ${variables.gray.hex};
  }

  &:focus + span {
    width: 100%;
  }
`;

export const Underline = styled.span`
  width: 0;
  height: 1px;
  background: ${variables.blue.hex};
  display: block;
  transition: width ${variables.transitions.slow};
  transform: translateY(-1px);
`;

export const Message = styled.div`
  height: 30px;
  line-height: 30px;
  ${variables.fontSmall()};
  color: rgba(${variables.accentRed.rgb}, 0.7);
  opacity: ${props => (!props.show ? '0' : '1')};
  transition: opacity ${variables.transitions.slow};
`;

export const Indicator = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(-50%);
  background: ${props => (props.valid ? variables.green : variables.accentRed.hex)};
  transition: background ${variables.transitions.slow}, opacity ${variables.transitions.slow};
  opacity: ${props => (props.show ? '1' : '0')};
`;
