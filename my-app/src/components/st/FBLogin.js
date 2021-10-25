import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export class FBLogin extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  }

  responseFacebook = (response) => {
    // console.log(response)
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.url,
    })
  }
  componentClicked = () => console.log('clicked')

  render() {
    let fbContent
    if (this.state.isLoggedIn) {
      fbContent = null
    } else {
      fbContent = (
        <FacebookLogin
          appId="428380918849804"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return <> {fbContent} </>
  }
}

export default FBLogin
