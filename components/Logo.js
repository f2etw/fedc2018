import react from 'react'
import styled from 'styled-components'

const Logo = ({ className }) => (
	<img className={className} src="/static/logo_index.svg" />
)

export default styled(Logo)`
	display: block;
`
