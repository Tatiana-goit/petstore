import axios from 'axios'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export async function register(user) {
  const result = await axios.post('/users/signup', user)
  console.log('register', result)
  token.set(result.data.token)
  return result.data
}

export async function login(user) {
  const result = await axios.post('/users/login', user)
  console.log('login', result)
  token.set(result.data.token)
  return result.data
}

export async function currentUser(userToken) {
  token.set(userToken)
  const result = await axios.get('/users/current')
  return result.data
}

export async function logout() {
  await axios.post('/users/logout')
  token.unset()
}
