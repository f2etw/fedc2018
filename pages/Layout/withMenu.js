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
    menu: { visible: false },
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: { visible: !menu.visible } });
  }

  render() {
    const { toggleMenu } = this;
    const { menu } = this.state;
    const { url: { pathname } } = this.props;

    return (
      <Wrapper>
        <Header toggleMenu={toggleMenu} menuVisible={menu.visible} />
        <BlurFilter active={menu.visible}>
          <Component {...this.props} />
        </BlurFilter>
        <Menu visible={menu.visible} pathname={pathname} />
      </Wrapper>
    );
  }
};
