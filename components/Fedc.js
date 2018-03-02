import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Fedc = ({ className }) => (
  <img className={className} src="/static/fedc_w.svg" alt="" />
);

Fedc.propTypes = {
  className: PropTypes.string,
};

Fedc.defaultProps = {
  className: '',
};

export default styled(Fedc)`
  display: block;
`;
