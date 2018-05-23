import _ from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import withMenu from './Layout/withMenu';
import withBackground from './Layout/withBackground';
import Speaker from '../components/Speaker';

const Wrapper = styled.div`
  width: 100%;
  top: 0px;
  left: 0;
  z-index: 100;
  margin-top: 120px;
  padding-bottom: 120px;
`;

const Items = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const items = [
  { avatar: '/static/speaker/blue_chen.png', name: 'Blue Chen', title: 'RelaJet 洞見未來創辦人' },
  { avatar: '/static/speaker/ct_wu.png', name: 'CT Wu', title: 'Frontend Engineer, Appier' },
  { avatar: '/static/speaker/kevin_tu.png', name: '屠澤寬 Jeremiah Kevin Tu', title: 'Sr. Front End Engineer' },
  { avatar: '/static/speaker/david_khourshid.png', name: 'David Khourshid', title: 'Software Engineer, Microsoft' },
  { avatar: '/static/speaker/vibert_thio.png', name: '張欣嘉 Vibert Thio', title: '新媒體藝術家' },
  { avatar: '/static/speaker/johny_vino.png', name: 'Johny Vino', title: 'School of Visual Arts, MFA Interaction design, New York' },
  { avatar: '/static/speaker/diane_shen.png', name: '沈美君 Diane Shen', title: 'Creative Designer / Strategy Designer, Business Models Inc Taiwan' },
  { avatar: '/static/speaker/nelson_kuo.png', name: '郭正澔 Nelson Kuo', title: 'TANG Taipei office Sr. Manager / Sr. Experience Design Researcher. Conversion Lab Co-Founder' },
  { avatar: '/static/speaker/mengchih_chiang.png', name: '江孟芝 MengChih Chiang', title: 'Faculty, MFA Computer Art Department, School of Visual Arts. Creative Director, Mengdom Experimental Design Lab' },
  { avatar: '/static/speaker/chris_chen.png', name: '陳偉仁 Chris Chen', title: 'Product Design, PicCollage' },
  { avatar: '/static/speaker/hsienhui_tang.png', name: '唐玄輝 Hsien-Hui Tang', title: 'Professor of Design Department NTUST. User Experience Innovation Consultant at DITLDESIGN & DBAcademy' },
];

class Speakers extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Items>
          {_.sortBy(items, ['avatar']).map(attrs => <Speaker {...attrs} />)}
        </Items>
      </Wrapper>
    );
  }
}

export default withMenu(withBackground(Speakers));
