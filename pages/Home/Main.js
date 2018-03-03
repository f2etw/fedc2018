import React, { PureComponent } from 'react';
import { tween, easing } from 'the-oa';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { tap } from 'rxjs/operators/tap';
import { observeOn } from 'rxjs/operators/observeOn';
import { switchMap } from 'rxjs/operators/switchMap';
import { Scheduler } from 'rxjs';
import { map } from 'rxjs/operators/map';
import styled from 'styled-components';
import FEDC from '../../components/Fedc';
import Logo from '../../components/Logo';
import YearIcon from '../../components/YearIcon';
import BG0 from './BG0';
import BG1 from './BG1';
import BG2 from './BG2';
import BG3 from './BG3';
import BG4 from './BG4';
import BG5 from './BG5';
import BG6 from './BG6';

const Content = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 4.25rem;
  z-index: 10;
`;

const YearContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  margin-left: 50px;
  z-index: 10;
`;

const FedcContainer = styled.div`
  position: absolute;
  top: 17rem;
  margin-left: -50px;
  z-index: 10;
`;

const BG0Container = styled.div`
  position: absolute;
  left: -6rem;
  z-index: 0;
`;

const BG1Container = styled.div`
  position: absolute;
  top: 5rem;
  right: -4rem;
  z-index: 1;
`;

const BG2Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 8rem;
  z-index: 2;
`;

const BG3Container = styled.div`
  position: absolute;
  left: 8rem;
  top: 17rem;
  z-index: 3;
`;

const BG4Container = styled.div`
  position: absolute;
  bottom: 8rem;
  right: 20rem;
  z-index: 4;
`;

const BG5Container = styled.div`
  position: absolute;
  top: 5rem;
  left: -2rem;
  z-index: 5;
`;

const BG6Container = styled.div`
  position: absolute;
  top: 13rem;
  left: -12rem;
  z-index: 6;
`;

class Main extends PureComponent {
  componentDidMount() {
    const mouseMove = fromEvent(this.containerDOM, 'mousemove');
    // const mouseEnter = fromEvent(this.containerDOM, 'mouseenter');
    const mouseLeave = fromEvent(this.containerDOM, 'mouseleave');

    const {
      width, left, top, height,
    } = this.containerDOM.getBoundingClientRect();

    const computeXYPercentage = ({ x, y }) => ({
      leftP: (x - left - (width / 2)) / width,
      topP: (y - top - (height / 2)) / height,
    });

    const animeDOM = ({ leftP, topP }) => {
      this.logoDOM.style.transform = `translate3d(${leftP * 100}px, ${topP * 50}px, 0)`;
      this.yearDOM.style.transform = `translate3d(${-leftP * 20}px, ${topP * 20}px, 0)`;
      this.fedcDOM.style.transform = `translate3d(${leftP * 50}px, ${topP * 50}px, 0)`;
      this.bg0.style.transform = `translate3d(${leftP * 5}px, ${topP * 5}px, 0)`;
      this.bg1.style.transform = `translate3d(${leftP * 5}px, ${topP * 5}px, 0)`;
      this.bg2.style.transform = `translate3d(${leftP * 5}px, ${-topP * 5}px, 0)`;
      this.bg3.style.transform = `translate3d(${leftP * 10}px, ${topP * 10}px, 0)`;
      this.bg4.style.transform = `translate3d(${-leftP * 10}px, ${topP * 10}px, 0)`;
      this.bg5.style.transform = `translate3d(${-leftP * 5}px, ${-topP * 5}px, 0)`;
      this.bg6.style.transform = `translate3d(${leftP * 5}px, ${topP * 5}px, 0)`;
    };

    mouseLeave.pipe(
      map(computeXYPercentage),
      switchMap(({ leftP: x, topP: y }) =>
        tween({
          duration: 600,
          from: { leftP: x, topP: y },
          to: { leftP: 0, topP: 0 },
          ease: easing.cubicInOut,
        })),
    ).subscribe(animeDOM);

    mouseMove.pipe(
      observeOn(Scheduler.animationFrame),
      map(computeXYPercentage),
      tap(animeDOM),
    ).subscribe(animeDOM);
  }

  render() {
    return (
      <Content
        innerRef={(DOM) => {
          this.containerDOM = DOM;
        }}
      >
        <LogoContainer
          innerRef={(DOM) => {
            this.logoDOM = DOM;
          }}
        >
          <Logo />
        </LogoContainer>
        <YearContainer
          innerRef={(DOM) => {
            this.yearDOM = DOM;
          }}
        >
          <YearIcon />
        </YearContainer>
        <FedcContainer
          innerRef={(DOM) => {
            this.fedcDOM = DOM;
          }}
        >
          <FEDC />
        </FedcContainer>
        <BG0Container
          innerRef={(DOM) => {
            this.bg0 = DOM;
          }}
        >
          <BG0 />
        </BG0Container>
        <BG1Container
          innerRef={(DOM) => {
            this.bg1 = DOM;
          }}
        >
          <BG1 />
        </BG1Container>
        <BG2Container
          innerRef={(DOM) => {
            this.bg2 = DOM;
          }}
        >
          <BG2 />
        </BG2Container>
        <BG3Container
          innerRef={(DOM) => {
            this.bg3 = DOM;
          }}
        >
          <BG3 />
        </BG3Container>
        <BG4Container
          innerRef={(DOM) => {
            this.bg4 = DOM;
          }}
        >
          <BG4 />
        </BG4Container>
        <BG5Container
          innerRef={(DOM) => {
            this.bg5 = DOM;
          }}
        >
          <BG5 />
        </BG5Container>
        <BG6Container
          innerRef={(DOM) => {
            this.bg6 = DOM;
          }}
        >
          <BG6 />
        </BG6Container>
      </Content>
    );
  }
}

export default Main;
