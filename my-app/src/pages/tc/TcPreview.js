import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'

import { devUrl } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import BuyCourseItem from '../../components/BuyCourseItem'
import MyPagination from '../../components/MyPagination'
import Footer from '../../components/Footer'

function TcPreview() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      return
    }
  }, [])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div class="row p-page-info-bg">
          {/* personal info */}
          <div class="p-info-wrapper col-12">
            <div class="p-page-info">
              <div class="TCname">Thomas Lillard</div>
              <div class="TCp-intro">
                <div class="TCp-intro-title">自我介紹</div>
                <p>
                  會說英文、中文
                  <br />
                  <br />
                  私訊詢問最新優惠甜價！！
                  今晚，我想來點英文課！
                  <br />
                  <br />
                  擁有兩年教學經驗
                  <br />
                  兒童美語補習教師
                  <br />
                  非母語者卻有正統美國口音
                  <br />
                  曾任外商航空空服員
                  <br />
                  多國旅遊經驗
                  <br />
                  已幫助超過100位學生增強英語能力
                  <br />
                  中英雙語上課溝通無壓力
                </p>
              </div>
            </div>
            <div class="p-page-avatar">
              <img
                src={`${devUrl}/images/teacher/Thomas_Lillard.jpg`}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="p-page-myCourse">
          <div class="p-page-title ml-0 w-100">
            我的課程
          </div>
          <div class="BuyCourseSection">
            <BuyCourseItem
            // CourseName={CourseName}
            // TeacherName={TeacherName}
            // Stars={Stars}
            // Price={Price}
            />
          </div>
          {/* Pagination */}
          <MyPagination />
        </div>
        <Footer />
      </div>
      {/* bg decoration */}
      <div class="TCallwraper">
        <div class="dec-block"></div>
        <div class="dec-white"></div>
        <div class="earth">
          <img src="../images/elements/earth.png" alt="" />
        </div>
        <div class="dec-blue-block">
          <img
            src="../images/elements/TC_blue_block.svg"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(TcPreview)
