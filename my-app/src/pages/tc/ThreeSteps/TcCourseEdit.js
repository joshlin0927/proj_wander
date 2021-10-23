import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseEdit() {
  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState('')
  const [selectedOption, setSelectedOption] =
    useState('none')

    
  return (
    <>
      {/* Main Content */}
      <div className="container mainContent">
        {/* logo */}
        <div className="row">
          <MultiLevelBreadCrumb />
        </div>
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          {/* form */}
          <form className="TCform col-12 col-md-10">
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">
                  課程細節頁面
                </div>
                <div className="d-flex justify-content-end">
                  <button className="TCbtn TCbtn-sm-w-switch btn-primary">
                    <span>儲存</span>
                  </button>
                </div>
              </div>

              <div className="TCcourse-img-selector">
                <div className="TCcourse-pic-square">
                  <img
                    src="../images/course/商用英文.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <button className="TCbtn btn-border-only">
                  <span>請選擇圖片</span>
                </button>
              </div>
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入課程標題"
                name="course_name"
                value={courseTitle}
                onChange={(e) => {
                  setCourseTitle(e.target.value)
                }}
              />
              <label className="TCnotice" htmlFor="">
                請填寫至少一個字
              </label>
              <select
                type="text"
                className="col-12 allInputs"
                placeholder="課程種類"
                name="course_category"
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value)
                }}
              >
                <option value="none" disabled>
                  -------------請選擇-------------
                </option>
                <option value="Japanese">日文</option>
                <option value="English">英文</option>
                <option value="Chinese">中文</option>
              </select>
              <label className="TCnotice" htmlFor="">
                請選擇相對應的種類
              </label>
              <div className="TCmb-50">
                <input
                  type="number"
                  className="col-12 allInputs"
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
                className="TC-intro w-100 col-12"
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
            <div className="onebtn-switch">
              <button
                type="submit"
                className="TCbtn btn-secondary mx-auto one-btn"
              >
                <span>儲存</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* bg decoration */}
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default TcCourseEdit
