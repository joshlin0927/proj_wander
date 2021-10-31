import React from 'react'
import { API_HOST } from '../../config'

export default function RecommandedTC(props) {
  const { teachersname, teacherimg } = props

  return (
    <>
      <div className="t_avatar col-md-3 col-lg-3">
        <img
          className="mx-auto"
          src={`${API_HOST}/img/dog-puppy-on-garden-royalty-free-image-1586966191.jpg`}
          alt=""
        />
        <p className="nametag">{teachersname}</p>
      </div>
    </>
  )
}
