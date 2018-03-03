import React from 'react';
import styled from 'styled-components';

const Month = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.13rem;
`;

const Year = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
`;

const Date = () => (
  <time dateTime="2018-07-17 09:00">
    <Month>14 JUL</Month>
    <Year>2018</Year>
  </time>
);

export default Date;
