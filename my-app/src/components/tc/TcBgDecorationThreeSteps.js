import React from 'react'
import { devUrl } from '../../config'

function TcBgDecorationThreeSteps() {
  return (
    <>
      {/* bg decoration */}
      <div className="TCallwraper">
        <div className="dec-circle-w"></div>
        <div className="dec-block-lg"></div>
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

export default TcBgDecorationThreeSteps
