import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IMG_PATH } from '../config'

function BuyCourseItem(props) {
  const {
    courseSid,
    CourseCover,
    CourseName,
    course_category,
    Price,
  } = props

  return (
    <>
      <Link
        to={`/Course/CsCoursedes/?courseSid=${courseSid}`}
        className="sh-courseitem"
      >
        <img
          src={`${IMG_PATH}/course/img/${CourseCover}`}
          alt=""
        />
        <div className="BuyCourseInfo">
          <span className="sh-coursename">
            {CourseName}
          </span>
          <span className="sh-teachername">
            {course_category}
          </span>
          <span className="co-price">{Price} NTD</span>
        </div>

        <div className="BurCourseItemMask"></div>
      </Link>
    </>
  )
}

export default withRouter(BuyCourseItem)
