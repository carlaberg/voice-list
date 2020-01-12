import { createGlobalStyle } from 'styled-components'
import { breakpoint } from './mixins'

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontsizeRoot}px;
    background: ${({ theme }) => theme.colorBackground};

    ${breakpoint.down('max')`
      font-size: ${({ theme }) => theme.fontsizeResponsive};
    `}
  }

  body {
    color: $textcolor--primary;
    font-family: ${({ theme }) => theme.fontfamilyPrimary};
    height: 100%;
    line-height: ${({ theme }) => theme.lineheightRegular};
    overflow-x: hidden;
    width: 100vw;
    font-size: ${({ theme }) => theme.fontsizeMobile}px;
    
    ${breakpoint.up('tablet')`
      font-size: ${({ theme }) => theme.fontsizeResponsive};
    `}

    ${breakpoint.up('max')`
      font-size: ${({ theme }) => theme.fontsizeRoot}px;
    `}
  }

  #__next {
    height: 100%;
  }

  #menu-mobile {
    position: relative;
    z-index: 9999;
  }

  strong {
    font-weight: 500;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-top: 0;
    font-size: 1em;
  }

  p + p {
    margin-top: ${({ theme }) => theme.lineheightRegular};
  }

  img {
    width: 100%;
    display: block;
  }

  strong {
    font-family: ${({ theme }) => theme.fontfamilySecondary};
  }
`
export default GlobalStyles