import React, { PureComponent } from 'react';
import Background from './Background';

export default Component => class extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Component {...this.props} />
      </React.Fragment>
    );
  }
};
