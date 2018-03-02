import fp from 'lodash/fp'

import styled from 'styled-components'
import Burger from '../components/Burger'
import CallForSpeakers from '../components/CallForSpeakers'
import BuyTicket from '../components/BuyTicket'

import Logo from '../components/Logo'
import Year from '../components/Year'
import Fedc from '../components/Fedc'

import Date from '../components/Date'
import Location from '../components/Location'
import Sponsor from '../components/Sponsor'

const sponsors = [
];

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 30px;
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Main = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Foooter = styled.div`
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Buttons = styled.div`
	& > *:not(:last-child) {
		margin-right: 20px;
	}
`

const Cover = styled.div`
	position: relative;
	width: 400px;
	height: 200px;
	margin-top: -200px;
`;

const LogoContainer = styled.div`
	width: 400px;
	margin: 0 auto;
`

const YearContainer = styled.div`
	position: absolute;
	top: -20px;
	left: 50%;
	transform: translate(23.5px, -4.43px);
`

const FedcContainer = styled.div`
	position: absolute;
	top: 200px;
	right: 50%;
	transform: translateX(-22.5px);
`

const Bar = styled.div`
	height: 100%;
	background: #594a9d;
	border-radius: 2px;
	width: 3px;
	height: 100%;
	margin-left: 50px;
	margin-right: 20px;
`

const renderSponsor =
	fp.map(src => <Sponsor src={`/static/icon/${src}`} key={src} />);

export default () => (
	<Wrapper>
		<Header>
			<Burger href="menu" />
			<Buttons>
				<CallForSpeakers />
				<BuyTicket />
			</Buttons>
		</Header>
		<Main>
			<Cover>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<YearContainer>
					<Year />
				</YearContainer>
				<FedcContainer>
					<Fedc />
				</FedcContainer>
			</Cover>
		</Main>
		<Foooter>
			<Bar />
			<Date />
			<Bar />
			<Location />
			<Bar />
			{renderSponsor(sponsors)}
		</Foooter>
	</Wrapper>
)
