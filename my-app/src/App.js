// Css 擺放位置
import '../src/pages/tc/TC2.css'

// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// 教師頁面
import TCindex from './pages/tc/index'


// 全頁通用元件
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/TCindex">
            <TCindex />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  )
}

export default App
