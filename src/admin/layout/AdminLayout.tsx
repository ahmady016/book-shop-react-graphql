import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

import Signin from '../../__components/Signin'
import Signup from '../../__components/Signup'
import AdminDashboard from '../pages/AdminDashboard'

function AdminLayout({ match }: RouteComponentProps) {
	return (
		<>
			<AdminHeader />
			<Flex w="95vw" minHeight="75vh" mx="auto" bg="gray.100">
				<Switch>
					<Route path={`${match.path}/signup`} component={Signup} />
					<Route path={`${match.path}/signin`} component={Signin} />
					<Route path={`${match.path}/`} component={AdminDashboard} />
				</Switch>
			</Flex>
			<AdminFooter />
		</>
	)
}

export default AdminLayout
