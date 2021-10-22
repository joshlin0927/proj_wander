import React from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcCourseCard from '../../../components/tc/TcCourseCard'
import MyPagination from '../../../components/MyPagination'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseVideoUpload() {
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form className="TCform col-12 col-md-10">
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">課程內容上傳</div>
                <div className="d-flex justify-content-end">
                  <button className="btn TCbtn-sm-w-switch btn-primary">
                    儲存
                  </button>
                </div>
              </div>
              <div className="TCvideo-drop-zone">
                <i className="fas fa-upload"></i>
                <p>將你要上傳的影片檔案拖曳到這裡</p>
                <label>
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>
                <button className="btn btn-secondary">
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
      <Footer />
    </>
  )
}

export default TcCourseVideoUpload
