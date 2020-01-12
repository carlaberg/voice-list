import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'greycliffcf-demibold';
    src: url('/static/fonts/greycliffcf-demibold-webfont.woff2') format('woff2'),
    url('/static/fonts/greycliffcf-demibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'greycliffcf-regular';
    src: url('/static/fonts/greycliffcf-regular-webfont.woff2') format('woff2'),
         url('/static/fonts/greycliffcf-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
export default Fonts
