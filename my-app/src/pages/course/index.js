// 套件
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// Css 擺放位置
import './course1.css'
// 頁面
import CsCourse from './CsCourse'
import CsCoursede from './CsCoursede'
import CsCoursedeNt from './CsCoursedeNt'
import CsCoursedeOpen from './CsCoursedeOpen'
import CsCourseRe from './CsCourseRe'

function index() {
  return (
    <>
      <Switch>
        <Route path="/Course/CsCourse" exact>
          <CsCourse />
        </Route>
        <Route path="/Course/CsCoursede" exact>
          <CsCoursede />
        </Route>
        <Route path="/Course/CsCoursedeNt" exact>
          <CsCoursedeNt />
        </Route>
        <Route path="/Course/CsCoursedeOpen" exact>
          <CsCoursedeOpen />
        </Route>
        <Route path="/Course/CsCourseRe" exact>
          <CsCourseRe />
        </Route>
        <Route path="/Course">
          <Redirect to="/Course/CsCourse" />
        </Route>
      </Switch>
    </>
  )
}

export default index
