import React from 'react'

import { useCurrentUserQuery } from '../__graphql/users'

function CurrentUser() {
	const { currentUserLoading, currentUserError, currentUser } =
		useCurrentUserQuery()
	if (currentUserLoading) return <p>Loading...</p>
	if (currentUserError) return <p>{`Error! ${currentUserError.message}`}</p>
	return (
		<>
			<h1>Books Shop App</h1>
			<p>{currentUser.email}</p>
		</>
	)
}

export default CurrentUser
