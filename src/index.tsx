import React from 'react'
import { render } from 'react-dom'

import { GlobalStyles } from 'twin.macro'
import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

import App from './App'
import './index.css'

render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
