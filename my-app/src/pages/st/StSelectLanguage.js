import React, { useState } from 'react'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default function StSelectLanguage() {
  const [selectedOption1, setSelectedOption1] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')
  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container ">
          <MultiLevelBreadCrumb />

          <div className="row flex-column">
            <div>
              <select
                className=" mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
                value={selectedOption1}
                onChange={(e) => {
                  setSelectedOption1(e.target.value)
                }}
              >
                {/* 第一個值會對應到初始值，例如初始化值為空字串，預設顯示就會顯示value為空字串的選項  */}
                <option value="">選擇語言</option>
                <option value="英文"> 英文 </option>
                <option value="日文"> 日文 </option>
              </select>
            </div>

            <br />

            <div>
              <select
                className="mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
                value={selectedOption2}
                onChange={(e) => {
                  setSelectedOption2(e.target.value)
                }}
              >
                <option value="">難易度</option>
                <option value="簡單"> 簡單 </option>
                <option value="中等"> 中等 </option>
                <option value="困難"> 困難 </option>
              </select>
            </div>

            <div className="nextpage  offset-6 offset-md-8 offset-lg-10">
              下一步
            </div>
            {/* <ul claaName="languagelist">
                <li
                  className="selection"
                  onClick={(e) => {
                    setLanguage('英文')
                  }}
                >
                  英文
                </li>
                <li
                  className="selection"
                  onClick={(e) => {
                    setLanguage('日文')
                  }}
                >
                  日文
                </li>
              </ul> */}
          </div>
        </div>
      </div>

      <div className="dec-side col-md-6 col-lg-6">
        <div className="dec-insideblock col-md-9 col-lg-8"></div>
      </div>
      <div className="bgbeige"></div>
      <Footer />
    </>
  )
}
