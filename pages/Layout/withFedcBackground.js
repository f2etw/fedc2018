import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('/static/fedc.background.svg');
  background-size: 100%;
  width: 90rem;
  max-width: 100%;
  margin: 0 auto;
  background-position: center 7.69rem;
  background-repeat: no-repeat; 
  flex-grow: 1;
`;

export default Component => class extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Component {...this.props} />
      </Wrapper>
    );
  }
};
