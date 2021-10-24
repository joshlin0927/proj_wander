import React from 'react'
import './style/st_course(empty).css'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import RemindingText from '../../components/st/RemindingText'

export default function StCourseEmpty() {
  return (
    <div className="container mainContent">
      <div className="row">
        <MultiLevelBreadCrumb />
        <div className="col-10 ml-auto pageName">
          <span className="pageNameText course">
            {' '}
            Course{' '}
          </span>{' '}
        </div>
      </div>{' '}
      <div className="row">
        <StSideBar2 />
        <div className="col-12 offset-0 col-md-8 offset-md-1 reminding">
          <RemindingText />
        </div>
      </div>
      <div className="row">
        <div className="coursesubtitle">推薦教師</div>
      </div>
      <div className="row teacherrow">
        <div className="t_avatar col-12 col-md-3 col-lg-3">
          <img
            src={`${devUrl}/images/pic/老師照片/Tarin Johnson.jpg`}
            alt=""
          />
          <p className="nametag">Tarin</p>
        </div>
      </div>
      <div className="btblock"> </div>
    </div>
  )
}
