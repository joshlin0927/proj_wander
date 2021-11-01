import React from 'react'
import { devUrl } from '../../config'

function EditCheckList(props) {
  const { name, img } = props
  return (
    <>
      <div className="w-100 my-2"></div>
      <div className="col-5 pr-0">
        <img
          src={`${devUrl}/images/cart/jp_course.jpg`}
          alt=""
        />
      </div>
      <div className="col-7">
        {name}
      </div>
    </>
  )
}

export default EditCheckList
