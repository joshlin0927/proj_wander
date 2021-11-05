import React, { useEffect, useState } from 'react'
import './style/classroom.css'
import ReactPlayer from 'react-player'
import axios from 'axios'

import { API_HOST } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import PcCoursePlaylist from '../../components/PcCoursePlaylist'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import Footer from '../../components/Footer'

// 撥放器
import PlayerControls from '../../components/PlayerControls'

export default function StClassroom() {
  const [first, setFirst] = useState('')

  // 這個課程的所有影片
  const [videos, setVideos] = useState('')
  const takeClass = sessionStorage.getItem('takeClass')
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `http://localhost:3001/stcourse/classroom/?courseSid=${takeClass}`
      )
      setFirst(`${API_HOST}/video/${r.data[0].video_link}`)
      setActive(r.data[0].sid)
      setVideos(r.data)
    })()
  }, [])

  // 被點選的影片編號
  const [active, setActive] = useState('')
  // 影片連結
  const [videoLink, setVideoLink] = useState('')

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `http://localhost:3001/stcourse/videos/?videoSid=${active}`
      )

      if (r.data) {
        setVideoLink(
          `${API_HOST}/video/${r.data.video_link}`
        )
      }
    })()
  }, [active])

  // 撥放器
  const [player, setPlayer] = useState({
    playing: true,
  })

  const { playing } = player

  const handlePlayNPause = () => {
    setPlayer({ ...player, playing: !player.playing })
  }

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

          <ReactPlayer
            className="col-10 col-md-7 mx-auto mb-5"
            url={!videoLink ? first : videoLink}
            width="100%"
            height="100%"
            playing={playing}
            controls
            volume
            progressInterval
          />

          <PcCoursePlaylist
            videos={videos}
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="h30"> </div>
      </div>
      <StBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}
