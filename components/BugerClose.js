import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Burger = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <defs>
      <rect id="a" y="20" width="18" height="6" rx="3" />
      <rect id="b" y="20" width="46" height="6" rx="3" />
    </defs>
    <g transform="rotate(-45 17.879 25.121)" fill="none" fillRule="evenodd">
      <use fill="#02F694" xlinkHref="#a" />
      <rect stroke="#02F694" strokeWidth="2" x="1" y="21" width="16" height="4" rx="2" />
      <rect stroke="#02F694" strokeWidth="2" x="29" y="20" width="16" height="6" rx="3" />
      <g transform="rotate(90 23 23)">
        <use fill="#02F694" xlinkHref="#b" />
        <rect stroke="#02F694" strokeWidth="2" x="1" y="21" width="44" height="4" rx="2" />
      </g>
    </g>
  </Svg>
);

export default Burger;
