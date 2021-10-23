import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { devUrl } from '../../config'

function TcCourseCard(props) {
  const {
    sid,
    teacher_sid,
    course_category,
    course_name,
    course_img,
    course_price,
    course_data,
    hours,
    course_introduction,
    created_at,
  } = props
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="TCcourse-card col-12">
        <div className="TCcourse-img">
          <img
            src={`${devUrl}/images/course/AdobeStock_339695471.jpg`}
            alt=""
          />
        </div>
        <div className="TCcourse-info">
          <div className="TCcourse-title">
            {course_name}
          </div>
          <div className="TCcourse-info-right">
            <div className="TCcourse-detail">
              <span>課程種類：</span> {course_category}
            </div>
            <div className="TCcourse-detail">
              <span>上架日期：</span> {course_data}
            </div>
            <div className="TCcourse-detail">
              <span>課程長度：</span> {hours}
            </div>
          </div>
        </div>
        <div
          className="TCcourse-delete"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="far fa-times-circle"></i>
        </div>
      </div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h5
              className="modal-title d-flex justify-content-center my-5"
              id="exampleModalLabel"
            >
              是否要刪除課程?
            </h5>
            <div className="d-flex justify-content-center mb-5">
              <button
                type="button"
                className="btn btn-primary mx-2"
              >
                <span>是</span>
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                data-dismiss="modal"
              >
                <span>否</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TcCourseCard
