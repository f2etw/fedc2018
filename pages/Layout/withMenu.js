import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Header from './Header';
import Menu from '../Layout/Menu';
import BlurFilter from '../Layout/BlurFilter';

export default Component => class extends PureComponent {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }

  static defaultProps = {
    url: {},
  };

  state = {
    visible: false,
  }

  toggleMenu = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { toggleMenu } = this;
    const { visible } = this.state;
    const { url: { pathname } } = this.props;

    return (
      <Wrapper>
        <Header toggleMenu={toggleMenu} menuVisible={visible} />
        <BlurFilter active={visible}>
          <Component {...this.props} />
        </BlurFilter>
        {visible && <Menu pathname={pathname} />}
      </Wrapper>
    );
  }
};
