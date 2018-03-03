import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FEDC from '../../components/Fedc';
import Logo from '../../components/Logo';
import YearIcon from '../../components/YearIcon';

const Content = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 7rem;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 4.25rem;
`;

const YearContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  margin-left: 50px;
`;

const FedcContainer = styled.div`
  position: absolute;
  top: 17rem;
  margin-left: -50px;
`;

class Main extends PureComponent {
  render() {
    return (
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <YearContainer>
          <YearIcon />
        </YearContainer>
        <FedcContainer>
          <FEDC />
        </FedcContainer>
      </Content>
    );
  }
}

export default Main;
