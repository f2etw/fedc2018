import fp from 'lodash/fp';
import React from 'react';
import styled from 'styled-components';
import Burger from '../components/Burger';
import CallForSpeakers from '../components/CallForSpeakers';
import BuyTicket from '../components/BuyTicket';
import CoverLogo from '../components/CoverLogo';
import Date from '../components/Date';
import Location from '../components/Location';
import Sponsor from '../components/Sponsor';

const sponsors = [
];

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
`;

const TopMenu = styled.div`
  float: left;
  display: flex;
  width: 60%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ticket = styled(BuyTicket)`
  float: right;
`;

const Foooter = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const Bar = styled.div`
  height: 100%;
  background: #594a9d;
  border-radius: 2px;
  width: 3px;
  height: 100%;
  margin-left: 50px;
  margin-right: 20px;
`;

const MenuItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  font-size: 24px;
  color: #FFFFFF;
  border-left: 2px solid #594A9D;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #02F694;
  }

  &:first-child {
    border: none;
  }
`;

const renderSponsor =
  fp.map(src => <Sponsor src={`/static/icon/${src}`} key={src} />);

export default () => (
  <Wrapper>
    <Header>
      <TopMenu>
        <Burger />
        <Menu>
          <MenuItem href="mailto:2018@fed.tw">Call For Sponsors</MenuItem>
          <MenuItem href="mailto:2018@fed.tw">Call For Speakers</MenuItem>
        </Menu>
      </TopMenu>
      <Ticket />
    </Header>
    <Main>
      <CoverLogo />
    </Main>
    <Foooter>
      <Bar />
      <Date />
      <Bar />
      <Location />
      <Bar />
      {renderSponsor(sponsors)}
    </Foooter>
  </Wrapper>
);
