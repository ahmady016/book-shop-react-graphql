import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AdminLayout from './admin/layout/AdminLayout'
import CustomerLayout from './customer/layout/CustomerLayout'

function App() {
	return (
		<>
			<Switch>
				<Route path="/admin" component={AdminLayout} />
				<Route path="/" component={CustomerLayout} />
			</Switch>
			<ToastContainer autoClose={5000} pauseOnFocusLoss={true} />
		</>
	)
}

export default App
