import { gql, useQuery, useMutation } from '@apollo/client'
import { client } from '../apolloClient'

import {
	CurrentUserQuery,
	SignupMutation,
	SignupMutationVariables,
	SigninMutation,
	SigninMutationVariables,
	UpdateUserMutation,
	UpdateUserMutationVariables,
	SignoutMutation,
	SignoutMutationVariables,
	RefreshMutation,
	RefreshMutationVariables,
} from './../__generated/graphql.types'

const SIGNUP_MUTATION = gql`
	mutation Signup($signupInput: SignupInput!) {
		signup(signupInput: $signupInput)
	}
`
export function useSignupMutation() {
	const [signup, { loading, error, data, called }] = useMutation<SignupMutation, SignupMutationVariables>(SIGNUP_MUTATION)
	return {
		signup,
		loading,
		error,
		data,
		called,
	}
}

const UPDATE_USER_MUTATION = gql`
	mutation UpdateUser($updateUserInput: UpdateUserInput!) {
		updateUser(updateUserInput: $updateUserInput) {
			id
			email
			role
			status
			profile {
				id
				firstName
				lastName
				birthDate
				gender
			}
		}
	}
`
export function useUpdateUserMutation() {
	const [updateUser, { loading, error, data, called }] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UPDATE_USER_MUTATION)
	return {
		updateUser,
		loading,
		error,
		data,
		called,
	}
}

const SIGNIN_MUTATION = gql`
	mutation Signin($signinInput: SigninInput!) {
		signin(signinInput: $signinInput) {
			id
			email
			role
			status
			profile {
				id
				firstName
				lastName
				birthDate
				gender
			}
		}
	}
`
export function useSigninMutation() {
	const [signin, { loading, error, data, called }] = useMutation<SigninMutation, SigninMutationVariables>(SIGNIN_MUTATION)
	return {
		signin,
		loading,
		error,
		data,
		called,
	}
}

const CURRENT_USER_QUERY = gql`
	query CurrentUser {
		currentUser {
			id
			email
			role
			status
			profile {
				id
				firstName
				lastName
				birthDate
				gender
			}
		}
	}
`
export function useCurrentUserQuery() {
	const { loading, error, data, called, refetch } = useQuery<CurrentUserQuery>(CURRENT_USER_QUERY)
	return {
		loading,
		error,
		data,
		called,
		refetch
	}
}

const SIGNOUT_MUTATION = gql`
	mutation Signout {
		signout
	}
`
export function useSignoutMutation() {
	const [signout, { loading, error, data, called }] = useMutation<SignoutMutation, SignoutMutationVariables>(SIGNOUT_MUTATION)
	return {
		signout,
		loading,
		error,
		data,
		called,
	}
}

const REFRESH_MUTATION = gql`
	mutation Refresh {
		refresh {
			id
			email
			role
			status
			profile {
				id
				firstName
				lastName
				birthDate
				gender
			}
		}
	}
`
export function useRefreshMutation() {
	return client.mutate<RefreshMutation, RefreshMutationVariables>({ mutation: REFRESH_MUTATION })
}
