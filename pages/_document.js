import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import { backgroundWhite } from '../style/variables';

injectGlobal`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${backgroundWhite.hex};
    font-family: 'Barlow', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Barlow:100,400,600"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </html>
    );
  }
}
