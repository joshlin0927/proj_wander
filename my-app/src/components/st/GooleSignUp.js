import axios from 'axios'
import GoogleLogin from 'react-google-login'
import React from 'react'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

export default function GooleSignUp(props) {
  const history = useHistory()
  const { asTeacherOrStudent } = props

  const handleGoogleSignUp = async (response) => {
    if (asTeacherOrStudent === 3) {
      Swal.fire({
        title: '請選擇註冊身份',
      })
      return
    }
    const r = await axios.post(
      'http://localhost:3001/SignUp',
      {
        googleidentity: 1,
        email: response.profileObj.email,
        lastname: response.profileObj.familyName,
        firstname: response.profileObj.givenName,
        password: response.profileObj.googleId,
        identity: asTeacherOrStudent,
      }
    )
    if (r) {
      // console.log(r)
      if (r.data.success === true) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: '恭喜成為Wander會員',
          showConfirmButton: false,
          timer: 1500,
        })
        history.push('/login')
      } else {
        Swal.fire({
          icon: 'error',
          title: '重複註冊',
          text: '此帳號已存在',
        })
        return
      }
    }
  }
  return (
    <>
      <GoogleLogin
        clientId="832788875078-ordktuamhlfprtd15ao7gdkfnm76jm72.apps.googleusercontent.com"
        buttonText="Sign Up With Google"
        onSuccess={handleGoogleSignUp}
        onFailure={handleGoogleSignUp}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}
