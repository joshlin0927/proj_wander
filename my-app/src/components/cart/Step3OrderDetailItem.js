import React from 'react'
import { devUrl } from '../../config'
function Step3OrderDetailItem(props) {
  const { name, price, img } = props
  return (
    <>
      <div className="orderDetailItem col-12">
        <img
          src={`${devUrl}/images/cart/jp_course.jpg`}
          alt=""
          className="col-4 orderDetailItemImg"
        />
        <div className="col-8 orderDetailItemTxt">
          <span className="col-12 col-lg-6">{name}</span>
          <span className="col-12 col-lg-6 c-blue">
            NT${price}
          </span>
        </div>
      </div>
    </>
  )
}

export default Step3OrderDetailItem
