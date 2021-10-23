import React from 'react'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'
export default function CourseItemArrow() {
  return (
    <div>
      <div class="calendarcourseitem">
        <div class="leftarr">
          <Link to="">
            <i class="fal fa-arrow-left"> </i>
          </Link>
        </div>
        <img
          src={`${devUrl}/images/pic/課程圖片/歐洲運動賽事.jpeg`}
          alt=""
        />
        <div class="coursename">課程名稱：填上課程名稱</div>
        <span class="teachername">Thoms Lillard</span>
        <div class="rightarr">
          <Link to="">
            <i class="fal fa-arrow-right"> </i>
          </Link>
        </div>
      </div>
    </div>
  )
}
