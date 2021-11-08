import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IMG_PATH, TcCourse_DELETE } from '../../config'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

function TcCourseCard(props) {
  const {
    sid,
    course_category,
    course_name,
    course_img,
    course_data,
    hours,
    remove,
  } = props

  //時間換算
  const videoTime = moment
    .duration(hours, 'seconds')
    .format('hh:mm:ss')

  // 刪除課程
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const deleteCourse = async () => {
    let r = await axios.delete(TcCourse_DELETE + sid)
    if (r) {
      handleClose()
    }
  }

  // const [courseSid, setCourseSid] = useState('')

  const ChooseCourse = () => {
    sessionStorage.setItem('courseSid', sid)
  }

  return (
    <>
      <div
        className="TCcourse-card col-12"
        onClick={ChooseCourse}
      >
        <div
          className="TCcourse-img"
          to="/TCindex/TcCourseEdit/"
        >
          <img
            src={
              course_img
                ? `${IMG_PATH}/course/img/${course_img}`
                : `${IMG_PATH}/course/Course_Preset.jpg`
            }
            alt=""
          />
        </div>
        <Link
          className="TCcourse-info"
          to={`/TCindex/TcCourseEdit/?courseSid=${sid}`}
        >
          <div className="TCcourse-title">
            <span>{course_name}</span>
          </div>
          <div className="TCcourse-info-right">
            <div className="TCcourse-detail">
              <span>課程種類：</span> {course_category}
            </div>
            <div className="TCcourse-detail">
              <span>上傳日期：</span> {course_data}
            </div>
            <div className="TCcourse-detail">
              <span>課程長度：</span> {videoTime}
            </div>
          </div>
        </Link>
        <div
          className="TCcourse-delete"
          title="刪除"
          onClick={handleShow}
        >
          <i className="far fa-times-circle"></i>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>刪除課程</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title text-center my-4"
            id="exampleModalLabel"
          >
            確定要刪除課程?
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={remove}
            onMouseUp={deleteCourse}
            onTouchEnd={deleteCourse}
            onTouchStart={deleteCourse}
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

export default TcCourseCard
