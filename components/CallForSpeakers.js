import react from 'react'
import styled from 'styled-components'

const CallForSpeakers = ({ className }) => (
	<button className={className}>
		<span>Call For Speakers</span>
	</button>
)

export default styled(CallForSpeakers)`
	font-family: Barlow;
	font-weight: 500;
	font-size: 24px;
	color: #02f694;
	text-align: center;
	letter-spacing: 0.5px;
	border: 3px solid #02f694;
	border-radius: 5px;
	width: 260px;
	height: 60px;
	&:hover {
		background: rgba(2, 246, 148, 0.2);
	}
	&:active {
		background: #02f694;
		color: #321f6e;
	}
`
