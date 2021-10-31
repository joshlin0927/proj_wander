// 套件
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'

// Css 擺放位置
import './Art.css'

// 頁面

import ArtMessage from './ArtMessage'


function index(props) {
  const { auth, setAuth } = props
  //判斷是否登入並為教師身分
  // const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const sid = JSON.parse(member).sid
  // console.log(sid)
  // useEffect(() => {
  //   if (!token) {
  //     // history.push('/')
  //   } else if (identity !== 1) {
  //     // history.push('/')
  //   } else {
  //     return
  //   }
  // }, [])
  return (
    <>
      <Switch>
        <Route path={`/Artindex/ArtMessage/`}>
          <ArtMessage />
        </Route>
        <Route exact path="/Artindex">
          <Redirect to="/Artindex/ArtMessage/" />
        </Route>
      </Switch>
    </>
  )
}

export default index
