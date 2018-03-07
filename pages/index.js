import React from 'react';
import { injectGlobal } from 'styled-components';

import Wrapper from './Layout/Wrapper';
import Header from './Layout/Header';
import Main from './Home/Main';
import MainButtons from './Home/MainButtons';
import Footer from './Home/Footer';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    color: #02f694;

    @media (max-width: 1440px) {
      font-size: 10px;
    }
  }

  body {
    background-color: #311e6d;
  }
`;

export default () => (
  <Wrapper>
    <Header />
    <Main />
    <MainButtons />
    <Footer />
  </Wrapper>
);
