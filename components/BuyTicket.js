import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BuyTicket = ({ className }) => (
  <button className={className}>
    <span>Buy Ticket</span>
  </button>
);


BuyTicket.propTypes = {
  className: PropTypes.string,
};

BuyTicket.defaultProps = {
  className: '',
};

export default styled(BuyTicket)`
  font-family: Barlow;
  font-weight: 500;
  font-size: 24px;
  color: #02f694;
  letter-spacing: 0.5px;
  text-align: left;
  background-image: url('/static/btn_ticket_n.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  width: 200px;
  height: 60px;
  padding-left: 56px;
  &:hover {
    background-image: url('/static/btn_ticket_h.svg');
  }
  &:active {
    background-image: url('/static/btn_ticket_p.svg');
    color: #321f6e;
  }
`;
