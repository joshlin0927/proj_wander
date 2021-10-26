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
      console.log(r)
      if (r.status === 200) {
        setDataArr(r.data.rows)
      }
    })()
  }, [data])

  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container">
          <div className="row mb-5">
            <MultiLevelBreadCrumb />
          </div>
          <div>
            <div
              className="mylanguage col-md-2 col-lg-2 ml-auto"
              onClick={() => {
                setData({
                  language: 'English',
                  easiness: 2,
                })
              }}
            >
              <div className="dot"> </div>
              西班牙文
            </div>
            <br />
            <div
              className="gamestart col-md-2 col-lg-2 ml-auto"
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
              <span> 課程測驗 </span>
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
      <div className="dec-side col-md-6 col-lg-6">
        <div className="dec-insideblock col-md-9 col-lg-8"></div>
      </div>
      <div className="bg"> </div>
      <Footer />
    </>
  )
}
export default withRouter(StGameStart)
