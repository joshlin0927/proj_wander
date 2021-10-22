import React from 'react'
import '../../../public/css/st_startmycourse.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

export default function StStartMyCourse() {
  return (
    <>
      <div class="bgc-img">
        <div className="container-fluid mainpic">
          <div className="container">
            <MultiLevelBreadCrumb />
            <div className="row">
              <div className="logo-m">
                <img
                  src="../public/imgs/網頁素材/log_mobile.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid full">
          <div className="row">
            <div className="dec-side col-md-8 col-lg-8">
              <div className="dec-insideblock col-md-8 col-lg-8">
                <div className="startmycourse col-md-6 col-lg-6">
                  <div className="dot"></div>
                  開始上課
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dec-side-m col-8">
          <div className="dec-insideblock-m col-11">
            <div className="startmycourse-m col-9">
              <div className="dot"></div>
              開始上課
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
