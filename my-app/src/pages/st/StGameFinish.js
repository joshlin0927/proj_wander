import React, { useEffect } from 'react'
import $ from 'jquery'
import { devUrl, SentenceGame_SOT } from '../../config'
import { withRouter } from 'react-router-dom'

import './style/gamestart.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import Footer from '../../components/Footer'

function StGameFinish() {
  const resultRate = () => {
    const r = JSON.parse(localStorage.getItem('result'))
    const n = r.filter((v) => {
      return v === 1
    })
    console.log('Correct Nums:', n.length)
    console.log('Correct Rate:', n.length / r.length)
  }
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
                <h2 className="m-0">為您推薦以下課程</h2>
                {resultRate()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(StGameFinish)
