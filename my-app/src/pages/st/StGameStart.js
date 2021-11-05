import React from 'react'
import './style/gamestart.css'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

function StGameStart(props) {
  const category = sessionStorage.getItem('category')
    ? JSON.parse(sessionStorage.getItem('category'))
    : ''
  const dataArr = sessionStorage.getItem('array')
    ? JSON.parse(sessionStorage.getItem('array'))
    : ''
  function changeLanguage(obj) {
    if (obj.lang === 'en-US') {
      return '英文'
    } else if (obj.lang === 'ja-JP') {
      return '日文'
    } else {
      return ''
    }
  }
  function changeEasi(obj) {
    if (obj.easi === '1') {
      return '簡單'
    } else if (obj.easi === '2') {
      return '中等'
    } else if (obj.easi === '3') {
      return '困難'
    } else {
      return ''
    }
  }
  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container">
          <MultiLevelBreadCrumb />

          <div className="row flex-column">
            <div className="mylanguage col-6 col-md-3 col-lg-2 offset-3 offset-md-9 offset-lg-10">
              <div className="dot"> </div>
              <span> {changeLanguage(category)} /</span>
              <span> {changeEasi(category)} </span>
            </div>
            <div className="w-100 my-2"></div>
            <div className="mylanguage col-6 col-md-3 col-lg-2 offset-3 offset-md-9 offset-lg-10">
              <div className="dot"> </div>
              <span> {dataArr.length} 題 </span>
            </div>
            <div className="w-100 mt-5"></div>
            <div
              className="gamestart col-6 col-md-3 col-lg-2 offset-3 offset-md-9 offset-lg-10"
              onClick={() => {
                props.history.push('/StIndex/StGaming')
              }}
            >
              <div className="dot"> </div>
              <span> 開始測驗 </span>
              <div className="gamestartHoverDot">
                <img
                  src={`${devUrl}/images/gaming/game_entrance.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="w-100 my-2"></div>
            <div
              className="gamestart col-6 col-md-3 col-lg-2 offset-3 offset-md-9 offset-lg-10"
              onClick={() => {
                props.history.push(
                  '/StIndex/StSelectLanguage'
                )
              }}
            >
              <div className="dot"> </div>
              <span> 重新選擇 </span>
              <div className="gamestartHoverDot">
                <img
                  src={`${devUrl}/images/gaming/game_entrance.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dec-side col-md-6 col-lg-6 ">
        <div className="dec-insideblock col-10 col-md-9 col-lg-8"></div>
      </div>
      <div className="bg"> </div>
      <Footer />
    </>
  )
}
export default withRouter(StGameStart)
