import React, { useEffect, useState } from 'react'
import './style/gamestart.css'
import { devUrl, SentenceGame_LIST } from '../../config'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

function StGameStart(props) {
  const [data, setData] = useState({})
  const [dataArr, setDataArr] = useState([])

  useEffect(() => {
    const lang = data.language
    const easi = data.easiness
    ;(async () => {
      let r = await axios.get(
        `${SentenceGame_LIST}?language=${lang}&easiness=${easi}`
      )
      console.log('lang/easi:', lang, '/', easi)
      console.log('rows:', r.data.rows)
      if (r.status === 200) {
        setDataArr(r.data.rows)
      }
    })()
  }, [data])

  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container">
          <MultiLevelBreadCrumb />

          <div className="row flex-column">
            <div
              className="mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
              onClick={() => {
                setData({
                  language: 'English',
                  easiness: 2,
                })
              }}
            >
              <div className="dot"> </div>
              <span> 英文 </span>
            </div>
            <br />
            <div
              className="gamestart col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
              onClick={() => {
                localStorage.clear()
                console.log(dataArr)
                if (dataArr.length === 0) {
                  alert('未選擇語系或難度!!')
                } else {
                  const newArr = [...dataArr]
                  localStorage.setItem(
                    'array',
                    JSON.stringify(newArr)
                  )
                  props.history.push('/StIndex/StGaming')
                }
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
