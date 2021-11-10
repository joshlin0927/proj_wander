import axios from 'axios'
import GoogleLogin from 'react-google-login'
import React from 'react'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

export default function GooLogin(props) {
  const history = useHistory()
  const { asTeacherOrStudent } = props

  const handleGoogleLogin = async (response) => {
    if (asTeacherOrStudent === 3) {
      Swal.fire({
        title: '請選擇註冊身份',
      })
      return
    }
    const r = await axios.post(
      'http://localhost:3001/SignUp',
      {
        GoogleId: 1,
        email: response.profileObj.email,
        lastname: response.profileObj.familyName,
        firstname: response.profileObj.givenName,
        password: response.profileObj.googleId,
        identity: asTeacherOrStudent,
      }
    )
    if (r) {
      console.log(r)
      if (r.data.success === true) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: '恭喜成為Wander會員',
          showConfirmButton: false,
          timer: 1500,
        })
        history.push('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: '抱歉',
          text: '註冊失敗',
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

// export class GooLogin extends Component {

//   state = {
//     isLoggedIn: false,
//     userID: '',
//     name: '',
//     email: '',
//     picture: '',
//   }

//   succeed = (response) => {

//     axios.post('http://localhost:3001/SignUp', {
//       GoogleId: 0,
//       email: response.profileObj.email,
//       lastname: response.profileObj.familyName,
//       firstname: response.profileObj.givenName,

//       password: response.profileObj.googleId,
//       identity: asTeacherOrStudent,
//     })
//   }
//   failed = () => console.log('Bye')

//   render() {
//     let GoogleContent
//     if (this.state.isLoggedIn) {
//       GoogleContent = null
//     } else {
//       GoogleContent = (
//         <GoogleLogin
//           clientId="832788875078-ordktuamhlfprtd15ao7gdkfnm76jm72.apps.googleusercontent.com"
//           buttonText="Login With Google"
//           onSuccess={this.succeed}
//           onFailure={this.failed}
//           cookiePolicy={'single_host_origin'}
//         />
//       )
//     }
//     return GoogleContent
//   }
// }

// export default GooLogin
