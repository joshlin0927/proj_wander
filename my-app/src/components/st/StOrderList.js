import React from 'react'
import { devUrl } from '../../config'

function StOrderList(props) {
  const {
    setShowDetail,
    time,
    order_id,
    order_status,
    price,
    setOrderID,
  } = props
  return (
    <>
      <div className="stOrderDetail">
        <div className="col-12 col-md-3 stOrderDetailItem">
          <div className="stOrderDetailItem-t">
            <span>成立時間</span>
          </div>
          <span>{time}</span>
        </div>
        <div className="col-12 col-md-3 stOrderDetailItem">
          <div className="stOrderDetailItem-t">
            <span>訂單編號</span>
          </div>
          <span>{order_id}</span>
        </div>
        <div className="col-12 col-md-2 stOrderDetailItem">
          <div className="stOrderDetailItem-t">
            <span>訂單狀態</span>
          </div>
          {order_status === 1 ? <span>已付款</span> : ''}
          {order_status === 0 ? (
            <span className="text-danger">待付款</span>
          ) : (
            ''
          )}
          {order_status === 2 ? <span>已取消</span> : ''}
        </div>
        <div className="col-12 col-md-2 stOrderDetailItem">
          <div className="stOrderDetailItem-t">
            <span>訂單金額</span>
          </div>
          <span>NT${price}</span>
        </div>
        <div
          className="col-12 col-md-2 stOrderDetailItem m-d-none stOrderDetailBtn"
          onClick={() => {
            setShowDetail(true)
            setOrderID(order_id)
          }}
        >
          <img
            src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
            alt=""
          />
        </div>
        <div
          className="stOrderDetailBtn-m"
          onClick={() => {
            setShowDetail(true)
            setOrderID(order_id)
          }}
        >
          <img
            src={`${devUrl}/images/st_order/orderDetail_icon_m.svg`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default StOrderList
