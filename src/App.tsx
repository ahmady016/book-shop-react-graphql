import React from 'react'
import { gql, useQuery } from '@apollo/client'

const CURRENT_USER = gql`
	query CurrentUser {
		currentUser {
			id
			email
			role
			status
		}
	}
`

function App() {
	const { loading, error, data } = useQuery(CURRENT_USER)
	if (loading) return <p>Loading...</p>
	if (error) return <p>{`Error! ${error.message}`}</p>
	return (
		<>
			<h1>Books Shop App</h1>
			<p>{data.currentUser.email}</p>
		</>
	)
}

export default App
