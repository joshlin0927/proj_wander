import React from 'react'
import { IMG_PATH } from '../../config'

function TcAnalayticsCourseCard(props) {
  const {
    sid,
    course_img,
    course_name,
    course_data,
    views,
    setClick,
  } = props

  return (
    <>
      <div
        className="TCcourse-card col-12"
        onClick={() => setClick(sid)}
      >
        <div
          className="TCcourse-img"
          to="/TCindex/TcCourseEdit/"
        >
          <img
            src={`${IMG_PATH}/course/img/${course_img}`}
            alt=""
          />
        </div>
        <div className="TCcourse-info">
          <div className="TCcourse-title">
            <span>{course_name}</span>
          </div>
          <div className="TCcourse-info-right">
            <div className="TCcourse-detail">
              <span>上傳日期：</span> {course_data}
            </div>
            <div className="TCcourse-detail">
              <span>觀看次數：</span> {views}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TcAnalayticsCourseCard
