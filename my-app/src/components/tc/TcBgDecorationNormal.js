import React from 'react'
import { devUrl } from '../../config'

function TcBgDecorationNormal() {
  return (
    <>
      {/* bg decoration */}
      <div className="TCallwraper">
        <div className="dec-circle"></div>
        <div className="dec-block"></div>
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

export default TcBgDecorationNormal
