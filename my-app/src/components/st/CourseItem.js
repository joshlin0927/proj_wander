import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IMG_PATH } from '../../config'

export default function CourseItem(props) {
  const { sid, name, courseimg, teacher } = props
  

  const getSid = () => {
    sessionStorage.setItem('takeClass', sid)
  }

  return (
    <>
      <div className="BuyCourseItem" onClick={getSid}>
        <Link to="/StIndex/StClassroom">
          <img
            src={`${IMG_PATH}/course/img/${courseimg}`}
            className="BuyCourseImg"
            alt=""
          />
          <div className="BuyCourseInfo">
            <div className="BCIcoursename">{name}</div>
            <span className="BCIteachername">
              {teacher}
            </span>
          </div>
          <div className="BurCourseItemMask"></div>
        </Link>
      </div>
    </>
  )
}
