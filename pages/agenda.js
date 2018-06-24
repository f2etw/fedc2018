import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import DateTab from './Agenda/DateTab';
import AgendaItem from './Agenda/AgendaItem';
import agendas from './Agenda/data.json';
import sponsors from './Sponsors/data.json';
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

const Sponsors = styled(Title)`
  margin-top: 3rem;
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
  max-width: 100%;
`;

class Agenda extends React.PureComponent {
  renderAgendaItem = (agenda, index) =>
    (<AgendaItem key={index} {...agenda} />)

  render() {
    const { renderAgendaItem } = this;

    const note = 'Starts at 10:50 continued 110 min, but have talks and pitch at the same time, you can self-planning your times.';

    return (
      <Wrapper>
        <Title>AGENDA</Title>
        <Main>
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
        <Sponsors>SPONSORS</Sponsors>
        <SponsorsMain>
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
      </Wrapper>
    );
  }
}

export default withMenu(withFedcBackground(Agenda));
