import React from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import DateTab from './Agenda/DateTab';
import LocationTab from './Agenda/LocationTab';
import AgendaItem from './Agenda/AgendaItem';
import data from './Agenda/data.json';
import withFedcBackground from './Layout/withFedcBackground';

const Wrapper = styled.div`
  width: 62rem;
  margin: 9.88rem auto 13.19rem auto;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 1.88rem;
  letter-spacing: 1rem;
  margin-left: 0.42rem;
  margin-bottom: 0.96rem;
`;

const Main = styled.div`
  display: flex;
`;

const Left = styled.div``;
const Right = styled.div`
  flex-grow: 1;
  margin-left: 4rem;
`;

const LocationTabContainer = styled.div`
  margin-top: 1.9rem;
  margin-left: 7.2rem;
  margin-bottom: 4rem;
  display: flex;
`;

const AgendaItemContainer = styled.div``;

class Agenda extends React.PureComponent {
  constructor(props) {
    super(props);

    const dateTabs = Object.keys(data);
    const locationTabs = Object.keys(data[dateTabs[0]]);

    this.state = {
      date: dateTabs[0],
      location: locationTabs[0],
    };
  }

  onChangDate = date => () => {
    const location = Object.keys(data[date])[0];
    this.setState({ date, location });
  }

  onChangeLocation = location => () => {
    this.setState({ location });
  }

  renderAgendaItem = (agenda, index) =>
    (<AgendaItem key={index} {...agenda} />)

  renderDateTab = (date) => {
    const { onChangDate } = this;
    const { date: activeDate } = this.state;
    return (
      <DateTab
        active={date === activeDate}
        onClick={onChangDate(date)}
        key={date}
      >
        {date}
      </DateTab>
    );
  }

  renderLocationTab = (location) => {
    const { onChangeLocation } = this;
    const { location: activeLocation } = this.state;
    return (
      <LocationTab
        active={location === activeLocation}
        onClick={onChangeLocation(location)}
        key={location}
      >
        {location}
      </LocationTab>
    );
  }


  render() {
    const { renderDateTab, renderLocationTab, renderAgendaItem } = this;
    const { date, location } = this.state;
    const dateTabs = Object.keys(data);
    const locationTabs = Object.keys(data[date]);
    const agendas = data[date][location];

    return (
      <Wrapper>
        <Title>AGENDA</Title>
        <Main>
          <Left>
            {dateTabs.map(renderDateTab)}
          </Left>
          <Right>
            <LocationTabContainer>
              {locationTabs.map(renderLocationTab)}
            </LocationTabContainer>
            <AgendaItemContainer>
              {agendas.map(renderAgendaItem)}
            </AgendaItemContainer>
          </Right>
        </Main>
      </Wrapper>
    );
  }
}

export default withMenu(withFedcBackground(Agenda));
