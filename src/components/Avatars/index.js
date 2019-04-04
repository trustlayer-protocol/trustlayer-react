import React, { memo } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import styled from '@emotion/styled'

const Avatars = styled.div`
	display: flex;
	align-items: center;
`

const DISPLAY_AVATAR_AMOUNT = 5

const Avatar = ({ url, name }) => (
	<Tooltip title={name} placement="bottom">
		<div
			style={{
				backgroundImage: `url(${url})`,
				backgroundSize: 'cover',
				backgroundColor: '#333',
				width: 28,
				height: 28,
				borderRadius: 50,
				marginRight: 5
			}}
		/>
	</Tooltip>
)

const outputAvatars = avatars => {
	avatars.reverse()
	if (avatars.length > DISPLAY_AVATAR_AMOUNT) {
		return (
			<>
				{avatars.slice(0, DISPLAY_AVATAR_AMOUNT).map((avatar, index) => (
					<Avatar
						key={'avatar-' + index}
						url={avatar.avatar_url}
						name={avatar.full_name}
					/>
				))}
				<div>+ {avatars.length - DISPLAY_AVATAR_AMOUNT}</div>
			</>
		)
	} else {
		return avatars.map((avatar, index) => (
			<Avatar
				key={'avatar-' + index}
				url={avatar.avatar_url}
				name={avatar.full_name}
			/>
		))
	}
}

export default memo(({ avatars = [] }) => (
	<Avatars>{avatars.length > 0 && outputAvatars(avatars)}</Avatars>
))
