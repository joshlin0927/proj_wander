import React from 'react'
import { IMG_PATH } from '../../config'

export default function CourseItem(props) {
  const { name, courseimg, teacher } = props
  return (
    <>
      <div class="courseitem">
        <img
          src={`${IMG_PATH}/86be747d-42fc-41ed-a771-d80cf697cea1.jpg`}
          alt=""
        />
        <div class="coursename">{name}</div>
        <span class="teachername"> {teacher} </span>
      </div>
    </>
  )
}
