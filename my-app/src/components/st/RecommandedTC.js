import React from 'react'

export default function RecommandedTC(props) {
  const { teachersname, teacherimg } = props

  return (
    <>
      <div className="t_avatar col-md-3 col-lg-3">
        <img className="mx-auto" src={teacherimg} alt="" />
        <p className="nametag">{teachersname}</p>
      </div>
    </>
  )
}
