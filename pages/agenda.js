import React from 'react';
import styled, { css } from 'styled-components';
import withMenu from './Layout/withMenu';
import withBackground from './Layout/withBackground';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -390px;
  margin-top: -280px;
`;

const Tabs = styled.div`
  display: flex;
  margin-left: 40px;
`;

const Tab = styled.div`
  font-size: 24px;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  cursor: pointer;
  ${({ active }) => active && css`
    border-bottom: 2px solid #FFF;
  `}
`;

const Legend = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
  padding-left: 20px;
`;

const Program = styled.div`
  width: 260px;
`;

const Programs = styled.div`
  display: flex;
`;

const Time = styled.div`
  position: absolute;
  left: -120px;
  text-align: right;
  width: 110px;
  font-size: 14px;
`;

const Timeline = styled.ul`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 140px;
`;

const TimelineItem = styled.li`
  position: relative;
  padding: 0 0 20px 18px;
  list-style: none;
  margin: 0;
  font-size: 18px;
  line-height: 23px;
  color: #02f694;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 6.5px;
    width: 10px;
    height: 10px;
    background-color: transparent;
    border-radius: 100px;
    border: 2px solid #02f694;
    box-sizing: border-box;
  }

  &:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 16.5px;
    height: calc(100% - 10px);
    border-left: 2px solid #e8e8e8;
    box-sizing: border-box;
  }

  &:last-child:after {
    display: none;
  }
`;

class Index extends React.PureComponent {
  state = {
    tab: '14',
  }

  onDay1Click = () => this.setState({ tab: '14' });

  onDay2Click = () => this.setState({ tab: '15' });

  render() {
    const { tab } = this.state;

    return (
      <Container>
        <Tabs>
          <Tab active={tab === '14'} onClick={this.onDay1Click}>14 JUL</Tab>
          <Tab active={tab === '15'} onClick={this.onDay2Click}>15 JUL</Tab>
        </Tabs>
        <Programs>
          {tab === '14' && [
            <Program key="developer_program">
              <Legend>Developer Program</Legend>
              <Timeline>
                <TimelineItem><Time>09:00 - 09:20</Time> Openning</TimelineItem>
                <TimelineItem><Time>09:20 - 10:00</Time> Talk</TimelineItem>
                <TimelineItem><Time>10:00 - 10:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>11:00 - 11:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>12:00 - 12:40</Time> Lunch</TimelineItem>
                <TimelineItem><Time>13:00 - 13:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>13:40 - 14:20</Time> Talk</TimelineItem>
                <TimelineItem><Time>14:40 - 15:20</Time> Talk</TimelineItem>
                <TimelineItem><Time>15:20 - 16:00</Time> Talk</TimelineItem>
                <TimelineItem><Time>16:20 - 17:40</Time> Forum</TimelineItem>
                <TimelineItem><Time>17:40 - 18:00</Time> Closeing</TimelineItem>
              </Timeline>
            </Program>,
            <Program key="designer_program">
              <Legend>Designer Program</Legend>
              <Timeline>
                <TimelineItem><Time>09:00 - 09:20</Time> Openning</TimelineItem>
                <TimelineItem><Time>09:20 - 10:00</Time> Talk</TimelineItem>
                <TimelineItem><Time>10:00 - 10:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>11:00 - 11:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>12:00 - 12:40</Time> Talk</TimelineItem>
                <TimelineItem><Time>13:00 - 13:40</Time> Lunch</TimelineItem>
                <TimelineItem><Time>13:40 - 14:20</Time> Talk</TimelineItem>
                <TimelineItem><Time>14:40 - 15:20</Time> Talk</TimelineItem>
                <TimelineItem><Time>15:20 - 16:00</Time> Talk</TimelineItem>
                <TimelineItem><Time>16:20 - 17:40</Time> Forum</TimelineItem>
                <TimelineItem><Time>17:40 - 18:00</Time> Closeing</TimelineItem>
              </Timeline>
            </Program>,
            <Program key="pitch space">
              <Legend>Pitch Space</Legend>
              <Timeline>
                <TimelineItem><Time>11:00 - 11:20</Time> Free</TimelineItem>
                <TimelineItem><Time>11:20 - 11:40</Time> Free</TimelineItem>
                <TimelineItem><Time>11:40 - 12:00</Time> Free</TimelineItem>
                <TimelineItem><Time>12:00 - 12:20</Time> Free</TimelineItem>
                <TimelineItem><Time>12:20 - 12:40</Time> Free</TimelineItem>
                <TimelineItem><Time>12:40 - 13:00</Time> Free</TimelineItem>
                <TimelineItem><Time>13:00 - 13:20</Time> Free</TimelineItem>
                <TimelineItem><Time>13:20 - 13:40</Time> Free</TimelineItem>
                <TimelineItem><Time>13:40 - 14:00</Time> Free</TimelineItem>
                <TimelineItem><Time>14:00 - 14:20</Time> Free</TimelineItem>
                <TimelineItem><Time>14:20 - 14:40</Time> Free</TimelineItem>
              </Timeline>
            </Program>,
          ]}
          {tab === '15' && [
            <Program key="developer_workshops">
              <Legend>Developer Workshops</Legend>
              <Timeline>
                <TimelineItem><Time>09:00 - 12:00</Time> Workshop</TimelineItem>
                <TimelineItem><Time>13:00 - 16:00</Time> Workshop</TimelineItem>
              </Timeline>
            </Program>,
            <Program key="designer_workshops">
              <Legend>Designer Workshops</Legend>
              <Timeline>
                <TimelineItem><Time>09:00 - 12:00</Time> Workshop</TimelineItem>
                <TimelineItem><Time>13:20 - 16:00</Time> Workshop</TimelineItem>
              </Timeline>
            </Program>,
          ]}
        </Programs>
      </Container>
    );
  }
}

export default withMenu(withBackground(Index));
