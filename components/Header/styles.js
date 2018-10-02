import styled from 'styled-components';
import { animated } from 'react-spring';
import * as variables from '../../style/variables';

export const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(${variables.gray.rgb}, 0.2);
  position: relative;
  overflow: hidden;
`;

export const Home = styled.a`
  color: ${variables.accentRed.hex};
  cursor: pointer;
  ${variables.fontLarge};
  text-transform: uppercase;
`;

export const ButtonWrapper = styled(animated.div)`
  margin-left: auto;
`;

export const LoginButtons = styled(animated.div)`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  right: 20px;
`;

export const SignoutButton = styled(animated.div)`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  right: 20px;
`;
