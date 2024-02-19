export const constants = {
  CURRENT_TOKEN: 'currentToken',
}

const API_URL = 'http://localhost:3000'

export const apiEndpoints = {
  AuthEndpoint: `${API_URL}/auth`,
  LoginEndpoint: `${API_URL}/login`,
  SignupEndpoint: `${API_URL}/signup`,
  LogoutEndpoint: `${API_URL}/logout`,
  UsersEndpoint: `${API_URL}/users`,
  UserEndpoint: `${API_URL}/users/:id`,
}
