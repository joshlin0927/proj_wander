import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// 頁面
import TcProfile from './TcProfile'
import TcPassword from './TcPassword'
import TcCourse from './TcCourse'
import ThreeStepsIndex from './ThreeSteps/ThreeStepsIndex'
import TcAnalytic from './TcAnalytic'

// 共用元件
import TcSideBar from '../../components/tc/TcSideBar'
import TcPageName from '../../components/tc/TcPageName'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import ChatList from '../../components/chatroom/ChatList'
import ChatWindow from '../../components/chatroom/ChatWindow'

function index() {
  return (
    <>
      {/* Main Content */}
      <div className="container mainContent">
        <TcPageName />
        <div className="row">
          <TcSideBar />
          <Switch>
            <Route path="/TcProfile">
              <TcProfile />
            </Route>
            <Route path="/TcPassword">
              <TcPassword />
            </Route>
            <Route path="/TcCourse">
              <TcCourse />
            </Route>
            <Route path="/TcCourse/ThreeStepsIndex">
              <ThreeStepsIndex />
            </Route>
            <Route path="/TcAnalytic">
              <TcAnalytic />
            </Route>
          </Switch>
        </div>
      </div>
      <TcBgDecorationNormal />
    </>
  )
}

export default index
