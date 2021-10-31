import React from 'react'
import { devUrl } from '../../config'

function TcBgDecorationNormal() {
  return (
    <>
      {/* bg decoration */}
      <div className="TCallwraper">
        <div className="dec-circle"></div>
        <div className="dec-block"></div>
        <div className="yellow-circle">
          <img
            src={`${devUrl}/images/elements/yellow-circle.png`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default TcBgDecorationNormal
