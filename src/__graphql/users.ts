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
export function useCurrentUserQuery() {
	const { loading, error, data } = useQuery(CURRENT_USER)
  return {
    currentUserLoading: loading,
    currentUserError: error,
    currentUser: data?.currentUser
  }
}
