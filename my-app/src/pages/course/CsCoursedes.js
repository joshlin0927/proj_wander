import React, { useState, useEffect, useRef } from 'react'
//課程詳細頁(有鎖頭)
import axios from 'axios'
import { withRouter, useHistory } from 'react-router'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import {
  CsCourse_EDIT,
  Cart_API,
  API_HOST,
  IMG_PATH,
  CsMessage_LIST,
} from '../../config'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

// components
import PlayerControls from '../../components/PlayerControls'
import PcCoursePlaylist from '../../components/PcCoursePlaylist'
import PcCoursePlaylistCard from '../../components/PcCoursePlaylistCard'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'
import CsMessageList from './CsMessageList'

// import CoursedeList from './CoursedeList'

function CsCoursede(props) {
  const { setNavCartQty } = props
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)
  const [show, setShow] = useState(false)
  const [hasBought, setHasBought] = useState(false)
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''
  const [fields, setFields] = useState({})
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()

  // let [fimgSrc, setImgSrc] = useState('')
  useEffect(() => {
    // if (!token) {
    //   history.push('/')
    // } else if (identity !== 0) {
    //   history.push('/')
    // } else {
    ;(async () => {
      let r = await axios.get(
        // `${ArtMessage_LIST}`
        `${CsMessage_LIST}`
      )
      if (r.status === 200) {
        // setArtDisplayCourse(r.data.result[0])

        setTcCourses(r.data.rows)

        setDisplayCourse(r.data.rows)
      }
    })()
    // }
  }, [])

  function changeAddCartBtn() {
    document
      .querySelectorAll('.csAddToCart')
      .forEach((v, i) => {
        v.classList.remove('btn-outline-b')
        v.classList.remove('btn-b')
        v.classList.add('changeAddCartBtn')
        v.innerText = '已加入購物車'
      })
  }

  useEffect(() => {
    ;(async () => {
      if (member.sid) {
        let o = await axios.get(
          `${Cart_API}/checkone${props.location.search}&member_sid=${member.sid}`
        )
        if (o.data) {
          changeAddCartBtn()
        } else {
          console.log('不在購物車')
        }
      }
      let r = await axios.get(
        CsCourse_EDIT + props.location.search
      )
      setFields(r.data[0])
      console.log('edit', r.data[0])
      let h = await axios.get(
        `http://localhost:3001/stCourse/hasBoughtItem${props.location.search}&member_sid=${member.sid}`
      )
      if (h.data.success) {
        setHasBought(true)
      }
    })()
  }, [props.location.search, member.sid])

  // 新增購物車資料
  const addCart = async (courseID) => {
    const r = await fetch(`${Cart_API}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_sid: member.sid,
        product_sid: courseID,
      }),
    })
    const obj = await r.json()
    if (obj.success) {
      console.log('新增成功：', obj)
      changeAddCartBtn()
    } else {
      console.log(obj.error)
    }
    // 新增購物車後的nav動畫
    let n = await axios.get(
      `${Cart_API}/list?member_sid=${member.sid}`
    )
    if (n.data.success) {
      setNavCartQty(n.data.result.length)
    } else {
      setNavCartQty(0)
    }
    const qty = document.querySelector('.navCartQty')
    const icon = document.querySelector('.nav_cart_icon')
    setTimeout(() => {
      qty.classList.add('move')
      icon.classList.add('move')
    }, 20)
    setTimeout(() => {
      qty.classList.remove('move')
      icon.classList.remove('move')
    }, 2500)
  }

  // -----------------以下為播放器---------------//

  const [first, setFirst] = useState('')
  const history = useHistory()

  // 這個課程的所有影片
  const [videos, setVideos] = useState('')

  // 單一的第一支影片
  const [singleVid, setSingleVid] = useState({})

  // 判斷購買狀態
  const [showStatus, setShowStatus] = useState('')

  useEffect(() => {
    ;(async () => {
      let r = await axios.post(
        `http://localhost:3001/stcourse/boughtCourse`,
        {
          courseSid: props.location.search.slice(11),
          member_sid: member.sid,
        }
      )
      console.log('object', r.data)
      if (r.data.length !== 0) {
        setFirst(
          `${API_HOST}/video/${r.data[0].video_link}`
        )
        setActive(r.data[0].sid)
        setVideos(r.data)
      } else {
        let sec = await axios.post(
          `http://localhost:3001/stcourse/buyCourse`,
          {
            courseSid: props.location.search.slice(11),
          }
        )
        setFirst(
          `${API_HOST}/video/${sec.data[0].video_link}`
        )
        setActive(sec.data[0].sid)
        setVideos(sec.data)
        setShowStatus(false)
        setSingleVid(sec.data[0])
      }
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
    playing: false,
    muted: false,
    volume: 1,
    played: 0,
    seeking: '',
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
      <div className="container mainContent">
        {/* breadcrumb */}
        <MultiLevelBreadCrumb />
        <Nav.Link
          as={NavLink}
          to="/Course/CsCourse"
          className="btn btn-border-only-no-h col-2"
        >
          <i className="fas fa-chevron-left"></i>
          <span>返回</span>
        </Nav.Link>
        <div className="row">
          <div
            ref={playerContainerRef}
            className="player col-12 col-md-9 mb-5 p-0"
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
            {showStatus === false ? (
              <PcCoursePlaylistCard
                sid={singleVid.sid}
                video_name={singleVid.video_name}
                duration1={singleVid.duration}
                value={singleVid.sid}
                order_status={singleVid.order_status}
                member_sid={singleVid.member_sid}
                active={active}
                setActive={setActive}
              />
            ) : (
              ''
            )}
            <PcCoursePlaylist
              videos={videos}
              active={active}
              setActive={setActive}
              showStatus={showStatus}
            />
          </div>
        </div>
        {/* 手機板單元 */}
        <div className="container containe">
          <button
            variant="primary"
            className="btn btn-outline-b"
            onClick={handleShow}
            style={{ width: '230px' }}
          >
            課程單元一覽
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>課程單元一覽</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="playlist-m">
                <PcCoursePlaylist
                  videos={videos}
                  active={active}
                  setActive={setActive}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </button>
              {/* <button variant="primary" onClick={handleClose}>
              Save Changes
            </button> */}
            </Modal.Footer>
          </Modal>
        </div>
        {/* 手機板單元 */}
        {/* 桌機標頭 */}
        {/* <div className=" container courr">
          {' '}
          {TcCourses.length > 0 ? (
            <CoursedeList
              displayCourse={displayCourse}
              setDisplayCourse={setDisplayCourse}
              RemoveCourse={RemoveCourse}
              setRemoveCourse={setRemoveCourse}
            />
          ) : null}
        </div> */}

        <div className=" container courr">
          <div className="cour">
            <div
              className="coura"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '800px',
              }}
            >
              <h1 style={{ fontFamily: 'cwTeXKai' }}>
                {fields.course_name}
              </h1>
              {/* <h4>觀看次數:121315</h4> */}
            </div>
            <div
              className="courb"
              style={{ alignItems: 'center' }}
            >
              <h6
                style={{
                  fontFamily: 'cwTeXKai',
                  fontWeight: 'bold',
                  marginTop: '10px',
                }}
              >
                {fields.course_introduction}
              </h6>
            </div>
          </div>
          <div className="courc" style={{ width: '230px' }}>
            <button
              className=" btn btn-outline-b btn-b "
              style={{
                width: '230px',
                marginRight: '10px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              <h4 className="fas fa-money-bill-alt m-0">
                &nbsp;{fields.course_price} NTD
              </h4>
            </button>
            {hasBought ? (
              <div className="hasBoughtBtn">
                您已購買過此課程
              </div>
            ) : (
              <button
                className="btn btn-outline-b btn-b csAddToCart"
                style={{
                  width: '230px',
                  marginRight: '10px',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
                onClick={() => {
                  const id = new URLSearchParams(
                    props.location.search
                  )
                  if (member.identity === 0) {
                    addCart(id.get('courseSid'))
                  } else {
                    handleStopModalShow()
                  }
                }}
              >
                加入購物車
              </button>
            )}
          </div>
        </div>
        {/* 桌機標頭 */}
        {/*  手機標頭*/}
        <div className="corb-ph">
          <div className="ann">
            <h1>{fields.course_name}</h1>
          </div>
          <div className="ann">
            <h5>{fields.course_introduction}</h5>
          </div>
          <div
            className="courc mx-auto"
            style={{
              width: '230px',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <button
              className=" btn btn-outline-b btn-b "
              style={{ width: '230px', marginTop: '24px' }}
            >
              <h4 className="fas fa-money-bill-alt m-0">
                &nbsp;{fields.course_price}NTD
              </h4>
            </button>
            {hasBought ? (
              <div className="hasBoughtBtn">
                您已購買過此課程
              </div>
            ) : (
              <button
                className="btn btn-outline-b btn-b csAddToCart"
                style={{
                  width: '230px',
                  marginTop: '24px',
                }}
                onClick={() => {
                  const id = new URLSearchParams(
                    props.location.search
                  )
                  if (member.identity === 0) {
                    addCart(id.get('courseSid'))
                  } else {
                    handleStopModalShow()
                  }
                }}
              >
                加入購物車
              </button>
            )}
          </div>
        </div>
        {/*  手機標頭*/}
        {/*  */}
        <div
          className="AAAA"
          style={{ display: 'flex', marginTop: '40px' }}
        >
          <div className="Ann">
            <div
              className="fsdfds"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px',
                alignItems: 'center',
                marginLeft: '30px',
              }}
            >
              <img
                src={`${IMG_PATH}/${fields.avatar}`}
                alt=""
                style={{
                  width: '100px',
                  borderRadius: '50%',
                  height: '100px',
                }}
              />
              <h2>{fields.nickname}</h2>
            </div>
          </div>
          <div
            className="ann"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '20px',
            }}
          >
            <h5> 國籍：{fields.nationality}</h5>
            <h5>專長：{fields.language}</h5>
            <h5>
              課程評價：
              <div
                className="fas fa-star"
                style={{ color: 'black', fontSize: '18px' }}
              >
                4
              </div>
            </h5>
            <h5>教學經驗：5年</h5>
          </div>
        </div>

        {/* 留言板 */}
        <div
          className="sh-opp mx-auto shadow-sm p-3 mb-2 bg-body rounded "
          style={{ marginBottomL: '30px' }}
        >
          <div className="dis">
            {' '}
            <h1
              style={{
                marginTop: '30px',
                marginLeft: '10px',
                width: '200px',
              }}
            >
              留言板
            </h1>
          </div>
          <div
            className="fdsfdsf"
            style={{ display: 'flex' }}
          >
            <nav className="sh-sidebars ">
              <ul className="nav-list  mx-auto ul-opp ">
                {/* {data.rows
                  ? data.rows.map((v, index) => {
                      return (
                        <TcCourseCard

                    key={v.sid}
                    ar_sid={v.ar_sid}
                    st_sid={v.st_sid}
                    st_pictuer={v.st_pictuer}
                    messenger={v.messenger}
                    great={v.great}
                    created_date={v.created_date}
                        />
                      )
                    })
                  : null} */}
                {TcCourses.length > 0 ? (
                  <CsMessageList
                    displayCourse={displayCourse}
                    setDisplayCourse={setDisplayCourse}
                    RemoveCourse={RemoveCourse}
                    setRemoveCourse={setRemoveCourse}
                  />
                ) : null}
                {/* {data.rows.map((v, i) => {
                return (
                  <TcCourseCard
                    key={v.sid}
                    sid={v.ar_sid}
                    course_img={v.st_pictuer}
                    messenger={v.messenger}
                    course_category={v.great}
                    course_data={v.created_date}
                  />
                )
              })} */}
              </ul>
            </nav>
          </div>
          {hasBought ? (
            <Link
              to={`/Course/CsMessageADD/?courseSid=${fields.sid}`}
            >
              <button
                className="btn btn-outline-y row mx-auto one-btn btn-b "
                style={{
                  width: '200px',
                  marginRight: '10px',
                  marginTop: '30px',
                }}
              >
                我要評論
              </button>
            </Link>
          ) : (
            <div
              className="bitrt"
              style={{
                width: '200px',
                marginRight: '10px',
              }}
            ></div>
          )}
        </div>

        {/* 留言板 */}
        {/* <TcSideBar /> */}
        {/* form */}
      </div>
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
          <span>如要購買課程請先登入學生帳戶</span>
        </Modal.Body>
        <Modal.Footer>
          {member.identity === 1 ? (
            <button
              type="button"
              className="btn confirmBtn"
              onClick={handleStopModalClose}
            >
              確認
            </button>
          ) : (
            <button
              type="button"
              className="btn confirmBtn"
              onClick={() => {
                props.history.push('/Login')
              }}
            >
              前往登入
            </button>
          )}
        </Modal.Footer>
      </Modal>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(CsCoursede)
