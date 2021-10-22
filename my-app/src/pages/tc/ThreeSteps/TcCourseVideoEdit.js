import React from 'react'
import { Link } from 'react-router-dom'

// components
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcSearchBar from '../../../components/tc/TcSearchBar'
import TcCourseCard from '../../../components/tc/TcCourseCard'
import MyPagination from '../../../components/MyPagination'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'

function TcCourseVideoEdit() {
  return (
    <>
      {' '}
      <div class="container mainContent">
        <div class="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form class="TCform col-12 col-md-10 px-4">
            <div class="TCform-head ml-1 p-0">
              <a href="">
                <i class="fas fa-chevron-left TCback-btn"></i>
              </a>
              <div class="TCform-title mr-auto">
                課程內容管理
              </div>
              {/* desktop search bar */}
              <div class="TCsearch ml-0">
                <TcSearchBar />
              </div>
              <div class="d-flex justify-content-end">
                <Link>
                  <button class="btn TCbtn-sm-w-switch btn-primary">
                    <span>儲存</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* mobile search bar */}
            <div class="TCsearch-mobile">
              <TcSearchBar />
            </div>
            {/* TCcourse card label */}
            <div class="TCcourseLabel col-12">
              <div class="Labelitem">影片截圖</div>
              <div class="Labelitem">影片名稱</div>
              <div class="TCcourseLabel-right">
                <div class="Labelitem">上傳日期</div>
                <div class="Labelitem">影片長度</div>
                <div class="TCcourse-delete">
                  <i class="far fa-times-circle opacity-0"></i>
                </div>
              </div>
            </div>
            {/* course cards */}
            <TcCourseCard />
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
    </>
  )
}

export default TcCourseVideoEdit
