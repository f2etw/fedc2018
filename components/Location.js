import React from 'react';
import styled from 'styled-components';

const Chinese = styled.div`
  font-family: STYuanti-TC-Bold;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.45rem;
`;

const English = styled.div`
  font-family: Barlow;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
`;

const Location = () => (
  <div>
    <Chinese>張榮發國際會議中心</Chinese>
    <English>Evergreen International Convention Center</English>
  </div>
);

export default Location;
