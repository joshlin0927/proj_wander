// Css 擺放位置
import '../src/pages/tc/TC2.css'

// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// Navbar
import PcNavbar from './components/PcNavbar'
import MobileNavbar from './components/MobileNavbar'

// 首頁
import WanderIndex from './pages/home/WanderIndex'
import TcProfile from './pages/tc/TcProfile'
import TcPassword from './pages/tc/TcPassword'
import TcCourse from './pages/tc/TcCourse'
import TcCourseVideoEdit from './pages/tc/ThreeSteps/TcCourseVideoEdit'
import TcCourseVideoUpload from './pages/tc/ThreeSteps/TcCourseVideoUpload'
import TcCourseEdit from './pages/tc/ThreeSteps/TcCourseEdit'
import TcAnalytic from './pages/tc/TcAnalytic'

// 教師頁面
import TCindex from './pages/tc/index'

// import Login from './pages/st/Login'

// 全頁通用元件
import Footer from './components/Footer'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function App() {
  return (
    <Router>
      <>
        <PcNavbar />
        <MultiLevelBreadCrumb />

        <Switch>
          <Route path="/TCindex">
            {/* exact 要加回去 */}
            <TCindex />
          </Route>

          <Route path="/Login">
            {/* <Login /> */}
          </Route>

          <Route path="/">
            <WanderIndex />
          </Route>
        </Switch>
        <MobileNavbar />
        <Footer />
      </>
    </Router>
  )
}

export default App
