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
          clientId="923400697715-0nvlv25pdiphlgn78atankgesd64pttd.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.succeed}
          onFailure={this.failed}
          cookiePolicy={'single_host_origin'}
        />
      )
    }
    return <div></div>
  }
}

export default GoogleLogin
