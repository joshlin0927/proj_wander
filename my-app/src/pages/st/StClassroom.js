import React, { useEffect, useState, useRef } from 'react'
import { Modal } from 'react-bootstrap'
import './style/classroom.css'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useHistory } from 'react-router'
import screenfull from 'screenfull'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
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
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)

  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const identity = member ? JSON.parse(member).identity : ''

  const [imgSrc, setImgSrc] = useState('')
  const [receiveTCID, setReceiveTCID] = useState('')
  const [first, setFirst] = useState('')
  const history = useHistory()

  // 被點選的影片編號
  const [active, setActive] = useState('')
  // 影片連結
  const [videoLink, setVideoLink] = useState('')

  // 這個課程的所有影片
  const [videos, setVideos] = useState('')
  const takeClass = sessionStorage.getItem('takeClass')
  useEffect(() => {
    if (token && identity === 0) {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/stprofile/list`,
          {
            headers: {
              Authorization:
                'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        if (r) {
          // console.log(r)
          setImgSrc(r.data[0][0].avatar)
        }
      })()
    } else {
      history.push('/')
    }

    ;(async () => {
      let r = await axios.post(
        `http://localhost:3001/stcourse/boughtCourse`,
        {
          courseSid: takeClass,
          member_sid: JSON.parse(member).sid,
        }
      )
      if (!r.data[0]) {
        history.push('/StIndex/StCourse')
        return
      }
      setFirst(`${API_HOST}/video/${r.data[0].video_link}`)
      setActive(r.data[0].sid)
      setVideos(r.data)

      // console.log('videos', r.data)
      // console.log('active', r.data[0].sid)
    })()
  }, [imgSrc])

  useEffect(() => {
    ;(async () => {
      let r = await axios.post(
        `http://localhost:3001/stcourse/videos`,
        {
          videoSid: active,
          member_sid: JSON.parse(member).sid,
        }
      )
      setReceiveTCID(r.data.teacher_sid)

      if (r.data) {
        setVideoLink(
          `${API_HOST}/video/${r.data.video_link}`
        )
      }
    })()
  }, [active])

  // 撥放器
  const [player, setPlayer] = useState({
    playing: false,
    muted: false,
    volume: 1,
    played: 0,
    seeking: false,
    fade: '',
  })

  // 捕捉撥放器與撥放器控制
  const playerContainerRef = useRef(null)

  // 捕捉撥放器
  const playerRef = useRef(null)

  const { playing, muted, volume, played, seeking, fade } =
    player

  const handlePlayNPause = () => {
    setPlayer({
      ...player,
      playing: !player.playing,
      fade: 'playIconFade-out',
    })
  }

  // 音量控制
  const handleMute = () => {
    setPlayer({ ...player, muted: !player.muted })
  }

  const handleVolumeChange = (e, newValue) => {
    setPlayer({
      ...player,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    })
  }

  const handleVolumeUp = (e, newValue) => {
    setPlayer({
      ...player,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    })
  }

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current)
  }

  // 捕捉時間跳轉與點擊跳轉
  const handleProgress = (changeState) => {
    // console.log(changeState)
    if (!player.seeking) {
      setPlayer({ ...player, ...changeState })
    }
  }

  const handleSeekChange = (e, newValue) => {
    // console.log(newValue)
    setPlayer({
      ...player,
      played: parseFloat(newValue / 100),
    })
  }

  const seekingMouseDown = (e) => {
    setPlayer({
      ...player,
      seeking: true,
    })
  }

  const seekingMouseUp = (e, newValue) => {
    setPlayer({
      ...player,
      seeking: false,
    })
    playerRef.current.seekTo(newValue / 100)
  }

  // 計算現在時間與總長
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00'
  // console.log('currentTime', currentTime)

  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00'
  // console.log('duration', duration)

  const elapsedTime =
    currentTime < 216000
      ? moment
          .duration(currentTime, 'seconds')
          .format('mm:ss', { trim: false })
      : moment
          .duration(currentTime, 'seconds')
          .format('HH:mm:ss', { trim: false })

  const totalDuration =
    duration < 216000
      ? moment
          .duration(duration, 'seconds')
          .format('mm:ss', { trim: false })
      : moment
          .duration(duration, 'seconds')
          .format('HH:mm:ss', { trim: false })

  const createConversation = async (TCID) => {
    if (TCID) {
      let r = await axios.post(`${API_HOST}/conversation`, {
        senderID: JSON.parse(member).sid,
        receiverID: TCID,
      })
      if (r.data.success) {
        const message = {
          senderID: JSON.parse(member).sid,
          text: 'Hello!',
          conversationID: r.data.result.insertId,
        }
        let m = await axios.post(
          `${API_HOST}/message`,
          message
        )
        if (m.data.success) {
          handleStopModalShow()
        }
      }
    }
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
          <StSideBar2 imgSrc={imgSrc} />
          <div
            ref={playerContainerRef}
            className="player col-12 col-md-7 mb-5 p-0"
          >
            <ReactPlayer
              ref={playerRef}
              className="playerBG"
              url={!videoLink ? first : videoLink}
              width="100%"
              height="100%"
              playing={playing}
              muted={muted}
              volume={volume}
              onProgress={handleProgress}
              seeking={seeking}
            />
            {/* 撥放器控制 */}
            <PlayerControls
              handlePlayNPause={handlePlayNPause}
              playing={playing}
              fade={fade}
              handleMute={handleMute}
              muted={muted}
              handleVolumeChange={handleVolumeChange}
              handleVolumeUp={handleVolumeUp}
              volume={volume}
              toggleFullScreen={toggleFullScreen}
              played={played}
              seeking={handleSeekChange}
              seekingMouseDown={seekingMouseDown}
              seekingMouseUp={seekingMouseUp}
              elapsedTime={elapsedTime}
              totalDuration={totalDuration}
            />
          </div>
          <div className="playlist col-10 col-md-3">
            <PcCoursePlaylist
              videos={videos}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        <div class="row StTitleRow">
          <div className=" col-12 col-md-7 offset-md-2 mb-5 p-0">
            <h3 className="">
              課程標題:
              {videos ? videos[0].course_name : ''}
            </h3>
            <h4 className="courseDetailTitle">課程介紹:</h4>
            <p className="courseDetail">
              {' '}
              {videos ? videos[0].course_introduction : ''}
            </p>
          </div>
          <button
            className="btn btn-secondary contactTeacher col-md-3"
            onClick={() => {
              createConversation(receiveTCID)
            }}
          >
            聯繫老師
          </button>
        </div>
        <div className="playlist-m col-10 col-md-3 mb-5">
          <PcCoursePlaylist
            videos={videos}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      {/* 跳轉提示modal */}
      <Modal
        show={stopModalShow}
        onHide={handleStopModalClose}
        id="alertModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>
            已為您聯繫教師，您可以在聊天室介面查看內容
          </span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleStopModalClose}
          >
            確認
          </button>
        </Modal.Footer>
      </Modal>

      <StBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}
