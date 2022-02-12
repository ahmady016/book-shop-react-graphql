export enum Gender {
  Male = "male",
  Female = "female"
}

export enum Role {
  Admin = "admin",
  Editor = "editor",
  Customer = "customer"
}

export type SignupFormState = {
  firstName: string
  lastName: string
  birthDate: string
  gender: Gender | string
  email: string
  password: string
  confirmPassword: string
  role: Role | string
}

export type SigninFormState = {
  email: string
  password: string
}
