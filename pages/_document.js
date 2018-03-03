import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    background-color: #311e6d;
  }
  body * {
    font-family: 'Barlow', sans-serif;
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
    const { style } = this.props;
    return (
      <html lang="zh-TW">
        <Head>
          <title>FEDC</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/static/reset.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet" />
          {style}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
