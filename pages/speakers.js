import React from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import withFedcBackground from './Layout/withFedcBackground';
import Speaker from './Speakers/Speaker';
import data from './Speakers/data.json';

const Wrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto 16.75rem auto;
`;

const Title = styled.h1`
  font-size: 1.88rem;
  letter-spacing: 1rem;
  margin-left: 0.42rem;
  margin-bottom: 4.25rem;

  @media (max-width: 40em){
    margin-left: 0;
    margin-right: -0.5rem;
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 40em){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60em){
    grid-template-columns: repeat(3, 1fr);
  }
`;

class Speakers extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>SPEAKERS</Title>
        <Container>
          {data.map(props => (<Speaker {...props} />))}
        </Container>
      </Wrapper>
    );
  }
}

export default withMenu(withFedcBackground(Speakers));
