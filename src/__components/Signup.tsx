import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Gender, Role, SignupFormState } from '../__helpers/types'
import { useSignupMutation } from '../__graphql/users'
import { history } from '../index'

import {
	VStack,
	HStack,
	Heading,
	Text,
	Link,
	SimpleGrid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	Select,
	Flex,
	Button,
	Spinner,
} from '@chakra-ui/react'

const initialFormValues: SignupFormState = {
	firstName: '',
	lastName: '',
	gender: '',
	birthDate: '',
	email: '',
	password: '',
	confirmPassword: '',
	role: '',
}

function Signup() {
	const { signup, loading, error, data } = useSignupMutation()
	React.useEffect(() => {
		if(error)
			toast.error(error.message)
		if(data) {
			toast.success(`you are signed up successfully with email: ${data.signup}`)
			history.push('/admin/dashboard')
		}
	}, [data, error])

	//#region Form State
	const [values, setValues] = React.useState<SignupFormState>(initialFormValues)
	// setFormValue on Form Input Change
	const handleInputChange = React.useCallback(
		(name: string) =>
			(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
				setValues(values => ({ ...values, [name]: e.target.value }))
	, [])
	// handle Form Submit
	const handleFormSubmit = React.useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()
			console.log("🚀: Signup -> Form Values", values)
			if(values.password !== values.confirmPassword) {
				return toast.error("confirm password not match password")
			}
			let _values: any = { ...values }
			delete _values.confirmPassword
			signup({ variables: { signupInput: _values } })
		}
	, [values, signup])
	// reset form
	const resetForm = React.useCallback(
		(e: React.FormEvent) => setValues(initialFormValues)
	, [])
	//#endregion

	return (
		<VStack w="70%" h="full" mx="auto" align="flex-start" spacing={10} p={6}>
			<VStack spacing={3} align="flex-start">
				<Heading>Signup</Heading>
				<HStack>
					<Text>already have an account then please</Text>
					<Link as={RouterLink} to="/admin/signin">
						Signin
					</Link>
				</HStack>
			</VStack>
			<SimpleGrid w="full" columns={2} columnGap={6} rowGap={6}
				as="form"
				onSubmit={handleFormSubmit}
			>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={values.firstName}
							onChange={handleInputChange('firstName')}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={values.lastName}
							onChange={handleInputChange('lastName')}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Birth Date</FormLabel>
						<Input
							type="date"
							placeholder="Birth Date"
							name="birthDate"
							value={values.birthDate}
							onChange={handleInputChange('birthDate')}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Gender</FormLabel>
						<Select
							name="gender"
							value={values.gender}
							onChange={handleInputChange('gender')}
						>
							<option value={Gender.Male}>Male</option>
							<option value={Gender.Female}>Female</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={1}>
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
				</GridItem>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Role</FormLabel>
						<Select
							name="role"
							value={values.role}
							onChange={handleInputChange('role')}
						>
							<option value={Role.Admin}>Admin</option>
							<option value={Role.Editor}>Editor</option>
							<option value={Role.Customer}>Customer</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={1}>
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
				</GridItem>
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Confirm Password</FormLabel>
						<Input
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							value={values.confirmPassword}
							onChange={handleInputChange('confirmPassword')}
						/>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<Flex justify="space-between" align="center" mt={7}>
						<Button type="submit" w="45%" size="lg" bg="blue.300"
							disabled={loading}
						>
							{loading
								? <Spinner />
								: <>Signup</>
							}
						</Button>
						<Button type="reset" w="45%" size="lg" bg="gray.300"
							onClick={resetForm}
						>
							Reset
						</Button>
					</Flex>
				</GridItem>
			</SimpleGrid>
		</VStack>
	)
}

export default Signup
