import React, { useState, useEffect } from 'react'
import { devUrl, SendOrder_API } from '../../config'
import axios from 'axios'
import Step3OrderDetailItem from '../../components/cart/Step3OrderDetailItem'

function StOrderDetail(props) {
  const {
    handleCancelModalShow,
    setShowDetail,
    orderID,
    memberID,
  } = props
  const [detailData, setDetailData] = useState([{}])
  useEffect(() => {
    ;(async () => {
      let o = await axios.get(
        `${SendOrder_API}/detailList?member_sid=${memberID}&order_id=${orderID}`
      )
      if (o.data.success) {
        setDetailData(o.data.result)
      }
    })()
  }, [memberID, orderID])
  return (
    <>
      <div className="row stPayMethod bgc-main">
        <div className="col-12 payTitle">
          <span>訂單明細</span>
          <div
            className="btn stOrderBackBtn"
            onClick={() => {
              setShowDetail(false)
            }}
          >
            &larr; 回上層
          </div>
        </div>
        <div className="orderContent col-12">
          <div className="orderContentRow col-12 col-xl-6">
            <span>訂單編號：</span>
            <span>{orderID}</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>付款方式：</span>
            {detailData[0].pay_method === 1 ? (
              <span>信用卡</span>
            ) : (
              ''
            )}
            {detailData[0].pay_method === 2 ? (
              <span>超商代碼</span>
            ) : (
              ''
            )}
            {detailData[0].pay_method === 3 ? (
              <span>ATM轉帳匯款</span>
            ) : (
              ''
            )}
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>訂單金額：</span>
            <span>NT${detailData[0].total_price}</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>支付狀態：</span>
            {detailData[0].order_status === 0 ? (
              <span className="text-danger">待付款</span>
            ) : (
              ''
            )}
            {detailData[0].order_status === 1 ? (
              <span>已付款</span>
            ) : (
              ''
            )}
            {detailData[0].order_status === 2 ? (
              <span>已取消</span>
            ) : (
              ''
            )}

            <div
              className="btn stOrderCancelBtn"
              data-toggle="modal"
              data-target="#cancelModal"
              onClick={handleCancelModalShow}
            >
              我要取消
            </div>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>成立時間：</span>
            <span>{detailData[0].created_at}</span>
          </div>
          <div className="orderContentRow col-12">
            <span>購買細項：</span>
          </div>
        </div>
        <div className="orderDetail col-12">
          <div className="orderDetailContent col-12">
            <div className="orderDetailTitle col-12">
              <span className="col-4">課程預覽</span>
              <span className="col-4">課程名稱</span>
              <span className="col-4">課程售價</span>
            </div>
            {detailData.length === 0
              ? ''
              : detailData.map((v, i) => {
                  return (
                    <Step3OrderDetailItem
                      name={v.course_name}
                      price={v.course_price}
                      img={v.course_img}
                    />
                  )
                })}
          </div>
        </div>
      </div>
    </>
  )
}

export default StOrderDetail
