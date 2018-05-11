import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FEDC from '../components/Fedc';
import Logo from '../components/Logo';
import YearIcon from '../components/YearIcon';
import withMenu from './Layout/withMenu';
import withBackground from './Layout/withBackground';
import Footer from './Home/Footer';

const Wrapper = styled.div`
  padding-top: 8rem;
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LogoGroup = styled.div`
  position: relative;
  min-height: 30rem;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 4.25rem;
  z-index: 10;
`;

const YearContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  margin-left: 50px;
  z-index: 10;
`;

const FedcContainer = styled.div`
  position: absolute;
  top: 17rem;
  margin-left: -50px;
  z-index: 10;
`;

class Index extends PureComponent {
  render() {
    return (
      <Wrapper>
        <LogoGroup>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <YearContainer>
            <YearIcon />
          </YearContainer>
          <FedcContainer>
            <FEDC />
          </FedcContainer>
        </LogoGroup>
        <Footer />
      </Wrapper >
    );
  }
}

export default withMenu(withBackground(Index));
