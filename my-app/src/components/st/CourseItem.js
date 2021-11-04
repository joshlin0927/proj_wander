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
      <Link
        class="courseitem mr-md-2"
        onClick={getSid}
        to="/StIndex/StClassroom"
      >
        <img
          src={`${IMG_PATH}/ef0496d7-dd1f-454b-9c5d-74af84718c48.jpg`}
          alt=""
        />
        <div class="coursename">{name}</div>
        <span class="teachername"> {teacher} </span>
      </Link>
    </>
  )
}
