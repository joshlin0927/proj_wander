import React from 'react'
import { devUrl } from '../../config'

export default function StBgDecoration() {
  return (
    <>
      <div className="Normalallwraper">
        <div className="dec-block"> </div>
        <div className="whitecircle"> </div>
        <div className="earth">
          <img
            src={`${devUrl}/images/elements/earth.png`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
