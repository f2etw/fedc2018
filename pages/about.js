import React, { PureComponent } from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import withBackground from './Layout/withBackground';
import Logo from '../components/Logo';


const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  width: 7.5rem;
  height: 3.94rem;
  margin-bottom: 3.13rem;
`;

const HostedBy = styled.div`
  color: white;
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const FedTw = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const Description = styled.div`
  color: white;
  text-align: center;
  line-height: 2.5rem;
  font-size: 1.5rem;
`;

class About extends PureComponent {
  render() {
    return (
      <Wrapper>
        <StyledLogo />
        <HostedBy>FEDC is hosted by</HostedBy>
        <FedTw>Front-End Developers Taiwan Group</FedTw>
        <Description>
          It is Taiwan&#x27;s biggest web community,<br />
          with 23k members from Taiwan, Asia,<br />
          and all over the world.
        </Description>
      </Wrapper>
    );
  }
}

export default withMenu(withBackground(About));
