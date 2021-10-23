import React from 'react'

function TcHasNoCourse(props) {
  return (
    <>
      <div className="TCcourse-card col-12">
        <div className="TCcourse-info">
          <div className="TCcourse-title"></div>
          <div className="TCcourse-info-right">
            <div className="TCcourse-detail">
              <span>課程種類：</span>
            </div>
            <div className="TCcourse-detail">
              <span>上架日期：</span>
            </div>
            <div className="TCcourse-detail">
              <span>課程長度：</span>
            </div>
          </div>
        </div>
        <div
          className="TCcourse-delete"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="far fa-times-circle"></i>
        </div>
      </div>
    </>
  )
}

export default TcHasNoCourse
