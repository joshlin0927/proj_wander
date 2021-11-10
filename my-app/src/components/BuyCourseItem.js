import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IMG_PATH } from '../config'

function BuyCourseItem(props) {
  const {
    courseSid,
    CourseCover,
    CourseName,
    TeacherName,
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
          <span className="BCIcoursename">
            {CourseName}
          </span>
          <span className="BCIteachername">
            {TeacherName}
          </span>
          <span className="BCICoursePrice">
            {Price} TWD
          </span>
        </div>

        <div className="BurCourseItemMask"></div>
      </Link>
    </>
  )
}

export default withRouter(BuyCourseItem)
