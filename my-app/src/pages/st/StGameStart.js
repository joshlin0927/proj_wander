import React, { useEffect, useState } from 'react'
import './style/gamestart.css'
import { devUrl } from '../../config'
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
        `http://localhost:3001/sentence-game/api/list?language=${lang}&easiness=${easi}`
      )
      console.log(r)
      if (r.status === 200) {
        setDataArr(r.data.rows)
      }
    })()
  }, [data])

  return (
    <>
      <div className="container-fluid mainpic mainContent full">
        <div className="container">
          <div className="row">
            <MultiLevelBreadCrumb />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="dec-side col-md-8 col-lg-8">
            <div className="dec-insideblock col-md-9 col-lg-8">
              <div
                className="mylanguage col-md-6 col-lg-6"
                onClick={() => {
                  setData({
                    language: 'Japanese',
                    easiness: 2,
                  })
                }}
              >
                <div className="dot"></div>
                西班牙文
              </div>
              <br />
              <div
                className="gamestart col-md-6 col-lg-6"
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
                <div className="dot"></div>
                <span>課程測驗</span>
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
      </div>

      <div className="dec-side-m col-9">
        <div className="dec-insideblock-m col-9">
          <div className="mylanguage col-9">
            <div className="dot"></div>
            西班牙文
          </div>
          <div className="gamestart col-9">
            <div className="dot"></div>
            課程測驗
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default withRouter(StGameStart)
