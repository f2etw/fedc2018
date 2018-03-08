import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  &:hover,&:active{
    path{
      fill: #02F694;
    }
  }
`;

class FacebookIcon extends PureComponent {
  render() {
    return (
      <Svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm4.476 18.634h-2.928V29.07h-4.34V18.634h-2.062v-3.69h2.063V12.56c0-1.71.812-4.38 4.379-4.38l3.215.013v3.58H20.47c-.38 0-.92.19-.92 1.005v2.168h3.306l-.38 3.689z" fill="#C2B9EE" fillRule="nonzero" />
      </Svg>
    );
  }
}

export default FacebookIcon;
