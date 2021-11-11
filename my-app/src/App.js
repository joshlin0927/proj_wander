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
import TcIndex from './pages/tc'

import Preview from './pages/tc/TcPreview'

// 學生頁面
import StIndex from './pages/st'

// 課程商品頁面
import CsIndex from './pages/course'

// 文章頁面
import ArtIndex from './pages/article/index'

// 購物車
import Cart from './pages/cart'

// 關於我們
import AboutUs from './pages/aboutus/AboutUs'

// 常見問題
import Comonproblem from './pages/comonproblem/Comonproblem'

// 會員管理後台
import CompanyBackend from './pages/CompanyBackend'
import ChatroomMobile from './pages/st/ChatroomMobile'

function App() {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()
  const [navCartQty, setNavCartQty] = useState(0)
  const [cartIconImg, setCartIconImg] = useState('')

  return (
    <Router>
      <>
        <ScrollToTop>
          <PcNavbar
            auth={auth}
            setAuth={setAuth}
            user={user}
            navCartQty={navCartQty}
            setNavCartQty={setNavCartQty}
            cartIconImg={cartIconImg}
            setCartIconImg={setCartIconImg}
          />
          <Switch>
            <Route path="/CompanyBackend">
              <CompanyBackend />
            </Route>
            <Route path="/TcIndex" auth={auth} user={user}>
              <TcIndex />
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
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Comonproblem">
              <Comonproblem />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/ArtIndex">
              <ArtIndex />
            </Route>
            <Route path="/Course">
              <CsIndex
                setNavCartQty={setNavCartQty}
                setCartIconImg={setCartIconImg}
              />
            </Route>
            <Route path="/Preview">
              <Preview />
            </Route>
            <Route path="/ChatroomMobile">
              <ChatroomMobile />
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
