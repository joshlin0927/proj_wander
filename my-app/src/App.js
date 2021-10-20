// Css 擺放位置
import './styles/TC2.css'

// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// 教師頁面
import TCpages from './pages/tc/index'

// 全頁通用元件
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function App() {
  return (
    <>
      {/* <MultiLevelBreadCrumb /> */}
      <TCpages />
    </>
  )
}

export default App
