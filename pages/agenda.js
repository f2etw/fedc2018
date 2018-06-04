import React from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import DateTab from './Agenda/DateTab';
import AgendaItem from './Agenda/AgendaItem';
import agendas from './Agenda/data.json';
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
  display: flex;
  flex-wrap: wrap;
`;

const AgendaItemContainer = styled.div``;

class Agenda extends React.PureComponent {
  renderAgendaItem = (agenda, index) =>
    (<AgendaItem key={index} {...agenda} />)

  render() {
    const { renderAgendaItem } = this;

    return (
      <Wrapper>
        <Title>AGENDA</Title>
        <Main>
          <DateTab>14</DateTab>
          <AgendaItemContainer>
            {agendas.map(renderAgendaItem)}
          </AgendaItemContainer>
          <DateTab>15</DateTab>
        </Main>
      </Wrapper>
    );
  }
}

export default withMenu(withFedcBackground(Agenda));
