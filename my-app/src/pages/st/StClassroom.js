import React, { useEffect, useState, useRef } from 'react'
import './style/classroom.css'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useHistory } from 'react-router'

import { API_HOST } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import PcCoursePlaylist from '../../components/PcCoursePlaylist'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import Footer from '../../components/Footer'

// 撥放器
import PlayerControls from '../../components/PlayerControls'
import Slider from 'react-player-controls/dist/components/Slider'
import { FormattedTime } from 'react-player-controls'

export default function StClassroom() {
  const [first, setFirst] = useState('')
  const history = useHistory()

  // 這個課程的所有影片
  const [videos, setVideos] = useState('')
  const takeClass = sessionStorage.getItem('takeClass')
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `http://localhost:3001/stcourse/classroom/?courseSid=${takeClass}`
      )
      if (!r.data[0]) {
        history.push('/StIndex/StCourse')
        return
      }
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
  const [hide, setHide] = useState('')
  const [player, setPlayer] = useState({
    playing: false,
  })
  const playerRef = useRef('')
  const { playing } = player

  const handlePlayNPause = () => {
    setPlayer({ ...player, playing: !player.playing })
    setHide('opacity-0')
  }
  const handleVolumeChange = () => {}

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
          <div className="player col-12 col-md-7 mb-5 mt-0 p-0">
            <ReactPlayer
              url={!videoLink ? first : videoLink}
              width="100%"
              height="100%"
              playing={playing}
              playIcon={<i class="far fa-play-circle"></i>}
            />
            {/* 撥放器控制 */}
            <PlayerControls />
          </div>
          <div className="playlist col-10 col-md-3">
            <PcCoursePlaylist
              videos={videos}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        <div className="h30"> </div>
      </div>
      <StBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}
