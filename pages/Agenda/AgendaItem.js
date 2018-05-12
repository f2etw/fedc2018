import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  display: flex;
  &:not(:first-child){
    margin-top: 3.84rem;
  }  
`;

const Time = styled.div`
  color: white;
  font-size: 1.13em;
  text-align: right;
  width: 2.5em;
  flex-shrink: 0;  
`;

const End = styled.div`
  margin-top: 0.3rem;
  position: relative;;
  &:before{
    content: "~";
    position: absolute;
    left: -0.6em;
  }
`;

const Divider = styled.div`
  margin-left: 1.79rem;
  margin-right: 1.79rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;;
  flex-direction: column;
  &:before{
    content: "";
    display: block;
    width: 0.9rem;
    height: 0.9em;
    margin-top: 0.15rem;    
    background-color: #321F6E;
    border-radius: 50%;
    opacity: 0.5;
    border: #02f674 0.2rem solid;
  }
  &:after{
    content: "";
    display: block;
    width: 1px;
    background-color: #02f674;
    flex-grow: 1;
  }
`;

const Content = styled.div`
  position: relative;
  top: -0.1em;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
`;

const Introduction = styled.p`
  color: #C2B9EE;
  font-size: 1.13rem;
  line-height: 1.63rem;
  letter-spacing: -0.001rem;
  &:not(:first-of-type){
    margin-top: 1.5rem;
  }
`;

const Speaker = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #C2B9EE;
  letter-spacing: 0.05rem;
  margin-bottom: 1.2rem;

  &:after{
    content:">>";
    margin-left: 0.2rem;
  }
`;

const Avatar = styled.img`
  width: 2.5rem;
  margin-right: 0.6rem;
`;


export default class AgendaItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    speaker: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    time: PropTypes.arrayOf(PropTypes.string),
    introductions: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps={
    title: '',
    speaker: null,
    time: [],
    introductions: [],
  }

  renderIntroduction = introduction =>
    (<Introduction key={introduction}>{introduction}</Introduction>)

  render() {
    const {
      title, speaker, time, introductions,
    } = this.props;
    const [start, end] = time;

    return (
      <Wrapper>
        <Time>
          <div>{start}</div>
          <End>{end}</End>
        </Time>
        <Divider />
        <Content>
          <Title>{title}</Title>
          { speaker &&
          <Speaker>
            <Avatar src={speaker.avatar} />
            {speaker.name}
          </Speaker>}
          { introductions &&
          introductions.map(this.renderIntroduction) }
        </Content>
      </Wrapper>
    );
  }
}
