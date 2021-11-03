import React, { useState, useEffect } from 'react'
//課程詳細頁(有鎖頭)
import axios from 'axios'
import { IMG_PATH } from '../../config'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { devUrl } from '../../config'
import { Modal } from 'react-bootstrap'
import { CsCourse_EDIT, CsCourse_Cover } from '../../config'
// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

// import CoursedeList from './CoursedeList'

function CsCoursede(props) {
  const [show, setShow] = useState(false)
  // const token = localStorage.getItem('token')
  // const member = localStorage.getItem('member')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let [imgSrc, setImgSrc] = useState('')

  // const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  // const [displayCourse, setDisplayCourse] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  // const [RemoveCourse, setRemoveCourse] = useState()
  // const [searchWord, setSearchWord] = useState('')

  // const doUpload = async () => {
  //   const r = await axios.post(
  //     `${CsCourse_Cover}?sid=${fields.sid}`,
  //     new FormData(document.formCover)
  //   )
  //   setImgSrc(r.data.filename)
  //   // console.log(r.data)
  // }
  // const [fields, setFields] = useState({
  //   teacher_sid: '',
  //   course_name: '',
  //   course_category: '',
  //   course_price: '',
  //   course_introduction: '',
  // })
  useEffect(() => {
    // if (!token) {
    //   history.push('/')
    // } else if (identity !== 1) {
    //   history.push('/')
    // } else {
    ;(async () => {
      let r = await axios.get(
        CsCourse_EDIT + props.location.search
      )
      setFields(r.data[0])
      setImgSrc(r.data[0].course_img)
      localStorage.setItem(
        'CourseSidForProcess',
        r.data[0].sid
      )
      console.log('edit', r.data[0])
    })()
    // }
  }, [imgSrc])

  const doUpload = async () => {
    const r = await axios.post(
      `${CsCourse_Cover}?sid=${fields.sid}`,
      new FormData(document.formCover)
    )
    setImgSrc(r.data.filename)
    // console.log(r.data)
  }

  // useEffect(() => {
  //   // if (!token) {
  //   //   history.push('/')
  //   // // } else if (identity !== 0) {
  //   // //   history.push('/')
  //   // } else {
  //   ;(async () => {
  //     let r = await axios.get(
  //       // `${ArtMessage_LIST}`
  //       `${CsCourse_EDIT}`
  //     )
  //     //下方原本的
  //     // let r = await axios.get(
  //     //   // `${ArtMessage_LIST}`
  //     //   `${CsCourses_LIST}?Sid=${teacherSid}`
  //     // )

  //     // let c = await axios.get(
  //     //   `${ArtMessage_LIST}?Sid=${teacherSid}`
  //     // )

  //     // setTcCourses(r.data.rows)

  //     // setDisplayCourse(r.data.rows)

  //     if (r.status === 200) {
  //       setTcCourses(r.data.rows)

  //       setDisplayCourse(r.data.rows)
  //     }
  //     // console.log('r.data.rows', r.data.rows)
  //   })()
  //   // }
  //   // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面
  // }, [])

  const [fields, setFields] = useState({
    teacher_sid: '',
    course_name: '',
    course_category: '',
    course_price: '',
    course_introduction: '',
  })
  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝新物件
    // 2. 在拷貝的新物件上處理
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }
    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

  return (
    <>
      <div className="container mainContent">
        {/* breadcrumb */}
        <div className="row">
          <MultiLevelBreadCrumb />
          {/* <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCprofile">
              Profile
            </span>
          </div> */}
          <div className="video">
            <div className="embed-responsive embed-responsive-16by9">
              {/* <video class="video-fluid z-depth-1" autoplay loop controls muted> (有muted就是自動播放) */}

              {/* <video
                class="video-fluid z-depth-1"
                autoplay
                loop
                controls
              >
                <source
                  src="../images/img/Amber 生活日文課， 28 單元開啟自學之旅 - 線上教學課程 - Hahow 好學校.mp4"
                  type="video/mp4"
                />
              </video> */}
              {/* <div className="">
                {' '}
                <img src="" />
              </div>

              <div className="dsds">
                <span
                  className="fas fa-lock lock"
                  style={{
                    opacity: '0.5',
                    fontSize: '145px',
                  }}
                ></span>
                <span>付費課程</span>
              </div> */}

              {/* 上方是版本二(本機版本可用內部資料) */}
              {/* 下方是直接連網路ex:youtube */}
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/v64KOxKVLVg"
                allowfullscreen
              ></iframe>
            </div>
            <div className="op">
              <nav
                className="sh-sidebar col-2"
                style={{ marginTop: '16px' }}
              >
                <ul className="nav-list  ">
                  <li
                    className="sh-nav-item active  shadow-sm p-3 mb-2 bg-body rounded "
                    style={{ backgroundColor: '#065f8e' }}
                  >
                    <a 
                    href=""
                    className="list-content flex">
                      <span
                        className="item flex"
                        style={{
                          color: 'rgb(255, 255, 255)',
                          marginRight: '10px',
                        }}
                      >
                        自我介紹
                      </span>
                      <div className="">
                        <span
                          style={{ marginRight: '10px' }}
                        >
                          02:33
                        </span>
                      </div>
                      <span
                        className="fas"
                        style={{ marginRight: '20px' }}
                      ></span>
                    </a>
                  </li>

                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                    <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                      <a
                        href=""
                        className="list-content flex"
                      >
                        <span
                          className="item flex"
                          style={{ marginRight: '10px' }}
                        >
                          日本高階商
                        </span>
                        <div
                          className=""
                          style={{ marginRight: '10px' }}
                        >
                          <span> 02:33</span>
                        </div>
                        <span
                          className="fas fa-lock"
                          style={{ marginRight: '10px' }}
                        ></span>
                      </a>
                    </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                    <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                      <a
                        href=""
                        className="list-content flex"
                      >
                        <span
                          className="item flex"
                          style={{ marginRight: '10px' }}
                        >
                          日本高階商
                        </span>
                        <div
                          className=""
                          style={{ marginRight: '10px' }}
                        >
                          <span> 02:33</span>
                        </div>
                        <span
                          className="fas fa-lock"
                          style={{ marginRight: '10px' }}
                        ></span>
                      </a>
                    </li>
                  </Link>
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                    <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                      <a
                        href=""
                        className="list-content flex"
                      >
                        <span
                          className="item flex"
                          style={{ marginRight: '10px' }}
                        >
                          日本高階商
                        </span>
                        <div
                          className=""
                          style={{ marginRight: '10px' }}
                        >
                          <span> 02:33</span>
                        </div>
                        <span
                          className="fas fa-lock"
                          style={{ marginRight: '10px' }}
                        ></span>
                      </a>
                    </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                    <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                      <a
                        href=""
                        className="list-content flex"
                      >
                        <span
                          className="item flex"
                          style={{ marginRight: '10px' }}
                        >
                          日本高階商
                        </span>
                        <div
                          className=""
                          style={{ marginRight: '10px' }}
                        >
                          <span> 02:33</span>
                        </div>
                        <span
                          className="fas fa-lock"
                          style={{ marginRight: '10px' }}
                        ></span>
                      </a>
                    </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                    <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                      <a
                        href=""
                        className="list-content flex"
                      >
                        <span
                          className="item flex"
                          style={{ marginRight: '10px' }}
                        >
                          日本高階商
                        </span>
                        <div
                          className=""
                          style={{ marginRight: '10px' }}
                        >
                          <span> 02:33</span>
                        </div>
                        <span
                          className="fas fa-lock"
                          style={{ marginRight: '10px' }}
                        ></span>
                      </a>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
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
              <nav
                className="sh-sidebarrwd col-2 side"
                style={{ marginTop: '16px' }}
              >
                <ul className="nav-list  ">
                  <li
                    className="sh-nav-item active  shadow-sm p-3 mb-2 bg-body rounded"
                    style={{
                      backgroundColor: '#065f8e',
                    }}
                  >
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{
                          color: 'rgb(255, 255, 255)',
                          marginRight: '10px',
                        }}
                      >
                        自我介紹
                      </span>

                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas "
                        style={{ marginRight: '20px' }}
                      ></span>
                    </a>
                  </li>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                  <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                    <Link
                    className=""
                    to={`/Course/CsCoursedesNot/?courseSid=${fields.sid}`}
                  >
                  <li className="sh-nav-item shadow-sm p-3 mb-2 bg-body rounded">
                    <a
                      href=""
                      className="list-content flex"
                    >
                      <span
                        className="item flex"
                        style={{ marginRight: '10px' }}
                      >
                        日本高階商
                      </span>
                      <div
                        className=""
                        style={{ marginRight: '10px' }}
                      >
                        <span> 02:33</span>
                      </div>
                      <span
                        className="fas fa-lock"
                        style={{ marginRight: '10px' }}
                      ></span>
                    </a>
                  </li>
                  </Link>
                </ul>
              </nav>
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
              <h4 className="fas fa-money-bill-alt">
                {fields.course_price} NTD
              </h4>
            </button>
            <button
              className="btn btn-outline-b btn-b "
              style={{
                width: '230px',
                marginRight: '10px',
                marginTop: '10px',
                marginLeft: '10px',
              }}
            >
              加入購物車
            </button>
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
              <h4 className="fas fa-money-bill-alt">
                {fields.course_price}NTD
              </h4>
            </button>
            <button
              className="btn btn-outline-b btn-b "
              style={{ width: '230px', marginTop: '24px' }}
            >
              加入購物車
            </button>
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
              class="fsdfds"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px',
                alignItems: 'center',
                marginLeft: '30px',
              }}
            >
              <img
                src={`${IMG_PATH}/images/index/01.jpg`}
                alt=""
                style={{
                  width: '120px',
                  borderRadius: '50%',
                }}
              />
              <h2>Ann</h2>
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
            <h5> 國籍：台灣</h5>
            <h5>專長：英語、西班牙文</h5>
            <h5>
              課程評價：
              <h5
                className="fas fa-star"
                style={{ color: 'black', fontSize: '18px' }}
              >
                4
              </h5>
            </h5>
            <h5>教學經驗：5年</h5>
          </div>
        </div>

        {/* 留言板 */}
        <div className="sh-opp mx-auto shadow-sm p-3 mb-2 bg-body rounded">
          <div className="dis">
            <h1
              style={{
                marginTop: '20px',
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
                <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
                  <span
                    className=""
                    style={{ marginRight: '10px' }}
                  >
                    <div
                      className="fsdfds"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                      }}
                    >
                      <span> Ann</span>
                      <img
                        src={`${devUrl}/images/index/01.jpg`}
                        alt=""
                        style={{
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </span>
                  <span
                    className="item flex"
                    style={{ marginRight: '10px' }}
                  >
                    這是不可避免的。考爾德說過，僅次於選擇益友，就是選擇好書。想必各位已經看出了其中的端倪。面對如此難題，我們必須設想周
                  </span>
                  <span
                    className="fas fa-star"
                    style={{
                      marginRight: '10px',
                      color: 'black',
                    }}
                  >
                    5
                  </span>
                  <span className="">
                    {/* <span> 1分鐘</span> */}
                  </span>
                </li>
                <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
                  <span
                    className=""
                    style={{ marginRight: '10px' }}
                  >
                    <div
                      className="fsdfds"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                      }}
                    >
                      <span> Ann</span>
                      <img
                        src={`${devUrl}/images/index/01.jpg`}
                        alt=""
                        style={{
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </span>
                  <span
                    className="item flex"
                    style={{ marginRight: '10px' }}
                  >
                    這是不可避免的。考爾德說過，僅次於選擇益友，就是選擇好書。想必各位已經看出了其中的端倪。面對如此難題，我們必須設想周
                  </span>
                  <span
                    className="fas fa-star"
                    style={{
                      marginRight: '10px',
                      color: 'black',
                    }}
                  >
                    5
                  </span>
                  <span className="">
                    {/* <span> 1分鐘</span> */}
                  </span>
                </li>
                <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
                  <span
                    className=""
                    style={{ marginRight: '10px' }}
                  >
                    <div
                      className="fsdfds"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                      }}
                    >
                      <span> Ann</span>
                      <img
                        src={`${devUrl}/images/index/01.jpg`}
                        alt=""
                        style={{
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </span>
                  <span
                    className="item flex"
                    style={{ marginRight: '10px' }}
                  >
                    這是不可避免的。考爾德說過，僅次於選擇益友，就是選擇好書。想必各位已經看出了其中的端倪。面對如此難題，我們必須設想周
                  </span>
                  <span
                    className="fas fa-star"
                    style={{
                      marginRight: '10px',
                      color: 'black',
                    }}
                  >
                    5
                  </span>
                  <span className="">
                    {/* <span> 1分鐘</span> */}
                  </span>
                </li>
                <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
                  <span
                    className=""
                    style={{ marginRight: '10px' }}
                  >
                    <div
                      className="fsdfds"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                      }}
                    >
                      <span> Ann</span>
                      <img
                        src={`${devUrl}/images/index/01.jpg`}
                        alt=""
                        style={{
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </span>
                  <span
                    className="item flex"
                    style={{ marginRight: '10px' }}
                  >
                    這是不可避免的。考爾德說過，僅次於選擇益友，就是選擇好書。想必各位已經看出了其中的端倪。面對如此難題，我們必須設想周
                  </span>
                  <span
                    className="fas fa-star"
                    style={{
                      marginRight: '10px',
                      color: 'black',
                    }}
                  >
                    5
                  </span>
                  <span className="">
                    {/* <span> 1分鐘</span> */}
                  </span>
                </li>
                <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
                  <span
                    className=""
                    style={{ marginRight: '10px' }}
                  >
                    <div
                      className="fsdfds"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px',
                      }}
                    >
                      <span> Ann</span>
                      <img
                        src={`${devUrl}/images/index/01.jpg`}
                        alt=""
                        style={{
                          width: '50px',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  </span>
                  <span
                    className="item flex"
                    style={{ marginRight: '10px' }}
                  >
                    這是不可避免的。考爾德說過，僅次於選擇益友，就是選擇好書。想必各位已經看出了其中的端倪。面對如此難題，我們必須設想周
                  </span>
                  <span
                    className="fas fa-star"
                    style={{
                      marginRight: '10px',
                      color: 'black',
                    }}
                  >
                    5
                  </span>
                  <span className="">
                    {/* <span> 1分鐘</span> */}
                  </span>
                </li>
              </ul>
              <div className="fasf">
                {' '}
                <button
                  className="btn btn-outline-y row mx-auto one-btn btn-b  "
                  style={{ width: '235px' }}
                >
                  More...
                </button>
              </div>
            </nav>
          </div>
          <div
            className="bitrt"
            style={{ width: '200px', marginRight: '10px' }}
          ></div>
        </div>

        {/* 留言板 */}
        {/* <TcSideBar /> */}
        {/* form */}
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(CsCoursede)
