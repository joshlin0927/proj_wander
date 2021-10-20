import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// 頁面
import TcProfile from './TcProfile'

// 共用元件


function index() {
  return (
    <>

      <TcProfile/>
    </>
  )
}

export default index
