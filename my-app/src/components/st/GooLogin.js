import React from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

export default function GooLogin() {
  const history = useHistory()
  const handleGoogleLogin = async (response) => {
    const r = await axios.post(
      'http://localhost:3001/login-jwt',
      {
        email: response.profileObj.email,
        password: response.profileObj.googleId,
      }
    )
    if (r) {
      console.log(r)
      if (r.data.success === true) {
        localStorage.setItem('token', r.data.token)
        localStorage.setItem(
          'member',
          JSON.stringify(r.data.member)
        )
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500,
        })
        history.goBack()
      }
      if (r.data.error === '無此帳號') {
        Swal.fire({
          icon: 'error',
          title: '登愣',
          text: '請先前往註冊',
        })
        return
      }
    }
  }
  return (
    <>
      <GoogleLogin
        clientId="832788875078-ordktuamhlfprtd15ao7gdkfnm76jm72.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}
