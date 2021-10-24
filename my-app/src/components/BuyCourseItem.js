import React from 'react'

import { devUrl } from '../config'

function BuyCourseItem(props) {
  const { CourseName, TeacherName, Stars, Price } = props

  return (
    <>
      <div class="BuyCourseItem">
        <img
          src={`${devUrl}/images/course/商用英文.jpeg`}
          class="BuyCourseImg"
          alt=""
        />
        <div class="coursename">{CourseName}</div>
        <span class="teachername">{TeacherName}</span>
        <div class="stars">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="price">
          <span id="number">{Price}</span>
          <span id="unit">TWD</span>
        </div>
      </div>
    </>
  )
}

export default BuyCourseItem
