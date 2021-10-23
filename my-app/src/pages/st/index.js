import React from 'react'
import {
  BrowserRouter as Route,
  Switch,
} from 'react-router-dom'

//引用頁面
import StEditProfile from './StEditProfile'
import StPasswordModify from './StPasswordModify'
import StStartMyCourse from './StStartMyCourse'
import StSelectLanguage from './StSelectLanguage'
import StGameStart from './StGameStart'
import StCourseEmpty from './StCourseEmpty'
import StCourse from './StCourse'
import StCalendar from './StCalendar'
import StClassroom from './StClassroom'

export default function index() {
  return (
    <>
      <Switch>
        <Route exact path="/StIndex/StEditProfile">
          <StEditProfile />
        </Route>

        <Route exact path="/StIndex/StPasswordModify">
          <StPasswordModify />
        </Route>

        <Route exact path="/StIndex/StStartMyCourse">
          <StStartMyCourse />
        </Route>
        <Route exact path="/StIndex/StSelectLanguage">
          <StSelectLanguage />
        </Route>
        <Route exact path="/StIndex/StGameStart">
          <StGameStart />
        </Route>
        <Route exact path="/StIndex/StCourseEmpty">
          <StCourseEmpty />
        </Route>
        <Route exact path="/StIndex/StCourse">
          <StCourse />
        </Route>
        <Route exact path="/StIndex/StCalendar">
          <StCalendar />
        </Route>
        <Route exact path="/StIndex/StClassroom">
          <StClassroom />
        </Route>
      </Switch>
    </>
  )
}
