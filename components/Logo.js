import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <img className={className} src="/static/logo_index.svg" alt="" />
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default styled(Logo)`
  display: block;
`;
