import React from 'react'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

export default function StSelectLanguage() {
  return (
    <>
      <div class="bgc-img">
        <div className="container-fluid mainpic">
          <div className="container full">
            <div className="row">
              <MultiLevelBreadCrumb />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="dec-side col-md-8 col-lg-8">
              <div className="dec-insideblock col-md-9 col-lg-8">
                <div className="selectlanguage col-md-6 col-lg-6">
                  選擇語系
                  <ul>
                    <li>英文</li>
                    <li>西文</li>
                    <li>法文</li>
                    <li>德文</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <row>
            <div className="dec-side-m col-8">
              <div className="dec-insideblock-m col-11">
                <div className="selectlanguage col-6 ">
                  選擇語系
                  <ul>
                    <li>英文</li>
                    <li>西文</li>
                    <li>法文</li>
                    <li>德文</li>
                  </ul>
                </div>
              </div>
            </div>
          </row>
        </div>
      </div>
    </>
  )
}
