import { useCurrentUserQuery } from '../__graphql/users'

function CurrentUser() {
	const { loading, error, data } = useCurrentUserQuery()
	if (loading) return <p>Loading...</p>
	if (error) return <p>{`Error! ${error.message}`}</p>
	return (
		<p>Welcome {data?.currentUser.email}</p>
	)
}

export default CurrentUser
