import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Burger from '../../components/Burger';
import BurgetClose from '../../components/BugerClose';
import BuyTicket from '../../components/BuyTicket';

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

const MenuItem = styled.a`
  line-height: 1.8rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #02f694;
  border-left: 2px solid #594a9d;
  padding: 0 1.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }

  &:first-child {
    border: none;
  }
`;

class Header extends PureComponent {
  render() {
    const { toggleMenu, menuVisible } = this.props;
    const WhichBurger = menuVisible ? BurgetClose : Burger;

    return (
      <Content menuVisible={menuVisible}>
        <TopMenu>
          <WhichBurger onClick={toggleMenu} />
          <Menu>
            <MenuItem href="mailto:2018@fed.tw">Call For Sponsors</MenuItem>
            <MenuItem href="mailto:2018@fed.tw">Call For Speakers</MenuItem>
          </Menu>
        </TopMenu>
        <BuyTicket />
      </Content>
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
