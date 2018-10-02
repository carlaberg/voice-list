import {
  SpinnerWrapper, SpinnerOuter, SpinnerInner, SpinnerText
} from './styles';
import Portal from '../Portal';

const Spinner = ({ loading, target }) => (
  <Portal target={target}>
    <SpinnerWrapper loading={loading}>
      <SpinnerOuter>
        <SpinnerInner />
        <SpinnerText>Loading...</SpinnerText>
      </SpinnerOuter>
    </SpinnerWrapper>
  </Portal>
);

export default Spinner;
