import React, { PureComponent } from 'react';

class GB1 extends PureComponent {
  render() {
    return (
      <svg width="412" height="190" viewBox="0 0 660 306" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            x="-7.5%"
            y="-20%"
            width="115%"
            height="140%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feGaussianBlur stdDeviation="10" in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-17 8)" fill="#594A9D" fillRule="evenodd">
          <rect
            opacity=".5"
            filter="url(#a)"
            transform="rotate(-15 457.114 124.079)"
            x="257.614"
            y="49.079"
            width="399"
            height="150"
            rx="75"
          />
          <rect
            opacity=".2"
            transform="rotate(-15 112.712 217.392)"
            x="16.323"
            y="142.392"
            width="192.777"
            height="150"
            rx="75"
          />
        </g>
      </svg>
    );
  }
}

export default GB1;
