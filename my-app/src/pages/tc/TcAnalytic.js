import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseCard from '../../components/tc/TcCourseCard'
import TcChart from '../../components/tc/TcChart'
import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'

function TcAnalytic() {
  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText analytics">
              Analytics
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <form className="TCform col-12 col-md-10 px-4">
            <div className="TCform-head ml-1 p-0">
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                數據分析
              </div>
              {/* desktop search bar */}
              <div className="TCsearch ml-0">
                <TcSearchBar />
              </div>
            </div>
            {/* mobile search bar */}
            <div className="TCsearch-mobile">
              <TcSearchBar />
            </div>
            {/* chart */}
            <div class="mb-5">
              <TcChart width={700} height={300} />
            </div>
            {/* TCcourse card label */}
            <div className="TCcourseLabel col-12">
              <div className="Labelitem">課程封面</div>
              <div className="Labelitem">課程名稱</div>
              <div className="TCcourseLabel-right">
                <div className="Labelitem">上架日期</div>
                <div className="Labelitem">觀看次數</div>
                <div className="TCcourse-delete">
                  <i className="far fa-times-circle opacity-0"></i>
                </div>
              </div>
            </div>
            {/* course cards */}
            <TcCourseCard />
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
    </>
  )
}

export default TcAnalytic
