import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useSigninMutation } from '../__graphql/users'
import { SigninFormState } from '../__helpers/types'
import { history } from '../index'

import {
	VStack,
	HStack,
	Heading,
	Text,
	Link,
	FormControl,
	FormLabel,
	Input,
	Button,
	Flex,
	Spinner,
} from '@chakra-ui/react'

const initialFormValues: SigninFormState = {
	email: '',
	password: '',
}

function Signin() {
	const { signin, loading, error, data } = useSigninMutation()
	React.useEffect(() => {
		if(error)
			toast.error(error.message)
		if(data?.signin) {
			toast.success(`you are signed in successfully with email: ${data.signin.email}`)
			history.push('/admin/dashboard')
		}
	}, [data, error])

	//#region Form State
	const [values, setValues] = React.useState<SigninFormState>(initialFormValues)
	// setFormValue on Form Input Change
	const handleInputChange = React.useCallback(
		(name: string) =>
			(e: React.ChangeEvent<HTMLInputElement>) =>
				setValues(values => ({ ...values, [name]: e.target.value }))
	, [])
	// handle Form Submit
	const handleFormSubmit = React.useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()
			console.log("🚀: Signin -> Form Values", values)
			signin({ variables: { signinInput: values } })
		}
	, [values, signin])
	// reset form
	const resetForm = React.useCallback(
		(e: React.FormEvent) => setValues(initialFormValues)
	, [])
	//#endregion

	return (
		<VStack w="50%" h="full" mx="auto" align="flex-start" spacing={10} p={6}>
			<VStack align="flex-start">
				<Heading>Signin</Heading>
				<HStack>
					<Text>don't have an account please</Text>
					<Link as={RouterLink} to="/admin/signup">
						Signup
					</Link>
				</HStack>
			</VStack>
			<VStack w="full" spacing={6} align="flex-start" as="form" onSubmit={handleFormSubmit}>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={values.email}
						onChange={handleInputChange('email')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						value={values.password}
						onChange={handleInputChange('password')}
					/>
				</FormControl>
				<Flex justify="space-between" align="center" w="full" mt={10}>
					<Button type="submit" w="45%" size="lg" bg="blue.300"
						disabled={loading}
					>
						{loading
							? <Spinner />
							: <>Signin</>
						}
					</Button>
					<Button type="reset" w="45%" size="lg" bg="gray.300"
						onClick={resetForm}
					>
						Reset
					</Button>
				</Flex>
			</VStack>
		</VStack>
	)
}

export default Signin
