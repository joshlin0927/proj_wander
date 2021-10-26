import React, { useEffect, useState } from 'react'
import './style/st_startmycourse.css'
import $ from 'jquery'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default function StStartMyCourse() {
  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container">
          <div className="row">
            <MultiLevelBreadCrumb />
          </div>
          <div>
            <div className="h30"></div>
            <div className="gamestart col-md-2 col-lg-2 ml-auto">
              <div className="dot"> </div>
              開始課程
            </div>
           
          </div>
        </div>
      </div>

      <div className="dec-side col-md-6 col-lg-6">
        <div className="dec-insideblock col-md-9 col-lg-8"></div>
      </div>
      <div className="bg"></div>
      <Footer />
    </>
  )
}
