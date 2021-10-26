// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
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

// 購物車
import Cart from './pages/cart'

// 會員管理後台
import CompanyBackend from './pages/CompanyBackend'

function App() {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()
  const [identity, setIdentity] = useState()

  // const token = localStorage.getItem('token')
  // if (token) {
  //   store.dispatch({ type: AUTHENTICATE_THE_USER })
  // }

  console.log(user)

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
              <Login
                auth={auth}
                setAuth={setAuth}
                setUser={setUser}
                setIdentity={setIdentity}
              />
            </Route>

            <Route path="/SignUp">
              <SignUp />
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
