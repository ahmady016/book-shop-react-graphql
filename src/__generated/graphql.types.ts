export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: any
}

export type ActivateInput = {
	email: Scalars['String']
	verificationCode: Scalars['String']
}

export type Author = {
	__typename?: 'Author'
	birthDate: Scalars['String']
	books?: Maybe<Array<Book>>
	country: Scalars['String']
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	firstName: Scalars['String']
	gender: Scalars['String']
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	lastName: Scalars['String']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type Book = {
	__typename?: 'Book'
	authors?: Maybe<Array<Author>>
	comments?: Maybe<Array<Comment>>
	country: Scalars['String']
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	description: Scalars['String']
	favoriteCustomers?: Maybe<Array<User>>
	id: Scalars['ID']
	imageURL: Scalars['String']
	infoURL: Scalars['String']
	isDeleted: Scalars['Boolean']
	language: Scalars['String']
	notes?: Maybe<Scalars['String']>
	pageCount: Scalars['Int']
	publishedYear: Scalars['Int']
	publisher: Scalars['String']
	purchasesItems?: Maybe<Array<PurchaseItem>>
	ratingAverage: Scalars['Float']
	ratings?: Maybe<Array<Rating>>
	ratingsCount: Scalars['Int']
	salesItems?: Maybe<Array<SaleItem>>
	stock?: Maybe<Stock>
	subtitle: Scalars['String']
	title: Scalars['String']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type Comment = {
	__typename?: 'Comment'
	book?: Maybe<Book>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	customer?: Maybe<User>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	text: Scalars['String']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type CreateAuthorInput = {
	birthDate: Scalars['String']
	country: Scalars['String']
	firstName: Scalars['String']
	gender: Scalars['String']
	lastName: Scalars['String']
}

export type CreateBookInput = {
	authorsIds: Array<Scalars['String']>
	country: Scalars['String']
	description: Scalars['String']
	imageURL: Scalars['String']
	infoURL: Scalars['String']
	language: Scalars['String']
	pageCount: Scalars['Float']
	publishedYear: Scalars['Float']
	publisher: Scalars['String']
	subtitle: Scalars['String']
	title: Scalars['String']
}

export type CreateCommentInput = {
	bookId: Scalars['String']
	text: Scalars['String']
}

export type CreateProfileInput = {
	address?: InputMaybe<Scalars['String']>
	birthDate: Scalars['String']
	city?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	firstName: Scalars['String']
	gender: Scalars['String']
	hobbies?: InputMaybe<Scalars['String']>
	lastName: Scalars['String']
	mobile?: InputMaybe<Scalars['String']>
	photoURL?: InputMaybe<Scalars['String']>
}

export type CreatePurchaseInput = {
	purchaseDate: Scalars['String']
	totalPrice?: InputMaybe<Scalars['Float']>
}

export type CreatePurchaseItemInput = {
	bookId: Scalars['String']
	quantity: Scalars['Int']
	totalPrice?: InputMaybe<Scalars['Float']>
	unitPrice: Scalars['Float']
}

export type CreatePurchaseWithItemsInput = {
	items: Array<CreatePurchaseItemInput>
	purchase: CreatePurchaseInput
}

export type CreateRatingInput = {
	bookId: Scalars['String']
	value: Scalars['Int']
}

export type CreateSaleInput = {
	customerId: Scalars['String']
	saleDate: Scalars['String']
	totalPrice?: InputMaybe<Scalars['Float']>
}

export type CreateSaleItemInput = {
	bookId: Scalars['String']
	quantity: Scalars['Int']
	totalPrice?: InputMaybe<Scalars['Float']>
	unitPrice: Scalars['Float']
}

export type CreateSaleWithItemsInput = {
	items: Array<CreateSaleItemInput>
	sale: CreateSaleInput
}

export type Mutation = {
	__typename?: 'Mutation'
	activate: User
	addFavoriteBook: Array<Book>
	createAuthor: Author
	createBook: Book
	createComment: Comment
	createProfile: Profile
	createPurchaseWithItems: Purchase
	createRating: Rating
	createSale: Sale
	refresh: User
	removeAuthor: Author
	removeBook: Book
	removeComment: Comment
	removeFavoriteBook: Array<Book>
	removeProfile: Profile
	removePurchase: Purchase
	removeRating: Rating
	removeSale: Sale
	removeUser: User
	signin: User
	signout: Scalars['String']
	signup: Scalars['String']
	updateAuthor: Author
	updateBook: Book
	updateComment: Comment
	updatePurchase: Purchase
	updateRating: Rating
	updateSale: Sale
	updateUProfile: Profile
	updateUser: User
}

export type MutationActivateArgs = {
	activateInput: ActivateInput
}

export type MutationAddFavoriteBookArgs = {
	booKId: Scalars['ID']
}

export type MutationCreateAuthorArgs = {
	createAuthorInput: CreateAuthorInput
}

export type MutationCreateBookArgs = {
	createBookInput: CreateBookInput
}

export type MutationCreateCommentArgs = {
	createCommentInput: CreateCommentInput
}

export type MutationCreateProfileArgs = {
	createUserInput: CreateProfileInput
}

export type MutationCreatePurchaseWithItemsArgs = {
	createPurchaseWithItemsInput: CreatePurchaseWithItemsInput
}

export type MutationCreateRatingArgs = {
	createRatingInput: CreateRatingInput
}

export type MutationCreateSaleArgs = {
	createSaleWithItemsInput: CreateSaleWithItemsInput
}

export type MutationRemoveAuthorArgs = {
	id: Scalars['ID']
}

export type MutationRemoveBookArgs = {
	id: Scalars['ID']
}

export type MutationRemoveCommentArgs = {
	id: Scalars['Int']
}

export type MutationRemoveFavoriteBookArgs = {
	booKId: Scalars['ID']
}

export type MutationRemoveProfileArgs = {
	id: Scalars['ID']
}

export type MutationRemovePurchaseArgs = {
	id: Scalars['String']
}

export type MutationRemoveRatingArgs = {
	id: Scalars['Int']
}

export type MutationRemoveSaleArgs = {
	id: Scalars['Int']
}

export type MutationRemoveUserArgs = {
	id: Scalars['ID']
}

export type MutationSigninArgs = {
	signinInput: SigninInput
}

export type MutationSignupArgs = {
	signupInput: SignupInput
}

export type MutationUpdateAuthorArgs = {
	updateAuthorInput: UpdateAuthorInput
}

export type MutationUpdateBookArgs = {
	updateBookInput: UpdateBookInput
}

export type MutationUpdateCommentArgs = {
	updateCommentInput: UpdateCommentInput
}

export type MutationUpdatePurchaseArgs = {
	updatePurchaseInput: UpdatePurchaseInput
}

export type MutationUpdateRatingArgs = {
	updateRatingInput: UpdateRatingInput
}

export type MutationUpdateSaleArgs = {
	updateSaleInput: UpdateSaleInput
}

export type MutationUpdateUProfileArgs = {
	updateProfileInput: UpdateProfileInput
}

export type MutationUpdateUserArgs = {
	updateUserInput: UpdateUserInput
}

export type Profile = {
	__typename?: 'Profile'
	address?: Maybe<Scalars['String']>
	birthDate: Scalars['String']
	city?: Maybe<Scalars['String']>
	country?: Maybe<Scalars['String']>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	firstName: Scalars['String']
	gender: Scalars['String']
	hobbies?: Maybe<Scalars['String']>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	lastName: Scalars['String']
	mobile?: Maybe<Scalars['String']>
	photoURL?: Maybe<Scalars['String']>
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
	user?: Maybe<User>
	userId?: Maybe<Scalars['String']>
}

export type Purchase = {
	__typename?: 'Purchase'
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	employee?: Maybe<User>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	items?: Maybe<Array<PurchaseItem>>
	purchaseDate: Scalars['DateTime']
	totalPrice: Scalars['Float']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type PurchaseItem = {
	__typename?: 'PurchaseItem'
	book?: Maybe<Array<Book>>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	purchase?: Maybe<Array<Purchase>>
	quantity: Scalars['Int']
	totalPrice: Scalars['Float']
	unitPrice: Scalars['Float']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type Query = {
	__typename?: 'Query'
	author: Author
	authors: Array<Author>
	book: Book
	bookComments: Array<Comment>
	books: Array<Book>
	comment: Comment
	comments: Array<Comment>
	currentUser: User
	profile: Profile
	profiles: Array<Profile>
	purchase: Purchase
	purchases: Array<Purchase>
	rating: Rating
	ratings: Array<Rating>
	sale: Sale
	sales: Array<Sale>
}

export type QueryAuthorArgs = {
	id: Scalars['ID']
}

export type QueryBookArgs = {
	id: Scalars['ID']
}

export type QueryBookCommentsArgs = {
	booKId: Scalars['ID']
}

export type QueryCommentArgs = {
	id: Scalars['Int']
}

export type QueryProfileArgs = {
	id: Scalars['ID']
}

export type QueryPurchaseArgs = {
	id: Scalars['String']
}

export type QueryRatingArgs = {
	id: Scalars['Int']
}

export type QuerySaleArgs = {
	id: Scalars['Int']
}

export type Rating = {
	__typename?: 'Rating'
	book?: Maybe<Book>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	customer?: Maybe<User>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
	value: Scalars['Int']
}

export type Sale = {
	__typename?: 'Sale'
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	customer?: Maybe<User>
	employee?: Maybe<User>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	items?: Maybe<Array<SaleItem>>
	saleDate: Scalars['DateTime']
	totalPrice: Scalars['Float']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type SaleItem = {
	__typename?: 'SaleItem'
	book?: Maybe<Array<Book>>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	quantity: Scalars['Int']
	sale?: Maybe<Array<Sale>>
	totalPrice: Scalars['Float']
	unitPrice: Scalars['Float']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type SigninInput = {
	email: Scalars['String']
	password: Scalars['String']
}

export type SignupInput = {
	birthDate: Scalars['String']
	email: Scalars['String']
	firstName: Scalars['String']
	gender: Scalars['String']
	lastName: Scalars['String']
	password: Scalars['String']
	role: Scalars['String']
}

export type Stock = {
	__typename?: 'Stock'
	book?: Maybe<Book>
	bookId: Scalars['String']
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	profit: Scalars['Float']
	totalInStock: Scalars['Int']
	totalPurchasesPrice: Scalars['Float']
	totalPurchasesQuantity: Scalars['Int']
	totalSalesPrice: Scalars['Float']
	totalSalesQuantity: Scalars['Int']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type UpdateAuthorInput = {
	birthDate?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	firstName?: InputMaybe<Scalars['String']>
	gender?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	lastName?: InputMaybe<Scalars['String']>
}

export type UpdateBookInput = {
	authorsIds?: InputMaybe<Array<Scalars['String']>>
	country?: InputMaybe<Scalars['String']>
	description?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	imageURL?: InputMaybe<Scalars['String']>
	infoURL?: InputMaybe<Scalars['String']>
	language?: InputMaybe<Scalars['String']>
	pageCount?: InputMaybe<Scalars['Float']>
	publishedYear?: InputMaybe<Scalars['Float']>
	publisher?: InputMaybe<Scalars['String']>
	subtitle?: InputMaybe<Scalars['String']>
	title?: InputMaybe<Scalars['String']>
}

export type UpdateCommentInput = {
	bookId?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	text?: InputMaybe<Scalars['String']>
}

export type UpdateProfileInput = {
	address?: InputMaybe<Scalars['String']>
	birthDate?: InputMaybe<Scalars['String']>
	city?: InputMaybe<Scalars['String']>
	country?: InputMaybe<Scalars['String']>
	firstName?: InputMaybe<Scalars['String']>
	gender?: InputMaybe<Scalars['String']>
	hobbies?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	lastName?: InputMaybe<Scalars['String']>
	mobile?: InputMaybe<Scalars['String']>
	photoURL?: InputMaybe<Scalars['String']>
}

export type UpdatePurchaseInput = {
	id: Scalars['ID']
	purchaseDate?: InputMaybe<Scalars['String']>
	totalPrice?: InputMaybe<Scalars['Float']>
}

export type UpdateRatingInput = {
	id: Scalars['ID']
	value: Scalars['Int']
}

export type UpdateSaleInput = {
	customerId?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	saleDate?: InputMaybe<Scalars['String']>
	totalPrice?: InputMaybe<Scalars['Float']>
}

export type UpdateUserInput = {
	email?: InputMaybe<Scalars['String']>
	id: Scalars['ID']
	password?: InputMaybe<Scalars['String']>
	role?: InputMaybe<Scalars['String']>
	status?: InputMaybe<Scalars['String']>
}

export type User = {
	__typename?: 'User'
	comments?: Maybe<Array<Comment>>
	createdAt: Scalars['DateTime']
	createdBy: Scalars['String']
	customerSales?: Maybe<Array<Sale>>
	email: Scalars['String']
	employeeSales?: Maybe<Array<Sale>>
	favoriteBooks?: Maybe<Array<Book>>
	id: Scalars['ID']
	isDeleted: Scalars['Boolean']
	profile?: Maybe<Profile>
	purchases?: Maybe<Array<Purchase>>
	ratings?: Maybe<Array<Rating>>
	role: Scalars['String']
	status: Scalars['String']
	updatedAt: Scalars['DateTime']
	updatedBy?: Maybe<Scalars['String']>
}

export type SignupMutationVariables = Exact<{
	signupInput: SignupInput
}>

export type SignupMutation = { __typename?: 'Mutation'; signup: string }

export type UpdateUserMutationVariables = Exact<{
	updateUserInput: UpdateUserInput
}>

export type UpdateUserMutation = {
	__typename?: 'Mutation'
	updateUser: {
		__typename?: 'User'
		id: string
		email: string
		role: string
		status: string
		profile?:
			| {
					__typename?: 'Profile'
					id: string
					firstName: string
					lastName: string
					birthDate: string
					gender: string
			  }
			| null
			| undefined
	}
}

export type SigninMutationVariables = Exact<{
	signinInput: SigninInput
}>

export type SigninMutation = {
	__typename?: 'Mutation'
	signin: {
		__typename?: 'User'
		id: string
		email: string
		role: string
		status: string
		profile?:
			| {
					__typename?: 'Profile'
					id: string
					firstName: string
					lastName: string
					birthDate: string
					gender: string
			  }
			| null
			| undefined
	}
}

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQuery = {
	__typename?: 'Query'
	currentUser: {
		__typename?: 'User'
		id: string
		email: string
		role: string
		status: string
		profile?:
			| {
					__typename?: 'Profile'
					id: string
					firstName: string
					lastName: string
					birthDate: string
					gender: string
			  }
			| null
			| undefined
	}
}

export type SignoutMutationVariables = Exact<{ [key: string]: never }>

export type SignoutMutation = { __typename?: 'Mutation'; signout: string }

export type RefreshMutationVariables = Exact<{ [key: string]: never }>

export type RefreshMutation = {
	__typename?: 'Mutation'
	refresh: {
		__typename?: 'User'
		id: string
		email: string
		role: string
		status: string
		profile?:
			| {
					__typename?: 'Profile'
					id: string
					firstName: string
					lastName: string
					birthDate: string
					gender: string
			  }
			| null
			| undefined
	}
}
