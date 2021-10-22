import React from 'react'
import './style/gamestart.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
export default function StGameStart() {
  return (
    <>
      <div class="bgc-img">
        <div className="container-fluid mainpic">
          <div className="container">
            <div className="row">
              <MultiLevelBreadCrumb />
            </div>
          </div>
        </div>

        <div className="container-fluid full">
          <div className="row">
            <div className="dec-side col-md-8 col-lg-8">
              <div className="dec-insideblock col-md-9 col-lg-8">
                <div className="mylanguage col-md-6 col-lg-6">
                  <div className="dot"></div>
                  西班牙文
                </div>
                <br />
                <div className="gamestart col-md-6 col-lg-6">
                  <div className="dot"></div>
                  課程測驗
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dec-side-m col-8">
          <div className="dec-insideblock-m col-11">
            <div className="mylanguage col-6">
              <div className="dot"></div>
              西班牙文
            </div>
            <div className="gamestart col-6">
              <div className="dot"></div>
              課程測驗
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
