import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_PATH,
  timeout: 180000,
})

export default api
