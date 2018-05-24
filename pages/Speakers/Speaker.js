import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 18em;
  &:not(:nth-child(3n)){
    margin-right: 5.13em;
  }

  &:nth-child(n+4){
    margin-top: 6.25em;
  }
`;

const Avatar = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  margin:0 2.75rem;
  margin-bottom: 1.9rem;
  display: block;
  filter: ${({ active }) => (active ? 'none' : 'grayscale(100%)')};
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
    name: PropTypes.string,
    avatar: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool,
    onActive: PropTypes.func,
  }

  static defaultProps={
    name: '',
    avatar: '',
    titles: [],
    active: false,
    onActive: () => {},
  }

  renderTitle = title => <Title key={title}>{title}</Title>

  render() {
    const {
      name, avatar, titles, onActive, active,
    } = this.props;

    return (
      <Wrapper>
        <Avatar src={avatar} onClick={onActive} active={active} />
        <Name onClick={onActive}>{name}</Name>
        {titles.map(this.renderTitle)}
      </Wrapper>
    );
  }
}
