import React from 'react'
import { Link } from 'react-router-dom'

// components
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcCourseCard from '../../../components/tc/TcCourseCard'
import MyPagination from '../../../components/MyPagination'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'

function TcCourseVideoUpload() {
  return (
    <>
      <div class="container mainContent">
        <div class="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form class="TCform col-12 col-md-10">
            <div class="TCform-content">
              <div class="TCform-head">
                <Link to="">
                  <i class="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div class="TCform-title">課程內容上傳</div>
                <div class="d-flex justify-content-end">
                  <button class="btn TCbtn-sm-w-switch btn-primary">
                    儲存
                  </button>
                </div>
              </div>
              <div class="TCvideo-drop-zone">
                <i class="fas fa-upload"></i>
                <p>將你要上傳的影片檔案拖曳到這裡</p>
                <label>
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>
                <button class="btn btn-secondary">
                  選擇檔案
                </button>
              </div>
            </div>
          </form>
          {/* course cards */}
          <TcCourseCard />
          <MyPagination />
        </div>
      </div>
      <TcBgDecorationThreeSteps />
    </>
  )
}

export default TcCourseVideoUpload
