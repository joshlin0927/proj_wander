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

// 教師頁面
import TCindex from './pages/tc/index'

// 學生頁面
// import StIndex from './pages/st/index'
// import Login from './pages/st/Login'

// 購物車
import CartStep01 from './pages/cart/CartStep01'

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
            <CartStep01 />
          </Route>
          <Route path="/StIndex">
            {/* <StIndex /> */}
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
