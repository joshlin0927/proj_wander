import React, { useState } from 'react'

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
    </>
  )
}

export default TcCourseCard
