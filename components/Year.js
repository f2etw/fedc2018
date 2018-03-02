import react from 'react'
import styled from 'styled-components'

const Year = ({ className }) => (
	<img className={className} src="/static/2018.svg" />
)

export default styled(Year)`
	display: block;
`
