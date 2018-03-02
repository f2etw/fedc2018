import react from 'react'
import styled from 'styled-components'

const Bold = styled.div`
	font-weight: 700;
`

const Date = ({ className }) => (
	<time className={className}>
		<Bold>14 JUL</Bold>
		<div>2018</div>
	</time>
)

export default styled(Date)`
	display: block;
	font-family: Barlow;
	font-size: 24px;
	color: #02f694;
	letter-spacing: 2px;
	line-height: 36px;
`
