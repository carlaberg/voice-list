import Link from 'next/link';
import { HeaderWrapper, StyledLink } from './styles';

const Header = () => (
  <HeaderWrapper>
    <Link href="/" prefetch>
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about" prefetch>
      <StyledLink>About</StyledLink>
    </Link>
  </HeaderWrapper>
);

export default Header;
