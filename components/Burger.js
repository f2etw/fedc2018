import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Burger = ({ className, active, href }) => (
  <Link href={href}>
    <img
      className={className}
      src={active ? '/static/icon/icon_close.svg' : '/static/icon/icon_menu.svg'}
      alt=""
    />
  </Link>
);

Burger.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  href: PropTypes.string,
};

Burger.defaultProps = {
  className: '',
  active: false,
  href: '',
};

export default styled(Burger)``;
