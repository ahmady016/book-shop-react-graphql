import React from 'react'
import { render } from 'react-dom'

import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import './index.css'

export const history = createBrowserHistory()

render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router history={history}>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
