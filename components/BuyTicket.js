import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BuyTicketLink = styled.a`
  --fill: #02F694;

  fill: var(--fill);
  fill-opacity: 0;
  stroke: var(--fill);
  stroke-width: 3;

  &:hover {
    fill-opacity: 0.2;
  }

  &:active {
    fill-opacity: 1;

    & line {
      stroke: #321f6e;
    }
  }
`;

class BuyTicket extends PureComponent {
  render() {
    return (
      <BuyTicketLink>
        <svg width="200px" height="60px" viewBox="0 0 204 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40a9 9 0 0 0 0-18V6a5 5 0 0 1 5-5h190a5 5 0 0 1 5 5v50a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V40z" stroke-linejoin="round" />
          <line x1="27" y1="1" x2="27" y2="61" stroke-dasharray="5, 6" />
        </svg>
      </BuyTicketLink>
    );
  }
}

export default BuyTicket;
