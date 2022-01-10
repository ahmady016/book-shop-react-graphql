import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from 'twin.macro'

import App from './App'
import './index.css'

render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
