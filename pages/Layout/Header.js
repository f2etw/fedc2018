import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Burger from '../../components/Burger';
import BuyTicket from '../../components/BuyTicket';

const Content = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  margin-top: 2.5rem;
`;

const TopMenu = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const MenuItem = styled.a`
  line-height: 1.8rem;
  font-size: 1.5rem;
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
    return (
      <Content>
        <TopMenu>
          <Burger size={25}/>
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

export default Header;
