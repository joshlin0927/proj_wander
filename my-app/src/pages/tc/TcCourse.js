import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// page
import ThreeStepsIndex from './ThreeSteps/ThreeStepsIndex'

// components
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseCard from '../../components/tc/TcCourseCard'
import MyPagination from '../../components/MyPagination'

function TcCourse() {
  return (
    <>
      <div class="TCform col-12 col-md-10">
        <div class="TCform-head ml-1 p-0">
          <Link to="/">
            <i class="fas fa-chevron-left TCback-btn"></i>
          </Link>
          <div class="TCform-title mr-auto">我的課程</div>
          {/* desktop search bar */}
          <div class="TCsearch mr-auto col-6">
            <TcSearchBar />
          </div>
          <div class="d-flex justify-content-end">
            <Link to="TcCourse/ThreeStepsIndex">
              <button
                type="submit"
                class="btn TCbtn-sm btn-primary"
              >
                <span>新增</span>
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
          <div class="Labelitem">課程封面</div>
          <div class="Labelitem">課程名稱</div>
          <div class="TCcourseLabel-right">
            <div class="Labelitem">課程種類</div>
            <div class="Labelitem">上架日期</div>
            <div class="Labelitem">課程長度</div>
            <div class="TCcourse-delete">
              <i class="far fa-times-circle opacity-0"></i>
            </div>
          </div>
        </div>
        {/* course cards */}
        <TcCourseCard />
        {/* Pagination */}
        <MyPagination />
      </div>
    </>
  )
}

export default TcCourse
