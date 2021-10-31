// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'
import ScrollToTop from './components/ScrollToTop'

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


// 文章頁面

import Artindex from './pages/article/index'

// 購物車
import Cart from './pages/cart'

// 會員管理後台
import CompanyBackend from './pages/CompanyBackend'

function App() {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()

  return (
    <Router>
      <>
        <ScrollToTop>
          <PcNavbar
            auth={auth}
            setAuth={setAuth}
            user={user}
          />
          <Switch>
            <Route path="/CompanyBackend">
              <CompanyBackend />
            </Route>
            <Route path="/TCindex" auth={auth} user={user}>
              <TCindex />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/StIndex">
              <StIndex />
            </Route>
            <Route path="/Login">
              <Login
                auth={auth}
                setAuth={setAuth}
                setUser={setUser}
              />
            </Route>

            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Artindex">
              <Artindex />
            </Route>


            <Route path="/">
              <WanderIndex />
            </Route>
          </Switch>
          <MobileNavbar
            auth={auth}
            setAuth={setAuth}
            user={user}
          />
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
