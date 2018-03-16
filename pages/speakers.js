import React, { PureComponent } from 'react';
import Wrapper from './Layout/Wrapper';
import Header from './Layout/Header';
import Main from './Home/Main';
import MainButtons from './Home/MainButtons';
import Footer from './Home/Footer';
import Menu from './Layout/Menu';
import BlurFilter from './Layout/BlurFilter';

class Index extends PureComponent {
  state = {
    menu: {
      visible: false,
      items: [
        { name: 'HOME', href: '/', active: true },
        { name: 'AGENDA', href: '/agenda', active: false },
        { name: 'SPEAKERS', href: '/speakers', active: false },
      ],
    },
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({
      menu: {
        ...menu,
        visible: !menu.visible,
      },
    });
  }

  render() {
    const { toggleMenu } = this;
    const { menu } = this.state;

    return (
      <Wrapper>
        <Header toggleMenu={toggleMenu} menuVisible={menu.visible} />
        <BlurFilter active={menu.visible}>
          <Main>
            Developer Program
            Designer Program
            Pitch Space
            Developer Workshops
            Designer Workshops
          </Main>
          <MainButtons />
          <Footer />
        </BlurFilter>
        <Menu {...menu} />
      </Wrapper>
    );
  }
}

export default Index;
