// 套件
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// Css 擺放位置
import './course1.css'
// 頁面
import CsCourse from './CsCourse'
// import CsCourses from './CsCourses'
import CsCoursede from './CsCoursedesn'
import CsCoursedes from './CsCoursedes'
import CsCoursedesn from './CsCoursedesn'
import CsCoursedeNt from './CsCoursedeNt'
import CsCoursedesOpen from './CsCoursedesOpen'
import CsCourseRe from './CsCourseRe'
import CsMessage from './CsMessage'
import ArtMessageADD from './CsMessageADD'

function index(props) {
  const { setNavCartQty } = props
  return (
    <>
      <Switch>
        <Route path="/Course/CsCourse" exact>
          <CsCourse />
        </Route>
        {/* <Route path="/Course/CsCourses" exact>
          <CsCourses />
        </Route> */}
        <Route path="/Course/CsCoursede" exact>
          <CsCoursede />
        </Route>
        <Route path="/Course/CsCoursedes/:sid?" exact>
          <CsCoursedes setNavCartQty={setNavCartQty} />
        </Route>
        <Route path="/Course/CsCoursedesn/:sid?" exact>
          <CsCoursedesn />
        </Route>
        <Route path="/Course/CsCoursedeNt" exact>
          <CsCoursedeNt />
        </Route>
        <Route path="/Course/CsCoursedesOpen/:sid?" exact>
          <CsCoursedesOpen />
        </Route>
        <Route path="/Course/CsCourseRe" exact>
          <CsCourseRe />
        </Route>
        <Route path="/Course/CsMessage" exact>
          <CsMessage />
        </Route>
        <Route path="/Course/CsMessageADD/:sid?" exact>
          <ArtMessageADD />
        </Route>
        <Route path="/Course">
          <Redirect to="/Course/CsCourse" />
        </Route>
      </Switch>
    </>
  )
}

export default index
