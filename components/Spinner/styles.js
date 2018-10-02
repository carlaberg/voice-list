import styled from 'styled-components';
import * as variables from '../../style/variables';

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${variables.backgroundWhite.hex};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${props => (props.loading ? '1' : '0')};
  transition: opacity ${variables.transitions.slow};
  pointer-events: none;
`;

export const SpinnerOuter = styled.div`
  width: 200px;
  overflow: hidden;
`;

export const SpinnerInner = styled.div`
  width: 0;
  height: 1px;
  background: ${variables.accentRed.hex};
  animation: spinner ${variables.transitions.verySlow} infinite;

  @keyframes spinner {
    0 {
      width: 0;
      transform: translateX(0);
    }
    50% {
      width: 100%;
      transform: translateX(0);
    }
    100% {
      transform: translateX(200px);
    }
  }
`;

export const SpinnerText = styled.div`
  width: 100%;
  ${variables.fontSmall()};
  color: ${variables.accentRed.hex};
  margin-top: 20px;
  text-align: center;
`;
