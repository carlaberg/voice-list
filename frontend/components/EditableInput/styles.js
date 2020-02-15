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
  padding: ${({ theme }) => theme.gutter};
  border: 1px solid transparent;
  cursor: pointer;

  &::placeholder {
    ${FontSmall};
    color: ${({ theme }) => theme.colorGray};
  }

  ${({ editable, theme }) => editable && `
    border: 1px solid  ${theme.colorGray};
  `}
`