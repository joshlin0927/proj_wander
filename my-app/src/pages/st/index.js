import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//引用頁面
import StEditProfile from './StEditProfile'
import StPasswordModify from './StPasswordModify'
import StStartMyCourse from './StStartMyCourse'
import StSelectLanguage from './StSelectLanguage'
import StGameStart from './StGameStart'
import StCourseEmpty from './StCourseEmpty'

export default function index() {
  return (
    <>
      <Switch>
        <Route path="/StIndex/"></Route>

        <Route path="/StIndex/StEditProfile">
          <StEditProfile />
        </Route>

        <Route path="/StIndex/StPasswordModify">
          <StPasswordModify />
        </Route>

        <Route path="/StIndex/StStartMyCourse">
          <StStartMyCourse />
        </Route>
        <Route path="/StIndex/StSelectLanguage">
          <StSelectLanguage />
        </Route>
        <Route path="/StIndex/StGameStart">
          <StGameStart />
        </Route>
        <Route path="/StIndex/StCourseEmpty">
          <StCourseEmpty />
        </Route>
      </Switch>
    </>
  )
}
