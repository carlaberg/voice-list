import styled, { ThemeProvider } from 'styled-components'
import CSSReset from './reset'
import Fonts from './fonts'
import GlobalStyles from './globalStyles'
// import Theme from './theme'
import Header from '../components/Header'
import { breakpoint } from './mixins'
import { theme } from './theme'

// These styles are applied to the main tag
const Main = styled.main `

`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CSSReset />
      <Fonts />
      <GlobalStyles />
      {/* React Portal target for the mobile menu */}
      <div id="menu-mobile" />
      <Header />
      <Main>{children}</Main>
      {/* React Portal target for the mobile menu for services */}
      <div id="services-menu-mobile" />
    </React.Fragment>
  </ThemeProvider>
)