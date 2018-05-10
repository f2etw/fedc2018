import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Date from '../../components/Date';
import Location from '../../components/Location';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5.25rem 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1.875rem;
    flex-direction: column;
  }
`;

const FooterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 6.25rem;
  margin-left: 2px;
  padding: 0 1.5rem 0 0.875rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 100%;
    background-color: #594a9d;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 3.125rem 0;
    margin: 2px 0 0;
    justify-content: center;
    text-align: center;

    &::before {
      top: -2px;
      left: 0;
      width: 100%;
      height: 2px;
    }

    /* Special case */
    &:nth-child(2) {
      padding-top: 0;

      &::before {
        display: none;
      }
    }
  }
`;

class Footer extends PureComponent {
  render() {
    return (
      <Container>
        <FooterItem>
          <Date />
        </FooterItem>
        <FooterItem>
          <Location />
        </FooterItem>
        <FooterItem>
          {
            // TODO: add sponsors logo here
          }
        </FooterItem>
      </Container>
    );
  }
}

export default Footer;
