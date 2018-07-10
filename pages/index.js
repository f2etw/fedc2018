import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import DateTab from './Agenda/DateTab';
import AgendaItem from './Agenda/AgendaItem';
import agendas from './Agenda/data.json';
import Date from '../components/Date';
import Location from '../components/Location';
import BuyTicket from '../components/BuyTicket';
import sponsors from './Sponsors/data.json';
import contributors from './Contributors/data.json';
import withFedcBackground from './Layout/withFedcBackground';

const Wrapper = styled.div`
  max-width: 62rem;
  margin: 0 auto 13.19rem auto;
  flex-grow: 1;

  @media (max-width: 66rem){
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.88rem;
  letter-spacing: 1rem;
  margin-left: 0.42rem;
  margin-bottom: 0.96rem;
`;

const Main = styled.div`
  flex-wrap: wrap;
`;

const Lunch = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
`;

const Note = styled.div`
  font-size: 1rem;
  margin-bottom: 3rem;
`;

const AgendaItemContainer = styled.div``;

const SubTitle = styled(Title)`
  margin-top: 3rem;
  letter-spacing: .5rem;
`;

const SponsorType = styled.h3`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: .5rem;
`;

const SponsorsMain = styled(Main)`
  border-radius: 2rem;
  background: #FFF;
  padding: .1rem 1.5rem 2rem 1.5rem;
`;

const Img = styled.img`
  max-width: 18rem;
  width: 100%;

  @media (min-width: 600px) {
    max-width: 14rem;
  };
`;

const Header = styled.div`
  display: flex;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
`;

const Ticket = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const LogoWrap = styled.div`
  width: 200px;
  flex-grow: 1;
`;

const Logo = styled.div`
  width: 220px;
  height: 220px;
  background-image: url('/static/logo.png');
  background-size: 220px;
  margin: 0 auto;
`;

const Information = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-basis: 600px;
`;

const Event = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width: 600px) {
    display: flex;
  };
`;

const EventDate = styled(Date)`
  padding-right: 0.875rem;
`;

const EventLocation = styled(Location)`
  position: relative;
  margin-top: 1rem;

  @media (min-width: 600px) {
    padding-left: 0.875rem;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -2px;
      width: 2px;
      height: 100%;
      background-color: #594a9d;
      border-radius: 2px;
    }
  }
`;

const Contributors = styled.div`
  line-height: 24px;
  margin-top: 1rem;
  color: #C2B9EE;
`;

const Link = styled.div`
  padding: .5rem 0;
`;

const A = styled.a`
  color: #C2B9EE;
`;

class Agenda extends React.PureComponent {
  renderAgendaItem = (agenda, index) =>
    (<AgendaItem key={index} {...agenda} />)

  render() {
    const { renderAgendaItem } = this;

    const note = 'Starts at 10:50 continued 110 min, but have talks and pitch at the same time, you can self-planning your times.';

    return (
      <Wrapper>
        <Header>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <Information>
            <Ticket>
              <BuyTicket />
            </Ticket>
            <Event>
              <EventDate />
              <EventLocation />
            </Event>
          </Information>
        </Header>
        <Main>
          <Link>
            Collaborative notes: <A href="http://hackmd.io/c/fedc2018" target="fedc">http://hackmd.io/c/fedc2018</A>
          </Link>
          <Link>
            即時口譯 (中文 CH): <A href="http://fedc.auxala.com/" target="fedc">http://fedc.auxala.com/</A>
          </Link>
          <DateTab>14</DateTab>
          <Lunch>Lunch: 10:50 ~ 12:40 at 10F Registration</Lunch>
          <Note>{note}</Note>
          <AgendaItemContainer>
            {agendas['14'].map(renderAgendaItem)}
          </AgendaItemContainer>
          <DateTab>15</DateTab>
          <AgendaItemContainer>
            {agendas['15'].map(renderAgendaItem)}
          </AgendaItemContainer>
        </Main>
        <SubTitle>SPONSORS</SubTitle>
        <SponsorsMain>
          <SponsorType>Evangelist</SponsorType>
          <div>
            {_.map(sponsors.evangelist, name => (
              <Img alt={name} src={`/static/sponsors/${name}.png`} />
            ))}
          </div>
          <SponsorType>Activist</SponsorType>
          <div>
            {_.map(sponsors.activist, name => (
              <Img alt={name} src={`/static/sponsors/${name}.png`} />
            ))}
          </div>
          <SponsorType>Civicist</SponsorType>
          <div>
            {_.map(sponsors.civicist, name => (
              <Img alt={name} src={`/static/sponsors/${name}.png`} />
            ))}
          </div>
          <SponsorType>Supporter</SponsorType>
          <div>
            {_.map(sponsors.supporter, name => (
              <Img alt={name} src={`/static/sponsors/${name}.png`} />
            ))}
          </div>
          <SponsorType>Partner</SponsorType>
          <div>
            {_.map(sponsors.partner, name => (
              <Img alt={name} src={`/static/sponsors/${name}.png`} />
            ))}
          </div>
        </SponsorsMain>
        <SubTitle>CONTRIBUTORS</SubTitle>
        <div>(Sort by name)</div>
        <Contributors>
          {_.sortBy(contributors).join('、')}
        </Contributors>
      </Wrapper>
    );
  }
}

export default withFedcBackground(Agenda);
