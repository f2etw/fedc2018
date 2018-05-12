import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    color: #02f694;

    @media (max-width: 1440px) {
      /* font-size: 10px; */
    }
  }

  body {
    background-color: #311e6d;
  }

  *{
    &:before,&:after{
      box-sizing: border-box;
    }
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
    const { styleTags } = this.props;
    return (
      <html lang="zh-TW">
        <Head>
          <title>FEDC 2018 - Front-End x Design Conference</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link href="/static/reset.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Barlow:400,500,700" rel="stylesheet" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
