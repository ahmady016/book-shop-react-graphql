import React from 'react'
import { render } from 'react-dom'

import { GlobalStyles } from 'twin.macro'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

import App from './App'
import './index.css'

export const history = createBrowserHistory()

render(
	<React.StrictMode>
		<GlobalStyles />
		<ApolloProvider client={client}>
			<Router history={history}>
				<App />
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
