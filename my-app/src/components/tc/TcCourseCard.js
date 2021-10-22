import React from 'react'

function TcCourseCard(props) {
  const {
    sid,
    teacher_sid,
    course_category,
    course_name,
    course_img,
    course_price,
    course_data,
    hours,
    course_introduction,
    created_at,
  } = props
  return (
    <>
      <div class="TCcourse-card col-12">
        <div class="TCcourse-img">
          <img src="../images/course/日文課程.jpeg" />
        </div>
        <div class="TCcourse-info">
          <div class="TCcourse-title">{course_name}</div>
          <div class="TCcourse-info-right">
            <div class="TCcourse-detail">
              <span>課程種類：</span> {course_category}
            </div>
            <div class="TCcourse-detail">
              <span>上架日期：</span> {course_data}
            </div>
            <div class="TCcourse-detail">
              <span>課程長度：</span> {hours}
            </div>
          </div>
        </div>
        <div
          class="TCcourse-delete"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i class="far fa-times-circle"></i>
        </div>
      </div>
    </>
  )
}

export default TcCourseCard
