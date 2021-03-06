import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Burger from '../../components/Burger';
import BurgerClose from '../../components/BurgerClose';
import BuyTicket from '../../components/BuyTicket';

const Wrapper = styled.div`
  height: 8rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const Content = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  background-color: ${({ menuVisible }) => (menuVisible ? 'transparent' : 'rgba(49, 30, 108, 0.9)')};
  overflow: hidden;
  z-index: 20;

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem;
    position: relative;
  }
`;

const TopMenu = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

class Header extends PureComponent {
  render() {
    const { toggleMenu, menuVisible } = this.props;
    const WhichBurger = menuVisible ? BurgerClose : Burger;

    return (
      <Wrapper>
        <Content menuVisible={menuVisible}>
          <TopMenu>
            <WhichBurger onClick={toggleMenu} />
            <Menu />
          </TopMenu>
          <BuyTicket
            href="https://f2e.kktix.cc/events/fedc-2018"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Content>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  menuVisible: PropTypes.bool,
};

Header.defaultProps = {
  toggleMenu: x => x,
  menuVisible: false,
};

export default Header;
