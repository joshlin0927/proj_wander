import React, { useState, useEffect } from 'react'
//課程詳細頁(有鎖頭)
import axios from 'axios'
import { IMG_PATH } from '../../config'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { CsMessage_LIST } from '../../config'
import { CsCourse_EDIT, Cart_API } from '../../config'
// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'
import CsMessageList from './CsMessageList'

// import CoursedeList from './CoursedeList'

function CsCoursede(props) {
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)
  const [show, setShow] = useState(false)
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
    })()
  }, [props.location.search, member.sid])

  // 新增購物車資料
  function addCart(courseID) {
    fetch(`${Cart_API}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_sid: member.sid,
        product_sid: courseID,
      }),
    })
      .then((r) => r.json())
      .then((obj) => {
        if (obj.success) {
          console.log('新增成功：', obj)
          changeAddCartBtn()
        } else {
          console.log(obj.error)
        }
      })
  }

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
          <div className="video">
            <div className="embed-responsive embed-responsive-16by9">
              {/* <video className="video-fluid z-depth-1" autoplay loop controls muted> (有muted就是自動播放) */}

              {/* <video
                className="video-fluid z-depth-1"
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
                title="fake video"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/GmRdUUVgSAA"
                allowFullScreen
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
              <h4 className="fas fa-money-bill-alt m-0">
                &nbsp;{fields.course_price} NTD
              </h4>
            </button>
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
            <button
              className="btn btn-outline-b btn-b csAddToCart"
              style={{ width: '230px', marginTop: '24px' }}
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

          {/* <Link
            to={`/Course/CsMessageADD/?courseSid=${fields.sid}`}
          > */}
          <div
            className="bitrt"
            style={{ width: '200px', marginRight: '10px' }}
          ></div>
          {/* </Link> */}
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
