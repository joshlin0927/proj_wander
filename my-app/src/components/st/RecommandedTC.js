import React from 'react'
import { devUrl } from '../../config'

export default function RecommandedTC() {
  return (
    <>
      <div className="t_avatar col-12 col-md-3 col-lg-3">
        <img
          src={`${devUrl}/images/pic/老師照片/Tarin Johnson.jpg`}
          alt=""
        />
        <p className="nametag">Tarin</p>
      </div>
    </>
  )
}
