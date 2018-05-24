import React, { PureComponent } from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import withFedcBackground from './Layout/withFedcBackground';
import Speaker from './Speakers/Speaker';
import SpeakerDetail from './Speakers/SpeakerDetail';
import data from './Speakers/data.json';
import BlurFilter from './Layout/BlurFilter';

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
  state = {
    activeIndex: undefined,
  }

  onActive = activeIndex => () => this.setState({ activeIndex });
  onClose = () => this.setState({ activeIndex: undefined });
  onLast = () => {
    const { activeIndex } = this.state;
    const nextActiveIndex = activeIndex - 1;
    if (nextActiveIndex < 0) { return; }
    this.setState({ activeIndex: nextActiveIndex });
  }
  onNext = () => {
    const { activeIndex } = this.state;
    const nextActiveIndex = activeIndex + 1;
    if (nextActiveIndex > data.length - 1) { return; }
    this.setState({ activeIndex: nextActiveIndex });
  }

  renderSpeaker = ({ name, avatar, titles }, index) => {
    const { activeIndex } = this.state;
    return (
      <Speaker
        key={name}
        name={name}
        avatar={avatar}
        titles={titles}
        active={activeIndex === index}
        onActive={this.onActive(index)}
      />
    );
  }

  renderInnerSpeakers = () => React.createElement(withMenu(withFedcBackground(() => (
    <Wrapper>
      <Title>SPEAKERS</Title>
      <Container>
        {data.map(this.renderSpeaker)}
      </Container>
    </Wrapper>
  ))))

  render() {
    const { activeIndex } = this.state;
    const {
      onClose, onLast, onNext, renderInnerSpeakers,
    } = this;

    return (
      <React.Fragment>
        <BlurFilter active={data[activeIndex]}>
          {renderInnerSpeakers()}
        </BlurFilter>
        { data[activeIndex] &&
          <SpeakerDetail
            {...data[activeIndex]}
            onClose={onClose}
            onLast={onLast}
            onNext={onNext}
            hasLast={activeIndex !== 0}
            hasNext={activeIndex !== data.length - 1}
          />}
      </React.Fragment>
    );
  }
}

export default Speakers;
