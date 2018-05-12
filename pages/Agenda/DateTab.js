import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 1;
  opacity: ${({ active }) => (active ? '1' : '0.3')};  
  cursor: pointer;

  &:not(:first-child){
    margin-top: 1rem;
  }
`;

const Date = styled.div`
  font-size: 9rem;
  color: white;
  font-weight: 500;
  margin-left: 0.1rem;
  margin-right: 0.9rem;
`;

const Month = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.78rem;
  letter-spacing: 0.1rem;
`;


export default class DateTab extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps={
    active: false,
    children: '',
    onClick: () => {},
  }

  render() {
    const { active, children, onClick } = this.props;

    return (
      <Wrapper active={active} onClick={onClick}>
        <Date>{children}</Date><Month>JUL</Month>
      </Wrapper>
    );
  }
}
