import React from 'react'

function TcCourseCard(props) {
  const {} = props
  return (
    <>
      <div class="TCcourse-card col-12">
        <div class="TCcourse-img">
          <img src="../images/course/日文課程.jpeg" />
        </div>
        <div class="TCcourse-info">
          <div class="TCcourse-title">
            Thomas老師：從零開始的日文基礎課程3
          </div>
          <div class="TCcourse-info-right">
            <div class="TCcourse-detail">
              <span>課程種類：</span> 日文
            </div>
            <div class="TCcourse-detail">
              <span>上架日期：</span> 2021/09/08
            </div>
            <div class="TCcourse-detail">
              <span>課程長度：</span> 01:02:30
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
