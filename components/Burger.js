import react from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Burger = ({ className, active = false, href = '/' }) => (
	<Link href={href}>
		<img
			src={
				active ? '/static/icon/icon_close.svg' : '/static/icon/icon_menu.svg'
			}
		/>
	</Link>
)

export default styled(Burger)``
