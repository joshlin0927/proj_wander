import React from 'react'
import { devUrl } from '../../config'

function CounponCard(props) {
  const { counponTab } = props
  return (
    <>
      <label
        className="row modal-card"
        htmlFor={`counponTab${counponTab}`}
        id={`counponCard${counponTab}`}
      >
        <div className="col-6 col-md-4 text-center p-0">
          <img
            src={`${devUrl}/images/cart/coupon${counponTab}.svg`}
            alt=""
          />
        </div>
        <div className="col-6 col-md-4">
          {counponTab === 'c1' ? (
            <span>帳號內首筆訂單可使用</span>
          ) : (
            <span>任意訂單皆可使用</span>
          )}

          <div className="w-100"></div>
          <span>不限制訂單內課程購買數量</span>
        </div>
        <div className="col-6 col-md-2 text-center">
          {counponTab === 'c1' ? '2021.12.31' : '2022.3.31'}
        </div>
        <div className="col-2 offset-4 offset-md-0 text-center p-0">
          <img
            src={`${devUrl}/images/cart/check_icon.svg`}
            alt=""
          />
        </div>
      </label>
    </>
  )
}

export default CounponCard
