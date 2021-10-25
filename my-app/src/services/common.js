import axios from 'axios'

const api = axios.create({
  // node伺服器的位置
  baseURL: 'http://127.0.0.1:3001/',
  timeout: 2500, // 超時時間
  headers: {
    'Content-Type': 'application/json',
  },
})

// 除錯用
api.interceptors.request.use((request) => {
  console.log('Starting Request', request)
  return request
})

api.interceptors.response.use((response) => {
  console.log('Response:', response)
  return response
})

export default api
