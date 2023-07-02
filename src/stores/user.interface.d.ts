export interface UserData {
  id: number | null
  firstName: string
  lastName: string
  username: string
  desc: string
  phone: string
  email: string
  dob?: Date | string
}

export interface UserLogin {
  username: string
  password: string
}

export interface UserRegister {
  firstName: string
  lastName: string
  username: string
  password: string
}