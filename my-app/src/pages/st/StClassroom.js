import React, { useEffect, useState } from 'react'
import './style/classroom.css'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import PcCoursePlayer from '../../components/PcCoursePlayer'
import PcCoursePlaylist from '../../components/PcCoursePlaylist'
import MobileCoursePlayer from '../../components/MobileCoursePlayer'
import MobileCoursePlaylist from '../../components/MobileCoursePlaylist'
import Footer from '../../components/Footer'
import axios from 'axios'

export default function StClassroom() {
  const [videos, setVideos] = useState('')
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        'http://localhost:3001/stcourse/classroom/?courseSid=24'
      )
      setVideos(r.data)
      // console.log(r.data)
    })()
  }, [])
  return (
    <>
      <div class="container mainContent">
        <MultiLevelBreadCrumb />
        <div class="row">
          <div class="col-10 ml-auto pageName">
            <span class="pageNameText class">Class</span>
          </div>
        </div>

        <div class="row">
          <StSideBar2 />
          <PcCoursePlayer />
          <PcCoursePlaylist videos={videos} />
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
