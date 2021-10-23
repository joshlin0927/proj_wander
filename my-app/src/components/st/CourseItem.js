import React from 'react'
import { devUrl } from '../../config'

export default function CourseItem() {
  return (
    <>
      <div class="courseitem carousel-item active">
        <img
          src={`${devUrl}/images/pic/課程圖片/英文課程2.jpeg`}
          alt=""
        />
        <div class="coursename">
          課程名稱： 填上課程名稱
        </div>
        <span class="teachername"> Thoms Lillard </span>
      </div>
    </>
  )
}
