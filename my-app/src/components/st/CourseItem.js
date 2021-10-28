import React from 'react'
import { devUrl, API_HOST } from '../../config'

export default function CourseItem(props) {
  const { name, courseimg, teacher } = props
  return (
    <>
      <div class="courseitem">
        <img
          src={`${API_HOST}/img/dog-puppy-on-garden-royalty-free-image-1586966191.jpg`}
          alt=""
        />
        <div class="coursename">{name}</div>
        <span class="teachername"> {teacher} </span>
      </div>
    </>
  )
}
