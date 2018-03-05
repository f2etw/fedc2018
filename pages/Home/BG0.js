import React, { PureComponent } from 'react';

class BG0 extends PureComponent {
  render() {
    return (
      <svg
        width="830"
        height="360"
        viewBox="0 0 1323 574"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            x="-2%"
            y="-5.3%"
            width="103.9%"
            height="110.7%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feGaussianBlur stdDeviation="5" in="SourceGraphic" />
          </filter>
          <filter
            x="-3%"
            y="-5.3%"
            width="106%"
            height="110.7%"
            filterUnits="objectBoundingBox"
            id="b"
          >
            <feGaussianBlur stdDeviation="5" in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-20 -19)" strokeWidth="5" fill="none" fillRule="evenodd">
          <rect
            stroke="#594A9D"
            opacity=".7"
            filter="url(#a)"
            transform="rotate(-15 404 378.5)"
            x="26.5"
            y="240.5"
            width="755"
            height="276"
            rx="138"
          />
          <rect
            stroke="#02F694"
            opacity=".3"
            filter="url(#b)"
            transform="rotate(-15 1084.846 200.417)"
            x="837.346"
            y="62.417"
            width="495"
            height="276"
            rx="138"
          />
        </g>
      </svg>
    );
  }
}

export default BG0;
