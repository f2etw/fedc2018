import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 40 40">
    <g fill="none" fillRule="evenodd">
      <rect
        width="36"
        height="6"
        x="2.1631"
        y="4"
        fill="#02F694"
        rx="3"
        transform="rotate(-15 20.1631 7)"
      />
      <rect
        width="34"
        height="6"
        x="3"
        y="17"
        stroke="#02F694"
        strokeWidth="2"
        rx="3"
        transform="rotate(-15 20 20)"
      />
      <rect
        width="36"
        height="6"
        x="2.1631"
        y="30"
        fill="#02F694"
        rx="3"
        transform="rotate(-15 20.1631 33)"
      />
    </g>
  </svg>
);

Burger.propTypes = {
  size: PropTypes.string,
};

Burger.defaultProps = {
  size: '2.5rem',
};

export default Burger;
