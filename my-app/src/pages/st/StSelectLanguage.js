import React from 'react'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default function StSelectLanguage() {
  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container ">
          <div className="row">
            <MultiLevelBreadCrumb />
          </div>
          <div className="row">
            <div className="mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10">
              選擇語言
              <ul claaName="languagelist">
                <li className="selection">英文</li>
                <li className="selection">日文</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="dec-side col-md-8 col-lg-6">
        <div className="dec-insideblock col-md-9 col-lg-8"></div>
      </div>
      <Footer />
    </>
  )
}
