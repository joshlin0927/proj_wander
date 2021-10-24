import React from 'react'
import {
  BrowserRouter as Route,
  Switch,
} from 'react-router-dom'

//引用頁面
import StProfile from './StProfile'
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
        <Route exact path="/StIndex/StProfile/:id?">
          <StProfile />
        </Route>

        <Route exact path="/StIndex/StPasswordModify/:id?">
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
        <Route exact path="/StIndex/StCourse/:id?">
          <StCourse />
        </Route>
        <Route exact path="/StIndex/StCalendar/:id?">
          <StCalendar />
        </Route>
        <Route exact path="/StIndex/StClassroom/:id?">
          <StClassroom />
        </Route>
      </Switch>
    </>
  )
}
