import { Box, ButtonGroup, IconButton, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function AdminFooter() {
	return (
		<Box
			as="footer"
			role="contentinfo"
			mx="auto"
			maxW="7xl"
			p={4}
      mt={2}
      bg="blue.600"
		>
			<Stack spacing="10" divider={<StackDivider />}>
				<Stack
					direction={{ base: 'column-reverse', md: 'row' }}
					justifyContent="space-between"
					alignItems="center"
				>
					<Text fontSize="sm">
						&copy; {new Date().getFullYear()} Book Shop Inc. All rights reserved.
					</Text>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
          </ButtonGroup>
				</Stack>
			</Stack>
		</Box>
	)
}

export default AdminFooter
