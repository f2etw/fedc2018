import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  width: 200px;
  height: 60px;

  @media (max-width: 1440px) {
    width: 130px;
    height: 40px;
  }
`;


const PathFill = styled.path``;
const PathStoke = styled.path``;
const PathDash = styled.path``;
const Text = styled.text``;

const BuyTicketLink = styled.a`
  fill: #02f694;
  cursor: pointer;

  &:hover {
    ${PathFill} {
      fill-opacity: 0.2;
    }
  }

  &:active {
    ${PathFill} {
      fill-opacity: 1;
    }

    ${PathDash},
    ${Text} {
      fill: #321f6e;
    }
  }
`;

class BuyTicket extends PureComponent {
  render() {
    return (
      <BuyTicketLink aria-label="Buy Ticket">
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 63">
          <PathFill
            d="M1 41a9 9 0 0 0 0-18V7a5 5 0 0 1 5-5h190a5 5 0 0 1 5 5v50a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V41z"
            fillOpacity="0"
          />
          <PathStoke
            d="M3 41.9v14.6c0 2 1.6 3.5 3.5 3.5h190c1.9 0 3.5-1.6 3.5-3.5v-50c0-2-1.6-3.5-3.5-3.5H6.5C4.5 3 3 4.6 3 6.5v14.6A10.5 10.5 0 0 1 3 42zM1.5 39a7.5 7.5 0 0 0 0-15C.7 24 0 23.3 0 22.5v-16C0 2.9 3 0 6.5 0h190c3.6 0 6.5 3 6.5 6.5v50c0 3.6-2.9 6.5-6.5 6.5H6.5C2.9 63 0 60 0 56.5v-16c0-.8.7-1.5 1.5-1.5z"
          />
          <PathDash
            d="M30 .5c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V2c0-.8.7-1.5 1.5-1.5zm0 11c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5zm0 11c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5zm0 11c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5zm0 11c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5zm0 11c.8 0 1.5.7 1.5 1.5v4a1.5 1.5 0 1 1-3 0v-4c0-.8.7-1.5 1.5-1.5z"
          />
          <Text
            x="53"
            y="32"
            fontSize="24"
            letterSpacing="1"
            alignmentBaseline="middle"
          >
            Buy Ticket
          </Text>
        </SVG>
      </BuyTicketLink>
    );
  }
}

export default BuyTicket;
