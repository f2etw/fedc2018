import React, { PureComponent } from 'react';

class BG2 extends PureComponent {
  render() {
    return (
      <svg width="19rem" height="8.4rem" viewBox="0 0 307 134" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="a">
            <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
          </filter>
          <filter id="b">
            <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
          </filter>
        </defs>
        <g
          transform="rotate(-15 302.50166672 32.0976943)"
          stroke="#02F694"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        >
          <rect
            opacity=".60000002"
            filter="url(#a)"
            x="1.5"
            y="1.5"
            width="203.672131"
            height="51"
            rx="25.5"
          />
          <rect
            opacity=".30000001"
            filter="url(#b)"
            x="229.155738"
            y="1.5"
            width="68.3442623"
            height="51"
            rx="25.5"
          />
        </g>
      </svg>
    );
  }
}

export default BG2;
