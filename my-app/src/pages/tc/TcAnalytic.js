import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import MyPagination from '../../components/MyPagination'
import TcChart from '../../components/tc/TcChart'

function TcAnalytic() {
  return (
    <>
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
            <input
              type="text"
              className="TCsearchbar"
              placeholder="請輸入課程名稱"
            />
            <button type="submit" className="">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {/* mobile search bar */}
        <div className="TCsearch-mobile">
          <input
            type="text"
            className="TCsearchbar"
            placeholder="請輸入課程名稱"
          />
          <button type="submit" className="">
            <i className="fas fa-search"></i>
          </button>
        </div>
        {/* chart */}
        <TcChart width={700} height={300} />
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
        <div className="TCcourse-card col-12">
          <div className="TCcourse-img"></div>
          <div className="TCcourse-info">
            <div className="TCcourse-title">
              Thomas老師：從零開始的日文基礎課程3
            </div>
            <div className="TCcourse-info-right">
              <div className="TCcourse-detail">
                <span>上架日期：</span> 2021/09/08
              </div>
              <div className="TCcourse-detail">
                <span>觀看次數：</span> 123456789
              </div>
            </div>
          </div>
          <div className="TCcourse-delete opacity-0">
            <i className="far fa-times-circle"></i>
          </div>
        </div>
        <MyPagination />
      </form>
    </>
  )
}

export default TcAnalytic
