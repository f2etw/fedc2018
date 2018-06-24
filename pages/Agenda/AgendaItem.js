import _ from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import window from 'global/window';

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
  padding-left: 0.6em;
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

  @media (max-width: 30rem){
    margin-left: 0.79rem;
    margin-right: 0.79rem;
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

const Tags = styled.p`
  display: block;
  margin-top: .6rem;
  margin-bottom: 1.4rem;
`;

const Tag = styled.p`
  display: inline-block;
  color: #C2B9EE;
  font-size: 1.13rem;
  line-height: 1.63rem;
  letter-spacing: -0.001rem;
  border: 1px solid #C2B9EE;
  padding: .1rem .6rem;
  margin: .3rem;

  @media (max-width: 30rem){
    font-size: 0.63rem;
    margin-left: 0.79rem;
    margin-right: 0.79rem;
  }
`;

const Speaker = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 500;
  color: #C2B9EE;
  letter-spacing: 0.05rem;
  margin-bottom: 1.2rem;
`;

const Avatar = styled.img`
  width: 2.5rem;
  margin-right: 0.6rem;
  border-radius: 100%;
`;

const Name = styled.div`
  flex-grow: 1;
  flex-basis: 12rem;
  margin-top: 1rem;
  &:after{
    content:">>";
    margin-left: 0.2rem;
  }
`;

const WrapHighlight = styled.div`
  display: flex;
`;

const Highlight = styled.div`
  letter-spacing: .1rem;
  padding: .5rem;
  margin: .5rem .5rem .5rem 0;
  border: 1px solid #02f694;
`;

const Item = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
  color: #C2B9EE;
  font-size: 1rem;
  line-height: 1.3rem;
`;

export default class AgendaItem extends PureComponent {
  static propTypes = {
    time: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.shape()),
  }

  static defaultProps = {
    time: [],
    items: [],
  }

  onClick = (id) => {
    window.location = `/${id}`;
  };

  renderTag = tag => (<Tag key={tag}>{tag}</Tag>)

  render() {
    const { time, items } = this.props;
    const [start, end] = time;

    return (
      <Wrapper>
        <Time>
          <div>{start}</div>
          <End>{end}</End>
        </Time>
        <Divider />
        <Content>
          {_.map(items, ({
            highlights, title, speakers, descriptions, tags,
          }) => (
            <Item key={title}>
              {highlights && (
                <WrapHighlight>
                  {highlights.map(highlight => <Highlight>{highlight}</Highlight>)}
                </WrapHighlight>
              )}
              <Title>{title}</Title>
              {speakers && speakers.map(speaker => (
                <Speaker onClick={() => this.onClick(speaker.id)}>
                  <Avatar src={`/static/speaker/${speaker.id}.png`} />
                  <Name>{speaker.name}</Name>
                </Speaker>
              ))}
              {descriptions && (
                <React.Fragment>
                  {_.map(descriptions, description => (
                    <Description>{description}</Description>
                  ))}
                </React.Fragment>
              )}
              {tags && <Tags>{tags.map(this.renderTag)}</Tags>}
            </Item>
          ))}
        </Content>
      </Wrapper>
    );
  }
}
