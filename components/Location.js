import react from 'react'
import styled from 'styled-components'

const Chinese = styled.div`
	font-family: STYuanti-TC-Bold;
	font-size: 24px;
	letter-spacing: 6.67px;
	margin-bottom: 6px;
`

const English = styled.div`
	font-family: Barlow;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 1.67px;
`

const Location = ({ className }) => (
	<div className={className}>
		<Chinese>張榮發國際會議中心</Chinese>
		<English>Evergreen International Convention Center</English>
	</div>
)

export default styled(Location)`
	font-family: Barlow;
	color: #02f694;
`
