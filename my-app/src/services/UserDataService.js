import http from './common'

// const user = {
//   id: 0,
//   name: '',
//   username: '',
//   password: '',
//   email: '',
//   avatar: '',
// }

class UserDataService {
  getAll() {
    return http.get('/users')
  }

  getById(userId) {
    return http.get(`/stprofile/${userId}`)
  }

  uploadAvatar(data) {
    return http.post('/users/upload-image', data)
  }

  login(data) {
    return http.post('/login', data, {
      withCredentials: true,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    })
  }

  facebookAuthToken(token) {
    return http.get(
      `/users/auth/facebook?access_token=${token}`,
      {
        // withCredentials: true,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      }
    )
  }

  googleAuthToken(token) {
    return http.get(
      `/users/auth/google?access_token=${token}`,
      {
        // withCredentials: true,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      }
    )
  }

  lineAuthToken(token) {
    return http.get(
      `/users/auth/line?access_token=${token}`,
      {
        // withCredentials: true,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      }
    )
  }

  lineGetAuthToken(code) {
    return http.get(
      `/users/auth/line/getAccessToken?code=${code}&redirect_uri=${'http://localhost:3000/lineauth'}`,
      {
        // withCredentials: true,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      }
    )
  }

  checklogin() {
    return http.get('/users/checklogin', {
      withCredentials: true,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    })
  }

  logout() {
    return http.get('/users/logout', {
      withCredentials: true,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    })
  }

  create(data) {
    return http.post('/users', data)
  }

  update(id, data) {
    return http.put(`/users/${id}`, data)
  }

  delete(id) {
    return http.delete(`/users/${id}`)
  }

  // 未實作
  deleteAll() {
    return http.delete(`/users`)
  }

  findByTitle(title) {
    return http.get(`/users?title=${title}`)
  }
}

export default new UserDataService()
