import React from 'react'
import { devUrl } from '../../config'

export default function StBgDecorationNormal(props) {
  return (
    <>
      <div className="STallwraper">
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
