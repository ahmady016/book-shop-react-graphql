import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const AuthErrorLink = onError(
	({ graphQLErrors, networkError, operation, forward }) => {
		if (
			graphQLErrors?.some((err) =>
				['UNAUTHENTICATED', 'FORBIDDEN'].includes(
					err.extensions.code as string
				)
			)
		) {
			console.error('Auth Error')
		}
	}
)
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

export const cache = new InMemoryCache()

export const client = new ApolloClient({
	link: from([AuthErrorLink, httpLink]),
	cache,
})
