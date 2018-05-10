import React, { PureComponent } from 'react';

class BG3 extends PureComponent {
  render() {
    return (
      <svg width="387" height="155" viewBox="0 0 620 248" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            x="-27.9%"
            y="-35.6%"
            width="155.7%"
            height="171.1%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feGaussianBlur stdDeviation="10" in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="rotate(-180 314.5 116)" fill="none" fillRule="evenodd">
          <rect
            stroke="#02F694"
            strokeWidth="3"
            opacity=".3"
            transform="rotate(-15 229.76 141.524)"
            x="5.166"
            y="100.854"
            width="449.189"
            height="81.341"
            rx="40.67"
          />
          <rect
            fill="#02F694"
            opacity=".7"
            filter="url(#a)"
            transform="rotate(-15 551.017 54.676)"
            x="497.196"
            y="12.506"
            width="107.642"
            height="84.341"
            rx="42.17"
          />
        </g>
      </svg>
    );
  }
}

export default BG3;
