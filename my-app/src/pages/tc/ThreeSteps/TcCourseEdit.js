import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'

function TcCourseEdit() {
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState('')

  return (
    <>
      {/* Main Content */}
      <div class="container mainContent">
        {/* logo */}
        <div class="row">
          <div class="logo-m">
            <img
              src="../images/logo/log_mobile.png"
              alt=""
            />
          </div>
        </div>
        <div class="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          {/* form */}
          <form class="TCform col-12 col-md-10">
            <div class="TCform-content">
              <div class="TCform-head">
                <Link to="">
                  <i class="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div class="TCform-title">課程細節頁面</div>
                <div class="d-flex justify-content-end">
                  <button class="TCbtn TCbtn-sm-w-switch btn-primary">
                    <span>儲存</span>
                  </button>
                </div>
              </div>

              <div class="TCcourse-img-selector">
                <div class="TCcourse-pic-square">
                  <img
                    src="../images/course/商用英文.jpeg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <button class="TCbtn btn-border-only">
                  <span>請選擇圖片</span>
                </button>
              </div>
              <input
                type="text"
                class="col-12 allInputs"
                placeholder="請輸入課程標題"
                name="course_name"
                value={courseTitle}
                onChange={(e) => {
                  setCourseTitle(e.target.value)
                }}
              />
              <label class="TCnotice" for="">
                請填寫至少一個字
              </label>
              <select
                type="text"
                class="col-12 allInputs"
                placeholder="課程種類"
                name="course_category"
              >
                <option value="0" selected disabled>
                  請選擇
                </option>
                <option value="Japanese">日文</option>
                <option value="English">英文</option>
                <option value="Chinese">中文</option>
              </select>
              <label class="TCnotice" for="">
                請選擇相對應的種類
              </label>
              <div class="TCmb-50">
                <input
                  type="number"
                  class="col-12 allInputs"
                  placeholder="課程定價"
                  name="course_price"
                  value={coursePrice}
                  onChange={(e) => {
                    setCoursePrice(e.target.value)
                  }}
                />
              </div>
              <textarea
                type="text"
                class="TC-intro w-100 col-12"
                placeholder="課程介紹與說明"
                name="course_intro"
                id="course_intro"
                rows="5"
                value={coursePrice}
                onChange={(e) => {
                  setCoursePrice(e.target.value)
                }}
              ></textarea>
            </div>
            <div class="onebtn-switch">
              <button
                type="submit"
                class="TCbtn btn-secondary mx-auto one-btn"
              >
                <span>儲存</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* bg decoration */}
      <TcBgDecorationThreeSteps />
    </>
  )
}

export default TcCourseEdit
