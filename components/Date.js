import React from 'react';
import styled from 'styled-components';

const Month = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.13rem;

  @media (max-width: 768px) {
    display: inline;
  }
`;

const Year = styled.div`
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: inline;
    font-size: 1.5rem;
  }
`;

const Date = props => (
  <time dateTime="2018-07-17 09:00" {...props}>
    <Month>14 JUL&nbsp;</Month>
    <Year>2018</Year>
  </time>
);

export default Date;
