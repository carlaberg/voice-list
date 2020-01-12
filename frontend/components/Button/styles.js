import styled from 'styled-components'
import { FontMedium } from '../../layout/mixins'

export const StyledButton = styled.button`
  height: 40px;
  border: ${props => props.theme.border};
  background: ${props => props.theme.backgroundColor};
  margin-left: 15px;
  cursor: pointer;
  padding: 0 15px;
  text-transform: uppercase;
  ${FontMedium}
  color: ${props => props.theme.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
`
