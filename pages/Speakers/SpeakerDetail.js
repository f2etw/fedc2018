import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import document from 'global/document';
import styled, { css } from 'styled-components';
import BurgerClose from '../../components/BurgerClose';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2018;
  width: 100%;
  height: 100%;
  padding-top: 13.75rem;
  background-color: rgba(0, 0, 0, 0.4);  
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  display: flex;
  margin-right: 5rem;
`;

const End = styled.div`
   margin-top: 3.3rem;
   width: 47.5rem;
`;

const Name = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.25rem;  
`;

const Title = styled.div`
  font-size: 1.13rem;
  line-height: 1.63rem;
  color: #C2B9EE;
  font-weight: 500;
  margin-bottom: 0.63rem;
  
  &:last-of-type{
    margin-bottom: 1.88rem;
  }
`;

const Introduction = styled.p`
  color: white;
  line-height: 1.75;

  &:not(:last-of-type){
    margin-bottom: 1.75rem;
  }
`;

const StyledBurger = styled(BurgerClose)`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 2.56rem;
  left: 2.5rem;
`;

const Arrow = css`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed;')};
`;

const LeftArrow = styled.img`
  ${Arrow}
  left: 1.88rem;
`;

const RightArrow = styled.img`
  ${Arrow}
  right: 1.88rem;
`;

export default class SpeakerDetail extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.string),
    introductions: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func,
    onLast: PropTypes.func,
    onNext: PropTypes.func,
    hasLast: PropTypes.bool,
    hasNext: PropTypes.bool,
  }

  static defaultProps={
    name: '',
    avatar: '',
    titles: [],
    introductions: [],
    onClose: () => {},
    onLast: () => {},
    onNext: () => {},
    hasLast: false,
    hasNext: false,
  }

  componentDidMount() { document.body.style.overflow = 'hidden'; }
  componentWillUnmount() { document.body.style.overflow = 'auto'; }

  renderTitle = title => <Title key={title}>{title}</Title>;
  renderIntroduction = introduction =>
    (<Introduction key={introduction}>{introduction}</Introduction>);

  render() {
    const {
      avatar, name, titles, introductions,
      onClose, onLast, onNext,
      hasLast, hasNext,
    } = this.props;


    return (
      <Wrapper>
        <StyledBurger onClick={onClose} />
        <LeftArrow src="/static/icon/icon_arrow_left.svg" onClick={onLast} active={hasLast} />
        <RightArrow src="/static/icon/icon_arrow_right.svg" onClick={onNext} active={hasNext} />
        <Avatar src={avatar} />
        <End>
          <Name>{name}</Name>
          {titles.map(this.renderTitle)}
          {introductions.map(this.renderIntroduction)}
        </End>
      </Wrapper>
    );
  }
}
