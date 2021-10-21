import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

// components
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcCourseEdit from './TcCourseEdit'
import TcCourseVideoUpload from './TcCourseVideoUpload'
import TcCourseVideoEdit from './TcCourseVideoEdit'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'

function ThreeStepsIndex() {
  return (
    <>
      <Router>
        <div class="container mainContent">
          <div class="row justify-content-center">
            {/* TCcourse-TCcourse-process bar */}
            <TcCourseProcessBar />
            {/* form */}
            <Switch>
              <Route path="TcCourse/TcCourseEdit">
                <TcCourseEdit />
              </Route>
              <Route path="TcCourse/TcCourseVideoUpload">
                <TcCourseVideoUpload />
              </Route>
              <Route path="TcCourse/TcCourseVideoEdit">
                <TcCourseVideoEdit />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <TcBgDecorationThreeSteps />
    </>
  )
}

export default ThreeStepsIndex
