import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class GooLogin extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  }

  succeed = (response) => console.log(response)
  failed = () => console.log('Bye')

  render() {
    let GoogleContent
    if (this.state.isLoggedIn) {
      GoogleContent = null
    } else {
      GoogleContent = (
        <GoogleLogin
          clientId="832788875078-ordktuamhlfprtd15ao7gdkfnm76jm72.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.succeed}
          onFailure={this.failed}
          cookiePolicy={'single_host_origin'}
        />
      )
    }
    return GoogleContent
  }
}

export default GoogleLogin
