import React from 'react'
import './style/st_startmycourse.css'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default function StStartMyCourse() {
  return (
    <>
      <div className="container-fluid mainpic mainContent full">
        <div className="container">
          <div className="row">
            <MultiLevelBreadCrumb />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="dec-side col-md-8 col-lg-8">
            <div className="dec-insideblock col-md-8 col-lg-8">
              <div className="startmycourse col-md-6 col-lg-6">
                <div className="dot"></div>
                開始課程
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dec-side-m col-9">
        <div className="dec-insideblock-m col-9">
          <div className="startmycourse-m col-9">
            <div className="dot"></div>
            開始課程
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
