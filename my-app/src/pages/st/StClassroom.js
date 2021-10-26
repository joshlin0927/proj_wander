import React from 'react'
import './style/classroom.css'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import PcCoursePlayer from '../../components/PcCoursePlayer'
import PcCoursePlaylist from '../../components/PcCoursePlaylist'
import MobileCoursePlayer from '../../components/MobileCoursePlayer'
import MobileCoursePlaylist from '../../components/MobileCoursePlaylist'
import Footer from '../../components/Footer'

export default function StClassroom() {
  return (
    <>
      <div class="container mainContent">
        <div class="row">
          <MultiLevelBreadCrumb />
          <div class="col-10 ml-auto pageName">
            <span class="pageNameText class">Class</span>
          </div>
        </div>

        <div class="row">
          <StSideBar2 />
          <PcCoursePlayer />
          <PcCoursePlaylist />
        </div>

        <div class="row">
          <MobileCoursePlayer />
        </div>
        <div className="h30"></div>
        <div class="row">
          <MobileCoursePlaylist />
        </div>
        <div className="h30"> </div>
      </div>
      <div className=" bgiclassroom "> </div>
      <Footer />
    </>
  )
}
