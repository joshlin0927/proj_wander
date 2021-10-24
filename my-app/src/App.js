// Css 擺放位置
import '../src/pages/tc/TC2.css'

// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React from 'react'

// Navbar
import PcNavbar from './components/PcNavbar'
import MobileNavbar from './components/MobileNavbar'

// 首頁
import WanderIndex from './pages/home/WanderIndex'

//會員登入、註冊
import Login from './pages/st/Login'
import SignUp from './pages/st/SignUp'

// 教師頁面
import TCindex from './pages/tc/index'

// 學生頁面
import StIndex from './pages/st/index'

// 購物車
import Cart from './pages/cart'

function App() {
  return (
    <Router>
      <>
        <PcNavbar />
        {/* <MultiLevelBreadCrumb /> */}

        <Switch>
          <Route path="/TCindex">
            {/* exact 要加回去 */}
            <TCindex />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/StIndex">
            <StIndex />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/SignUp">
            <SignUp />
          </Route>

          <Route path="/">
            <WanderIndex />
          </Route>
        </Switch>

        <MobileNavbar />
      </>
    </Router>
  )
}

export default App
