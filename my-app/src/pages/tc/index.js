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
import TcAnalytic from './TcAnalytic'

// 共用元件
import TcSideBar from '../../components/tc/TcSideBar'
import TcPageName from '../../components/tc/TcPageName'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import TcBgDecorationThreeSteps from '../../components/tc/TcBgDecorationThreeSteps'
import ChatList from '../../components/chatroom/ChatList'
import ChatWindow from '../../components/chatroom/ChatWindow'
import TcCourseEdit from './ThreeSteps/TcCourseEdit'

function index() {
  return (
    <>
      <Router>
        {/* Main Content */}
        <div className="container mainContent">
          <TcPageName />
          <div className="row">
            <TcSideBar />
            {/* <ChatList /> */}
            {/* <ChatWindow /> */}
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
              <Route path="/TcAnalytic">
                <TcAnalytic />
              </Route>
            </Switch>
          </div>
        </div>
        <TcBgDecorationNormal />
      </Router>
    </>
  )
}

export default index
