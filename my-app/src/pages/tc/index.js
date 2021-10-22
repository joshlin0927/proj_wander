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
import TcCourseEdit from './ThreeSteps/TcCourseEdit'
import TcCourseVideoEdit from './ThreeSteps/TcCourseVideoEdit'
import TcAnalytic from './TcAnalytic'

// 共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import ChatList from '../../components/chatroom/ChatList'
import ChatWindow from '../../components/chatroom/ChatWindow'

function index() {
  return (
    <>
      <Switch>
        {/* Main Content */}
        <Route path="/TCindex/TcProfile">
          <TcProfile />
        </Route>
        <Route path="/TCindex/TcPassword">
          <TcPassword />
        </Route>
        <Route path="/TCindex/TcCourse">
          <TcCourse />
        </Route>
        <Route path="/TCindex/TcCourseVideoEdit">
          <TcCourseVideoEdit />
        </Route>
        <Route path="/TCindex/TcCourseEdit">
          <TcCourseEdit />
        </Route>
        <Route path="/TCindex/TcCourseEdit">
          <TcCourseEdit />
        </Route>
        <Route path="/TCindex/TcAnalytic">
          <TcAnalytic />
        </Route>
      </Switch>
    </>
  )
}

export default index
