import React from 'react'
import { IMG_PATH } from '../../config'
import { Link } from 'react-router-dom'

export default function CourseItem(props) {
  const { sid, name, courseimg, teacher } = props

  const getSid = () => {
    sessionStorage.setItem('takeClass', sid)
  }

  return (
    <>
      <div className="courseitem mr-md-2" onClick={getSid}>
        <Link to="/StIndex/StClassroom">
          <img
            src={`${IMG_PATH}/course/img/${courseimg}`}
            alt=""
          />
          <div className="stalreadybuycoursename">
            {name}
          </div>
          <span className="stalreadybuyteachername">
            {' '}
            {teacher}{' '}
          </span>
        </Link>
      </div>
    </>
  )
}
