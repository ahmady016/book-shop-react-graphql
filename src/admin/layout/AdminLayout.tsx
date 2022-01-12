import { Flex } from '@chakra-ui/react'

import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

function AdminLayout() {
	return (
		<>
			<AdminHeader />
			<Flex w="95vw" h="75vh" mx="auto" bg="gray.100">
				AdminLayout
			</Flex>
			<AdminFooter />
		</>
	)
}

export default AdminLayout
