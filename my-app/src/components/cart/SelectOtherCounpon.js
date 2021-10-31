import React from 'react'
import { devUrl } from '../../config'

function SelectOtherCounpon(props) {
  const { handleCounponModalShow } = props
  const counponID = sessionStorage.getItem('counponID')
  return (
    <>
      <div className="w-100 mt-3 counponImage">
        {counponID === '' ? (
          ''
        ) : (
          <img
            src={`${devUrl}/images/cart/coupon${counponID}.svg`}
            alt=""
          />
        )}
      </div>
      <div className="w-100 mt-3"></div>
      <div
        className="ml-auto"
        onClick={handleCounponModalShow}
      >
        <span className="selectOtherCoupon">
          選擇其他優惠券
        </span>
      </div>
    </>
  )
}

export default SelectOtherCounpon
