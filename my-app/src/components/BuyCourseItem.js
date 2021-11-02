import React from 'react'

import { IMG_PATH } from '../config'

function BuyCourseItem(props) {
  const { CourseCover, CourseName, TeacherName, Price } =
    props

  return (
    <>
      <div class="BuyCourseItem">
        <img
          src={`${IMG_PATH}/${CourseCover}`}
          class="BuyCourseImg"
          alt=""
        />
        <div class="coursename">{CourseName}</div>
        <span class="teachername">{TeacherName}</span>
        <div class="CoursePrice">
          <span id="number">{Price}</span>
          <span id="unit"> TWD</span>
        </div>
      </div>
    </>
  )
}

export default BuyCourseItem
