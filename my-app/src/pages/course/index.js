// 套件
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// Css 擺放位置
import './course1.css'
// 頁面
import CsCourse from './CsCourse'
// import CsCourses from './CsCourses'
import CsCoursede from './CsCoursede'
import CsCoursedes from './CsCoursedes'
import CsCoursedesNot from './CsCoursedesNot'
import CsCoursedeNt from './CsCoursedeNt'
import CsCoursedesOpen from './CsCoursedesOpen'
import CsCourseRe from './CsCourseRe'
import CsMessage from './CsMessage'
import ArtMessageADD from './CsMessageADD'

function index() {
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
          <CsCoursedes />
        </Route>
        <Route path="/Course/CsCoursedesNot/:sid?" exact>
          <CsCoursedesNot />
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
