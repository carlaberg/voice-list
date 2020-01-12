import styled from 'styled-components'

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colorBackground};
  z-index: 9999;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transitionRegular};
  opacity: ${props => (props.loading ? '1' : '0')};
  pointer-events: none;
`
