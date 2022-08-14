import axios from 'axios'
axios.defaults.baseURL = 'https://petstore3.swagger.io/api/v3'

export async function findOrderById(id) {
  try {
    const result = await axios.get(`store/order/${id}`)
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}
