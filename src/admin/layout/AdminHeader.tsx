import { Flex, Heading, Spacer, Icon } from '@chakra-ui/react'
import { IoLogoBuffer, IoSearch, IoNotifications } from 'react-icons/io5'

import CurrentUser from '../../__components/CurrentUser'

function AdminHeader() {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={2}
			p={4}
			bg="blue.600"
		>
			<Flex align="center">
				<Icon as={IoLogoBuffer} w={8} h={8} color="yellow.500" />
			</Flex>
			<Flex align="center" mx={2}>
				<Heading size="md">Book Shop App</Heading>
			</Flex>
			<Spacer />
			<Flex align="center">
				<CurrentUser />
			</Flex>
			<Flex align="center" w="5%" justify="space-evenly">
				<Icon as={IoSearch} w={5} h={5} color="yellow.500" />
				<Icon as={IoNotifications} w={5} h={5} color="yellow.500" />
			</Flex>
		</Flex>
	)
}

export default AdminHeader
