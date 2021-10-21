import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import TcSideBar from '../../components/tc/TcSideBar'
import MyPagination from '../../components/MyPagination'

function TcCourse() {
  return (
    <>
      <div class="TCform col-12 col-md-10">
        <div class="TCform-head ml-1 p-0">
          <a href="">
            <i class="fas fa-chevron-left TCback-btn"></i>
          </a>
          <div class="TCform-title mr-auto">我的課程</div>
          {/* desktop search bar */}
          <div class="TCsearch mr-auto col-6">
            <input
              type="text"
              class="TCsearchbar"
              id="TCsearchbar"
              placeholder="請輸入課程名稱"
            />
            <button type="submit" class="">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn TCbtn-sm btn-primary">
              <span>新增</span>
            </button>
          </div>
        </div>
        {/* mobile search bar */}
        <div class="TCsearch-mobile">
          <input
            type="text"
            class="TCsearchbar"
            id="TCsearchbar"
            placeholder="請輸入課程名稱"
          />
          <button type="submit" class="">
            <i class="fas fa-search"></i>
          </button>
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
        {/* Pagination */}
        <MyPagination />
      </div>
    </>
  )
}

export default TcCourse
