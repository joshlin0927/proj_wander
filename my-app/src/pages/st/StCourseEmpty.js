import React from 'react'
import './style/st_course(empty).css'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import SideBar2 from '../../components/SideBar2'
import RemindingText from '../../components/st/RemindingText'

export default function StCourseEmpty() {
  return (
    <div class="bgc-img">
      <div class="container mainContent">
        <div class="row">
          <MultiLevelBreadCrumb />

          <div class="col-10 ml-auto pageName">
            <span class="pageNameText course">Course</span>
          </div>
        </div>
        <div class="row">
          <SideBar2 />

          <div class="col-12 col-md-8  reminding">
            <RemindingText />
          </div>
        </div>

        <div class="row mb-5 ">
          <div class="subtitle">推薦教師</div>
        </div>
        <div class="row teacherrow btblock">
          <div class="t_avatar col-12 col-md-3 col-lg-3">
            <img
              src={`${devUrl}/images/pic/老師照片/Tarin Johnson.jpg`}
              alt=""
            />
            <p class="nametag">Tarin</p>
          </div>
        </div>
      </div>
    </div>
  )
}
