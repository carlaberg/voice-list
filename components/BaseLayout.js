import styled from 'styled-components';
import { accentRed, backgroundWhite, gray } from '../style/variables';
import Header from './Header';

const SiteContainer = styled.main`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ({ children }) => <SiteContainer id="site-container">{children}</SiteContainer>;
