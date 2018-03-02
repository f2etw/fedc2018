import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Year = ({ className }) => (
  <img className={className} src="/static/2018.svg" alt="" />
);

Year.propTypes = {
  className: PropTypes.string,
};

Year.defaultProps = {
  className: '',
};

export default styled(Year)`
  display: block;
`;
