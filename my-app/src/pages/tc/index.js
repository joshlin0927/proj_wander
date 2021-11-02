// 套件
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

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

function Index() {
  return (
    <>
      <Switch>
        <Route path="/TcIndex/TcCourseVideoEdit">
          <TcCourseVideoEdit />
        </Route>
        <Route path="/TcIndex/TcCourseVideoUpload">
          <TcCourseVideoUpload />
        </Route>
        <Route path="/TcIndex/TcCourseEdit/:sid?">
          <TcCourseEdit />
        </Route>
        <Route path="/TcIndex/TcCourseAdd/">
          <TcCourseAdd />
        </Route>
        <Route path="/TcIndex/TcCourse/">
          <TcCourse />
        </Route>
        <Route path="/TcIndex/TcPassword">
          <TcPassword />
        </Route>
        <Route path="/TcIndex/TcAnalytic">
          <TcAnalytic />
        </Route>
        <Route path="/TcIndex/TcProfile">
          <TcProfile />
        </Route>
        <Route path="/TcIndex">
          <Redirect to="/TcIndex/TcCourse" />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Index)
