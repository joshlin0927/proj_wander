import React from 'react'
import { Link } from 'react-router-dom'
export default function RecommandedTC(props) {
  const { teachersname, teacherimg, teacherSid } = props

  return (
    <>
      <Link
        to={`/StIndex/TcPreview/?teacherSid=${teacherSid}`}
        className="t_avatar col-md-3 col-lg-3"
      >
        <img className="mx-auto" src={teacherimg} alt="" />
        <p className="nametag">{teachersname}</p>
      </Link>
    </>
  )
}
