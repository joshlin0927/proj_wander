import React from 'react'

function NotSelectCoupon(props) {
  const { handleCounponModalShow } = props
  return (
    <>
      <div className="w-100 mt-3"></div>
      <div
        className="ml-auto mr-auto"
        onClick={handleCounponModalShow}
      >
        <span className="selectCoupon">點我選擇優惠券</span>
      </div>
    </>
  )
}

export default NotSelectCoupon
