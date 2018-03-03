import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from './Logo';

const YearImg = styled.img`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(23.5px, -4.43px);
`;

const FedcImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 90px;
  transform: translateX(-22.5px);
`;

const CoverLogo = ({ className }) => (
  <div className={className}>
    <Logo />
    <YearImg src="/static/2018.svg" alt="" />
    <FedcImg src="/static/fedc_w.svg" alt="" />
  </div>
);

CoverLogo.propTypes = {
  className: PropTypes.string,
};

CoverLogo.defaultProps = {
  className: '',
};

export default styled(CoverLogo)`
  position: relative;
  width: 400px;
  height: 400px;

  ${Logo} {
    margin-top: 30px;
  }
`;
