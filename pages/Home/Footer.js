import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Date from '../../components/Date';
import Location from '../../components/Location';

const Foooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5.25rem 2.5rem;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  height: 6.25rem;
  padding: 0 3rem 0 1.5rem;
  border-left: #594a9d solid 2px;
  border-radius: 2px;
`;

class Footer extends PureComponent {
  render() {
    return (
      <Foooter>
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
      </Foooter>
    );
  }
}

export default Footer;
