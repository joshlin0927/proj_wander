import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//引用頁面
import Login from './Login'
import SignUp from './SignUp'
import StEditProfile from './StEditProfile'

export default function index() {
  return (
    <>
      <Switch>
        <Route path="/StIndex/SignUp">
          <SignUp />
        </Route>
        <Route path="/StIndex/Login">
          <Login />
        </Route>
        <Route path="/StIndex/StEditProfile">
          <StEditProfile />
        </Route>
      </Switch>
    </>
  )
}
