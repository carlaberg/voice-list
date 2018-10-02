import styled from 'styled-components';
import { borderRadius, transitions } from '../../style/variables';

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background: ${props => props.background};
  z-index: 9999;
  border-radius: ${borderRadius.standard};
  transition: opacity ${transitions.slow};
  opacity: ${props => (props.loading ? '1' : '0')};
  pointer-events: none;
`;
