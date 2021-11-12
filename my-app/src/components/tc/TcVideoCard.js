import axios from 'axios'
import React, { useState, useRef } from 'react'
import { Modal } from 'react-bootstrap'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import screenfull from 'screenfull'
import {
  TcVideo__DELETE,
  TcVideo_EDIT,
  API_HOST,
} from '../../config'

import ReactPlayer from 'react-player'
// 撥放器
import PlayerControls from '../PlayerControls'

function TcVideoCard(props) {
  const {
    sid,
    // course_sid,
    // course_name,
    // video_cover,
    video_name,
    video_link,
    // teacher_sid,
    created_at,
    duration1,
    remove,
    status,
    setShowUp,
  } = props

  //時間換算
  const videoTime = moment
    .duration(duration1, 'seconds')
    .format('hh:mm:ss')

  // 刪除影片
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const deleteVideo = async () => {
    let r = await axios.delete(TcVideo__DELETE + sid)
    if (r.status === 200) {
      handleClose()
    }
  }

  //修改影片
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)

  // 影片名稱欄位
  const [nameChange, setNameChange] = useState(video_name)

  // 影片名稱修改後的送出
  const FormSubmit = async (e) => {
    e.preventDefault()

    // console.log(new FormData(e.target).get('video_name'))
    ;(async () => {
      let r = await axios.post(
        `${TcVideo_EDIT}?videoSid=${sid}`,
        {
          video_name: new FormData(e.target).get(
            'video_name'
          ),
        }
      )
      // console.log(r)
      handleIsClose()
      if (r.data.success === true) {
        setShowUp('showup')
        setTimeout(() => {
          setShowUp('none')
        }, 1000)
      }
    })()
  }

  //預覽影片
  const [isVidShow, setIsVidShow] = useState(false)
  const handleIsVidClose = () => setIsVidShow(false)
  const handleIsVidShow = () => setIsVidShow(true)

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

  return (
    <>
      <div className="TCcourse-card col-12">
        {/* <div
          className="TCcourse-img"
          onClick={handleIsShow}
        >
          {video_cover ? (
            <img
              src={`${API_HOST}/img/${video_cover}`}
              alt=""
            />
          ) : (
            <img
              src={`${devUrl}/images/course/AdobeStock_339695471.jpg`}
              alt=""
            />
          )}
        </div> */}
        <div className="TCcourse-info">
          <div
            className="TCcourse-title w-50"
            onClick={handleIsShow}
          >
            <span>{video_name}</span>
          </div>
          <div className="TCcourse-info-right">
            <div
              className="TCcourse-detail clickZone py-5"
              onClick={handleIsVidShow}
            >
              <i class="far fa-play-circle"></i>
            </div>
            <div className="TCcourse-detail py-5">
              <span>上傳日期：</span> {created_at}
            </div>
            <div className="TCcourse-detail py-5">
              <span>影片長度：</span>
              {videoTime}
            </div>
          </div>
        </div>
        <div
          className="TCcourse-delete"
          title="刪除"
          onClick={handleShow}
        >
          <i className="far fa-times-circle"></i>
        </div>
      </div>
      <Modal
        show={isVidShow}
        onHide={handleIsVidClose}
        centered
      >
        <Modal.Body
          style={{
            'padding-left': '1rem',
            'padding-right': '1rem',
            'padding-bottom': '4rem',
          }}
        >
          <Modal.Title>影片資訊</Modal.Title>
          <ReactPlayer
            ref={playerRef}
            className="playerBG player"
            url={`${API_HOST}/video/${video_link}`}
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
        </Modal.Body>
      </Modal>
      <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>影片資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={FormSubmit}>
            <input
              name="video_name"
              className="col-12 allInputs bgt"
              placeholder="請輸入影片標題 "
              value={nameChange}
              onChange={(e) => {
                setNameChange(e.target.value)
              }}
            />
            <button
              type="submit"
              className="btn btn-secondary mx-auto"
              onClick={status}
            >
              更改名稱
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>刪除影片</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title text-center my-4"
            id="exampleModalLabel"
          >
            確定要刪除影片?
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={remove}
            onMouseUp={deleteVideo}
            onTouchEnd={deleteVideo}
            onTouchStart={deleteVideo}
          >
            <span>是</span>
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleClose}
          >
            <span>否</span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TcVideoCard
