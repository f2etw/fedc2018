import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    flex-direction: column;
    margin-bottom: 3.125rem;
  }
`;

const ButtonLink = styled.a`
  line-height: 1.8rem;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0 1.25rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  &,
  &:active {
    color: #02f694;
  }

  & + & {
    border-left: 2px solid #594a9d;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    text-align: center;
    width: 240px;
    padding: 0.625rem 2.5rem;
    border-radius: 1.5rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &,
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }

    & + & {
      border-left: none;
      margin-top: 1.25rem;
    }
  }
`;

class MainButtons extends PureComponent {
  render() {
    return (
      <Content>
        <ButtonLink href="mailto:2018@fed.tw">Call For Sponsors</ButtonLink>
        <ButtonLink href="mailto:2018@fed.tw">Call For Speakers</ButtonLink>
      </Content>
    );
  }
}

export default MainButtons;
