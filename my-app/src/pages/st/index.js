import React from 'react'
import { Route, Switch } from 'react-router-dom'

//引用頁面
import StProfile from './StProfile'
import StPasswordModify from './StPasswordModify'
import StStartMyCourse from './StStartMyCourse'
import StSelectLanguage from './StSelectLanguage'
import StGameStart from './StGameStart'
import StGaming from './StGaming'
import StCourseEmpty from './StCourseEmpty'
import StCourse from './StCourse'
import StCalendar from './StCalendar'
import StClassroom from './StClassroom'
import StOrder from './StOrder'

function index() {
  return (
    <>
      <Switch>
        <Route path="/StIndex/StProfile/:id?">
          <StProfile />
        </Route>

        <Route path="/StIndex/StPasswordModify/:id?">
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
        <Route exact path="/StIndex/StGaming">
          <StGaming />
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
        <Route exact path="/StIndex/StOrder/:id?">
          <StOrder />
        </Route>
      </Switch>
    </>
  )
}
export default index
