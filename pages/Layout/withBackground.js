import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/static/background.svg');
  background-size: 100%;
  width: 100%;
  margin: 0 auto;
  background-position: center center;
  background-repeat: no-repeat;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default Component => class extends PureComponent {
  render() {
    return (
      <Background>
        <Component {...this.props} />
      </Background>
    );
  }
};
