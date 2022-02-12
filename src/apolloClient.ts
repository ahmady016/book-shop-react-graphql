import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { useRefreshMutation } from './__graphql/users'
import { history } from './index'

const AuthErrorLink = onError(
	({ graphQLErrors, networkError, operation, forward }) => {
		if (
			graphQLErrors?.some((err) => ['UNAUTHENTICATED', 'FORBIDDEN'].includes(err.extensions.code as string))
			&& operation.operationName !== 'Refresh'
		) {
			console.error(`Auth Error in ${operation.operationName}`)
			let isTokensRefreshed = false
			useRefreshMutation()
				.then(_ => {
					isTokensRefreshed = true
				})
				.catch((err) => {
					console.log('🚀: Refresh Tokens Error', err)
					history.push('/admin/signin')
				})

			if(isTokensRefreshed) {
				return forward(operation)
			}
		}
	}
)
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

export const cache = new InMemoryCache()

export const client = new ApolloClient({
	link: from([AuthErrorLink, httpLink]),
	cache,
	credentials: 'include'
})
