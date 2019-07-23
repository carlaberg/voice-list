import { ThemeProvider } from 'styled-components';
import { Transition } from 'react-spring';
import { StyledButton } from './styles';
import themes from './themes';

const Button = ({ onClick, theme, children }) => (
  <ThemeProvider theme={themes[theme]}>
    <StyledButton onClick={onClick}>{children}</StyledButton>
  </ThemeProvider>
);

export default Button;
