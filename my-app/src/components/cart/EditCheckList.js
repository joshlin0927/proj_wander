import React from 'react'
import { API_HOST } from '../../config'

function EditCheckList(props) {
  const { name, img } = props
  return (
    <>
      <div className="w-100 my-2"></div>
      <div className="col-5 pr-0">
        <img
          src={`${API_HOST}/img/course/img/${img}`}
          alt=""
        />
      </div>
      <div className="col-7">{name}</div>
    </>
  )
}

export default EditCheckList
