import axios from "axios";
import { getUserToken, isUserLoggedIn, unsetUserSession } from "../utils";

const api = axios.create({
    baseURL: 'http://books.appnoz.com.br/api/v1',
    timeout: 20000,
    headers: {'Content-Type': 'application/json'},
})

api.interceptors.request.use((config: any) => {
    const key = getUserToken()
    if (key) {
        config.headers!['Authorization'] = `Bearer ${key}`
    }
    return config
})
  
api.interceptors.response.use(response => {
    return response
  }, async (error) => {
    if (401 === error.response.status) {
      if (isUserLoggedIn()) {
        unsetUserSession()
      }
      return Promise.reject(error)
    } else {
      return Promise.reject(error)
    }
})

export default api