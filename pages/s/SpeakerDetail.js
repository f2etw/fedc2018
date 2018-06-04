import _ from 'lodash';
import fp from 'lodash/fp';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withMenu from '../Layout/withMenu';
import Wrapper from '../Layout/Wrapper';
import withFedcBackground from '../Layout/withFedcBackground';
import data from '../Speakers/data.json';

const SpeakerWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 8rem);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: -3rem;
  max-width: 57.5rem;
  width: 100%;

  @media (max-width: 40em){
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: flex;
  width: 14.5rem;
  height: 14.5rem;
  padding: 2rem;
  border-radius: 50%;
`;

const End = styled.div`
  margin-top: 3.3rem;
  flex-grow: 1;
  padding-right: 2rem;

  @media (max-width: 40em){
    padding-left: 2rem;
  }
`;

const Name = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

const Title = styled.div`
  font-size: 1.13rem;
  line-height: 1.63rem;
  color: #C2B9EE;
  font-weight: 500;
  margin-bottom: 0.63rem;

  &:last-of-type{
    margin-bottom: 1.88rem;
  }
`;

const Introduction = styled.p`
  color: white;
  line-height: 1.75;

  &:not(:last-of-type){
    margin-bottom: 1.75rem;
  }
`;

class SpeakerDetail extends React.PureComponent {
  renderTitle = title => <Title key={title}>{title}</Title>;

  renderIntroduction = introduction => (
    <Introduction key={introduction}>
      {introduction}
    </Introduction>
  );

  render() {
    const { id } = this.props;
    const speaker = _.find(data, { id });
    const {
      avatar, name, titles, introductions,
    } = speaker;

    return (
      <SpeakerWrapper>
        <Container>
          <Avatar src={avatar} />
          <End>
            <Name>{name}</Name>
            {titles.map(this.renderTitle)}
            {introductions.map(this.renderIntroduction)}
          </End>
        </Container>
      </SpeakerWrapper>
    );
  }
}

SpeakerDetail.propTypes = {
  id: PropTypes.string,
};

SpeakerDetail.defaultProps = {
  id: '',
};

export default fp.compose(
  withMenu,
  withFedcBackground,
)(SpeakerDetail);
