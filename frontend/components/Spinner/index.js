import {
  SpinnerWrapper, SpinnerOuter, SpinnerInner, SpinnerText
} from './styles';
import Portal from '../Portal';

const Spinner = ({ loading }) => {
  return (
    <Portal selector="#modal">
      <SpinnerWrapper loading={loading}>
        <SpinnerOuter>
          <SpinnerInner />
          <SpinnerText>Loading...</SpinnerText>
        </SpinnerOuter>
      </SpinnerWrapper>
    </Portal>
  )
};

export default Spinner;
