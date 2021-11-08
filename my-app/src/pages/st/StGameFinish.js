import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar'
import { easeQuadInOut } from 'd3-ease'
import 'react-circular-progressbar/dist/styles.css'
import axios from 'axios'
import { CsCourse_API } from '../../config'

import './style/gamestart.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import GameRatingAnimation from '../../components/st/GameRatingAnimation'
import Footer from '../../components/Footer'
import BuyCourseItem from '../../components/BuyCourseItem'

function StGameFinish(props) {
  const category = sessionStorage.getItem('category')
    ? JSON.parse(sessionStorage.getItem('category'))
    : ''
  const [recommandCourse, setRecommandCourse] = useState([
    {},
  ])
  const [isLoading, setIsLoading] = useState(true)
  // 答對率
  const resultRate = () => {
    const r = JSON.parse(
      sessionStorage.getItem('gameresult')
    )
    const n = r.filter((v) => {
      return v === 1
    })
    console.log('Correct Nums:', n.length)
    console.log('Correct Rate:', n.length / r.length)
    return (n.length / r.length) * 100
  }
  // 取得推薦課程資料
  useEffect(() => {
    let easi = category.easi
    if (resultRate() < 50) {
      if (easi === 1) {
        easi = 1
      } else {
        easi = easi - 1
      }
    }
    ;(async () => {
      let r = await axios.get(
        `${CsCourse_API}/recommand/list?lang=${category.lang}&easi=${easi}`
      )
      let arr = [...r.data.result]
      arr.sort((a, b) => {
        return Math.random() - 0.5
      })
      console.log('object', arr)
      setRecommandCourse(arr.slice(0, 4))
    })()
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [category.lang, category.easi])
  return (
    <>
      <div className="container-fluid mainpic mainContent">
        <div className="container">
          <div className="row justify-content-center">
            <MultiLevelBreadCrumb />
          </div>
          <div className="row">
            <div className="stGamingContent container">
              <div className="row my-3 no-wrap align-items-center">
                <h2 className="m-0">您的答對比率：</h2>
                <div className="gameRatingCircle">
                  <GameRatingAnimation
                    valueStart={0}
                    valueEnd={resultRate()}
                    duration={1.4}
                    easingFunction={easeQuadInOut}
                    no-repeat
                  >
                    {(value) => {
                      const roundedValue = Math.round(value)
                      return (
                        <CircularProgressbar
                          value={value}
                          text={`${roundedValue}%`}
                          styles={buildStyles({
                            pathTransition: 'none',
                          })}
                        />
                      )
                    }}
                  </GameRatingAnimation>
                </div>
              </div>
              <div
                className={
                  isLoading
                    ? 'row recommandCourse'
                    : 'row recommandCourse show'
                }
              >
                <h2 className="col-12 mt-5 mb-3 p-0">
                  為您推薦以下課程
                </h2>
                {console.log('recommand:', recommandCourse)}
                {recommandCourse.length === 0
                  ? ''
                  : recommandCourse.map((v, i) => {
                      return (
                        <BuyCourseItem
                          courseSid={v.sid}
                          CourseCover={v.course_img}
                          CourseName={v.course_name}
                          Price={v.course_price}
                          TeacherName={v.nickname}
                        />
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StBgDecorationNormal />
      <div className="bg"> </div>
      <Footer />
    </>
  )
}

export default withRouter(StGameFinish)
