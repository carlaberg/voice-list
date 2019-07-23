import { OverlayWrapper } from './styles';

const Overlay = ({ children, background, loading }) => (
  <OverlayWrapper background={background} loading={loading}>
    {children}
  </OverlayWrapper>
);

export default Overlay;
