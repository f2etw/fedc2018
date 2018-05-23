import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  filter: grayscale(100%);
  margin: 0 auto;
  display: block;
`;

const Name = styled.div`
  font-family: SourceHanSansTC-Medium;
  font-size: 24px;
  color: #02F694;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 24px;
`;

const Title = styled.div`
  font-family: PingFangTC-Medium;
  font-size: 14px;
  color: #C2B9EE;
  text-align: center;
  line-height: 20px;
`;

const Speaker = ({ avatar, name, title }) => (
  <Wrapper>
    <Image src={avatar} />
    <Name>{name}</Name>
    <Title>{title}</Title>
  </Wrapper>
);

Speaker.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

Speaker.defaultProps = {
  avatar: '',
  name: '',
  title: '',
};

export default Speaker;
