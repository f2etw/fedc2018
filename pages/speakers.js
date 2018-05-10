import React, { PureComponent } from 'react';
import withMenu from './Layout/withMenu';
import withBackground from './Layout/withBackground';


class Speaker extends PureComponent {
  render() {
    return (
      <div />
    );
  }
}

export default withMenu(withBackground(Speaker));
