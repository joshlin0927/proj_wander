import React from 'react'
import { IMG_PATH } from '../../config'

function CalendarCourseItem(props) {
  const { name, courseimg, teacher } = props
  return (
    <>
      <div class="calcourseitem">
        <img
          src={`${IMG_PATH}/ef0496d7-dd1f-454b-9c5d-74af84718c48.jpg`}
          alt=""
        />
        <div class="coursename">{name}</div>
        <span class="teachername"> {teacher} </span>
      </div>
    </>
  )
}

export default CalendarCourseItem
