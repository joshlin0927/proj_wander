import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 頁面
import TcProfile from './TcProfile'
import TcPassword from './TcPassword'
import TcCourse from './TcCourse'
import TcCourseEdit from './ThreeSteps/TcCourseEdit'
import TcCourseVideoUpload from './ThreeSteps/TcCourseVideoUpload'
import TcCourseVideoEdit from './ThreeSteps/TcCourseVideoEdit'
import TcAnalytic from './TcAnalytic'

// 共用元件
import ChatList from '../../components/chatroom/ChatList'
import ChatWindow from '../../components/chatroom/ChatWindow'

function index() {
  return (
    <>
      <Switch>
        <Route path="/TCindex/TcCourseVideoEdit/:id?">
          <TcCourseVideoEdit />
        </Route>
        <Route path="/TCindex/TcCourseVideoUpload">
          <TcCourseVideoUpload />
        </Route>
        <Route path="/TCindex/TcCourseEdit/:id?">
          <TcCourseEdit />
        </Route>
        <Route path="/TCindex/TcCourse/">
          <TcCourse />
        </Route>
        <Route path="/TCindex/TcPassword">
          <TcPassword />
        </Route>
        <Route path="/TCindex/TcAnalytic">
          <TcAnalytic />
        </Route>
        <Route path="/TCindex/TcProfile">
          <TcProfile />
        </Route>
        <Route exact path="/TCindex">
          <Redirect to="/TCindex/TcCourse" />
        </Route>
      </Switch>
    </>
  )
}

export default index
