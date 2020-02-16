import styled from 'styled-components'
import { FontMedium, FontSmall } from '../../layout/mixins'

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  outline: none;
  height: 40px;
  ${FontMedium};
  color: ${({ theme }) => theme.colorBlack};
  border: 1px solid transparent;
  cursor: pointer;

  &::placeholder {
    ${FontSmall};
    color: ${({ theme }) => theme.colorGray};
  }

  &:focus + span {
    width: 100%;
  }
`


export const Underline = styled.span`
  width: 0;
  height: 1px;
  background: ${({ theme }) => theme.colorBlue};
  display: block;
  transition: width ${({ theme }) => theme.transitionRegular};
  transform: translateY(-1px);
`

export const Message = styled.div`
  height: 30px;
  line-height: 30px;
  ${FontSmall};
  color: ${({ theme }) => theme.colorAccentOpacity};
  opacity: ${props => (!props.show ? '0' : '1')};
  transition: opacity ${({ theme }) => theme.transitionRegular};
`

export const Indicator = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(-50%);
  background: ${props => (props.valid ? props.theme.colorGreen : props.theme.colorAccent)};
  transition: ${({ theme }) => `background ${theme.transitionRegular}, opacity ${theme.transitionRegular}`};
  opacity: ${props => (props.show ? '1' : '0')};
`
