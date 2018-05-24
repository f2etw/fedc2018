import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import document from 'global/document';
import Logo from '../../components/Logo';
import FacebookIcon from '../../components/FacebookIcon';

const Scroll = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 19;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 12rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px){
    height: auto;
    padding-left: 2.5em;
    padding-right: 2.5em;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px){
    display:none;
  }
`;

const Content = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position:relative;

  @media (max-width: 768px){
    margin-top: 0rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Start = styled.div`
  max-width: 35rem;
  width: 50%;
  border-right: #594A9D 0.1rem solid;

  display: flex;
  justify-content: center;
  align-items:center;

  @media (max-width: 768px){
    border-right: none;
    width: 100%;
  }
`;

const MenuItemGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px){
    align-items: center;
  }
`;

const MenuItem = styled.a`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${({ active }) => (active ? '#02F694' : '#C2B9EE')};
  letter-spacing: 0.3rem;
  line-height: 2.2rem;
  text-decoration: none;
  
  &:not(:first-child){
    margin-top: 2em;
  }

  &:hover{
    color: white;
  }

  &:active{
    color: '#02F694';
  }

  @media (max-width: 768px){
    font-size: 2rem;
    &:not(:first-child){
      margin-top: 1.8em;
    }
  }
`;

const End = styled.div`
  max-width: 35rem;
  width: 50%;
  border-left: #594A9D 0.1rem solid;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px){
    border-left: none;
    border-top: #594A9D 0.1rem solid;    
    width: 100%;    
  }
`;


const FacebookIconContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 100%;
  margin-top: 5em;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 6em;
    margin-bottom: 6em;
  }
`;

const OurSponsors = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  line-height: 2rem;
  color: #02F694;
  margin-top: 2em;
  margin-bottom: 1em;

  @media (max-width: 768px){
    display: none;
  }
`;

export default class Menu extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      active: PropTypes.bool,
    })),
    pathname: PropTypes.string,
  };

  static defaultProps = {
    visible: false,
    items: [
      { name: 'HOME', href: '/' },
      { name: 'ABOUT', href: '/about' },
      { name: 'AGENDA', href: '/agenda' },
      { name: 'SPEAKERS', href: '/speakers' },
    ],
    pathname: '',
  };

  componentDidMount() { document.body.style.overflow = 'hidden'; }
  componentWillUnmount() { document.body.style.overflow = 'auto'; }

  renderMenuItem = ({ name, href }, index) => {
    const { pathname } = this.props;
    return (
      <MenuItem key={index} href={href} active={pathname === href}>
        {name}
      </MenuItem>
    );
  }

  render() {
    const { visible, items } = this.props;

    return (
      <Scroll visible={visible}>
        <Wrapper>
          <LogoContainer>
            <Logo width="6.86em" height="3.57em" />
          </LogoContainer>
          <Content>
            <Start>
              <MenuItemGroup>
                { items.map(this.renderMenuItem) }
              </MenuItemGroup>
            </Start>
            <FacebookIconContainer>
              <a
                href="https://www.facebook.com/events/196401260949269/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </FacebookIconContainer>
            <End>
              <OurSponsors>OUR SPONSORS</OurSponsors>
              {
                // TODO: add sponsors logo here
              }
            </End>
          </Content>
        </Wrapper>
      </Scroll>
    );
  }
}

