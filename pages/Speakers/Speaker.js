import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import window from 'global/window';

const Wrapper = styled.div`
  width: 18em;
  height: 26em;
`;

const Avatar = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  margin:0 2.75rem;
  margin-bottom: 1.9rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 300ms;
  cursor: pointer;

  &:hover{
    filter: grayscale(0%);
  }
`;

const Name = styled.div`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;

const Title = styled.pre`
  text-align: center;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #C2B9EE;
  font-weight: 500;

  &:not(:last-of-type){
    margin-bottom: 1.15em;
  }
`;

export default class Speaker extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps={
    id: '',
    name: '',
    avatar: '',
    titles: [],
  }

  onClick = () => {
    const { id } = this.props;
    window.location = `/${id}`;
  }

  renderTitle = title => <Title key={title}>{title}</Title>

  render() {
    const { name, avatar, titles } = this.props;

    return (
      <Wrapper onClick={this.onClick}>
        <Avatar src={avatar} />
        <Name>{name}</Name>
        {titles.map(this.renderTitle)}
      </Wrapper>
    );
  }
}
