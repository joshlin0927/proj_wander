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

// 首頁
import WanderIndex from './pages/home/WanderIndex'

// 教師頁面
import TCindex from './pages/tc/index'


// 全頁通用元件
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <PcNavbar />
        <MultiLevelBreadCrumb />

        <Switch>
<<<<<<< HEAD
          <Route path="/TCindex">
=======
          <Route path="/TCindex" exact>
>>>>>>> 7dede0c099c246aae9a9c150db94e2315f10e230
            <TCindex />
          </Route>
          <Route path="/">
            <WanderIndex />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  )
}

export default App
