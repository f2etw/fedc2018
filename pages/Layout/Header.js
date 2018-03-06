import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Burger from '../../components/Burger';
import BuyTicket from '../../components/BuyTicket';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 2.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;


class Header extends PureComponent {
  render() {
    return (
      <Content>
        <Burger />
        <BuyTicket />
      </Content>
    );
  }
}

export default Header;
