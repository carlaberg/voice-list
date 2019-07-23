import styled from 'styled-components';
import { accentRed, fontMedium, borderRadius } from '../../style/variables';

export const StyledButton = styled.button`
  height: 40px;
  border: ${props => props.theme.border};
  background: ${props => props.theme.backgroundColor};
  margin-left: 15px;
  cursor: pointer;
  padding: 0 15px;
  color: ${accentRed.hex};
  text-transform: uppercase;
  ${fontMedium()};
  color: ${props => props.theme.textColor};
  border-radius: ${borderRadius.standard};
`;
