import React from 'react'
import { devUrl } from 'react-router-dom'

export default function StBgDecorationNormal() {
  return (
    <>
      <div className="TCallwraper">
        <div className="confirmmsg">
          <i className="far fa-check-circle"></i>
          資料已修改完成
        </div>
        <div className="dec-block"></div>
        <div className="whitecircle"></div>
        <div className="bluetriangle">
          <img
            src={`${devUrl}/images/elements/bluetriangle.svg`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
