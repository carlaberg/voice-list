import Link from 'next/link';
import { Toggle, Modal } from 'carls-components';
import AuthForm from '../AuthForm';
import { HeaderWrapper, StyledLink } from './styles';

const Header = () => (
  <HeaderWrapper>
    <Link href="/" prefetch>
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about" prefetch>
      <StyledLink>About</StyledLink>
    </Link>
    <Toggle>
      {({ on, toggle }) => [
        <span onClick={toggle}>Sign up</span>,
        <Modal toggle={toggle} on={on}>
          {() => <AuthForm formType="sign-up" />}
        </Modal>
      ]}
    </Toggle>
    <Toggle>
      {({ on, toggle }) => [
        <span onClick={toggle}>Sign in</span>,
        <Modal toggle={toggle} on={on}>
          {() => <AuthForm formType="sign in" />}
        </Modal>
      ]}
    </Toggle>
  </HeaderWrapper>
);

export default Header;
