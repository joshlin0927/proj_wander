import React from 'react'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default function StSelectLanguage() {
  return (
    <>
      <div className="container-fluid mainpic mainContent full">
        <div className="container ">
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
                選擇語言
                <ul claaName="languagelist">
                  <li className="selection">英文</li>
                  <li className="selection">日文</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dec-side-m col-8">
        <div className="dec-insideblock-m col-9">
          <div className="selectlanguage-m col-8 ">
            選擇語言
            <ul claaName="languagelist-m">
              <li className="selection-m"> 英文 </li>
              <li className="selection-m"> 日文 </li>
            </ul>
          </div>
        </div>
        <div className="h30"></div>
      </div>
      <Footer />
    </>
  )
}
