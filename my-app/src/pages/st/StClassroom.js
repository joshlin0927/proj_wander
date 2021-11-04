import React, { useEffect, useState, useRef } from 'react'
import './style/classroom.css'
import videojs from 'video.js'

import { API_HOST } from '../../config'

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
  // 被點選的影片
  const [active, setActive] = useState('')

  // 要放在url的影片連結
  const [videos, setVideos] = useState('')

  // console.log(videos.video_link)
  // console.log('active', active)
  const playerRef = useRef(null)

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `${API_HOST}/video/e4b64ef4-7dc8-4f15-a138-7e0923dce2dc.mp4`,
        // type: 'video/mp4',
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText class">
              Class
            </span>
          </div>
        </div>

        <div className="row">
          <StSideBar2 />
          <PcCoursePlayer
            options={videoJsOptions}
            onReady={handlePlayerReady}
          />
          <PcCoursePlaylist
            videos={videos}
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="row">
          <MobileCoursePlayer />
        </div>
        <div className="h30"></div>
        <div className="row">
          <MobileCoursePlaylist />
        </div>
        <div className="h30"> </div>
      </div>
      <div className=" bgiclassroom "> </div>
      <Footer />
    </>
  )
}
