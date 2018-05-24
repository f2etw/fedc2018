import React, { PureComponent } from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import withFedcBackground from './Layout/withFedcBackground';
import Speaker from './Speakers/Speaker';
import data from './Speakers/data.json';

const Wrapper = styled.div`
  flex-grow: 1;
  width: 64.26rem;
  margin:9.88rem auto 16.75rem auto;
`;

const Title = styled.h1`
  font-size: 1.88rem;
  letter-spacing: 1rem;
  margin-left: 0.42rem;
  margin-bottom: 6.25rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Speakers extends PureComponent {
  renderSpeaker = ({ name, avatar, titles }) => (
    <Speaker name={name} avatar={avatar} titles={titles} />
  )

  render() {
    return (
      <Wrapper>
        <Title>SPEAKERS</Title>
        <Container>
          {data.map(this.renderSpeaker)}
        </Container>
      </Wrapper>
    );
  }
}

export default withMenu(withFedcBackground(Speakers));
