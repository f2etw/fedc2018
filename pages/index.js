import React, { PureComponent } from 'react';
import { injectGlobal } from 'styled-components';
import { defaults } from 'lodash';

import Wrapper from './Layout/Wrapper';
import Header from './Layout/Header';
import Main from './Home/Main';
import MainButtons from './Home/MainButtons';
import Footer from './Home/Footer';

import Menu from './Layout/Menu';
import BlurFilter from './Layout/BlurFilter';

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


class Index extends PureComponent {
  state = {
    menu: {
      isDisplay: false,
      items: [
        { name: 'HOME', href: '/', active: true },
        { name: 'AGENDA', href: '/', active: false },
        { name: 'SPEAKERS', href: '/', active: false },
      ],
    },
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({
      menu: defaults({ isDisplay: !menu.isDisplay }, menu),
    });
  }

  render() {
    const { toggleMenu } = this;
    const { menu } = this.state;

    return (
      <Wrapper>
        <Header toggleMenu={toggleMenu} menuIsDisplay={menu.isDisplay} />
        <BlurFilter active={menu.isDisplay}>
          <Main />
          <MainButtons />
          <Footer />
        </BlurFilter>
        <Menu {...menu} />
      </Wrapper>
    );
  }
}

export default Index;
