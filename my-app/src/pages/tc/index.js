// 套件
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'

// Css 擺放位置
import './TC2.css'

// 頁面
import TcProfile from './TcProfile'
import TcPassword from './TcPassword'
import TcCourse from './TcCourse'
import TcCourseAdd from './ThreeSteps/TcCourseAdd'
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
        <Route path="/TCindex/TcCourseVideoEdit">
          <TcCourseVideoEdit />
        </Route>
        <Route path="/TCindex/TcCourseVideoUpload">
          <TcCourseVideoUpload />
        </Route>
        <Route path="/TCindex/TcCourseEdit/:sid?">
          <TcCourseEdit />
        </Route>
        <Route path="/TCindex/TcCourseAdd/">
          <TcCourseAdd />
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
        <Route path="/TCindex">
          <Redirect to="/TCindex/TcCourse" />
        </Route>
      </Switch>
    </>
  )
}

export default index
