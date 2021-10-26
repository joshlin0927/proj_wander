import React from 'react'
import { withRouter } from 'react-router-dom'
import { devUrl } from '../../config'
import './index2.css'

function WanderIndex() {
  return (
    <>
      <div className="indexTopContent">
        <div className="topWord container-fluid w-100">
          <div className="row align-items-center h-100 position-relative">
            <div className="col-md-6 offset-md-1 col-12 offset-0">
              <span>提供學習多種外語的教學平台</span>
              <div className="w-100 my-3"></div>
              <span>能自由漫步世界各國。</span>
            </div>
          </div>
        </div>
        <div className="indexBigImg1 container-fluid w-100">
          <div className="row w-100 m-0">
            <div className="col-md-5 offset-md-6 col-11 offset-1 p-0">
              <img
                src={`${devUrl}/images/index/01.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="indexBigImg2 container-fluid w-100">
          <div className="row">
            <div className="col-4">
              <img
                src={`${devUrl}/images/index/02.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="indexBigImg3 container-fluid w-100">
          <div className="row w-100 m-0">
            <div className="col-md-2 offset-md-5 col-4 offset-8 p-0">
              <img
                src={`${devUrl}/images/index/03.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(WanderIndex)
