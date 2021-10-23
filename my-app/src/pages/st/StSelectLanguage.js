import React from 'react'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

export default function StSelectLanguage() {
  return (
    <>
      <div className="container-fluid mainpic mainContent">
        <div className="container ">
          <div className="row">
            <MultiLevelBreadCrumb />
          </div>
        </div>
      </div>

      <div className="container-fluid full">
        <div className="row">
          <div className="dec-side col-md-8 col-lg-8">
            <div className="dec-insideblock col-md-9 col-lg-8">
              <div className="selectlanguage col-md-6 col-lg-6">
                選擇語言
                <ul claaName="languagelist">
                  <li className="selection">英文</li>
                  <li className="selection"> 西文 </li>
                  <li className="selection"> 法文 </li>
                  <li className="selection"> 德文 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dec-side-m col-8">
        <div className="dec-insideblock-m col-11">
          <div className="selectlanguage-m col-8 ">
            選擇語言
            <ul claaName="languagelist-m">
              <li className="selection-m"> 英文 </li>
              <li className="selection-m"> 西文 </li>
              <li className="selection-m"> 法文 </li>
              <li className="selection-m"> 德文 </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
