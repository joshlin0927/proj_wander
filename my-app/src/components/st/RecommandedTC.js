import React from 'react'
import { IMG_PATH } from '../../config'

export default function RecommandedTC(props) {
  const { teachersname, teacherimg } = props

  return (
    <>
      <div className="t_avatar col-md-3 col-lg-3">
        <img
          className="mx-auto"
          src={`${IMG_PATH}/${teacherimg}`}
          alt=""
        />
        <p className="nametag">{teachersname}</p>
      </div>
    </>
  )
}
