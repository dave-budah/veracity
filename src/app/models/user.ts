export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  role: string
  token?: string
  createdAt?: string
}

export interface Login {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  data: User
  message: string
}
