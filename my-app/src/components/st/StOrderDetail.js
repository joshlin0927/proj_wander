import React from 'react'
import { devUrl } from '../../config'

function StOrderDetail(props) {
  const { handleCancelModalShow, setShowDetail } = props
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
            <span>ABC - 00123456</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>付款方式：</span>
            <span>信用卡</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>訂單金額：</span>
            <span>NT$7310</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>支付狀態：</span>
            <span>已付款</span>
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
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>付款代碼：</span>
            <span>000123456789</span>
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
            <div className="orderDetailItem col-12">
              <img
                src={`${devUrl}/images/cart/jp_course.jpg`}
                alt=""
                className="col-4 orderDetailItemImg"
              />
              <div className="col-8 orderDetailItemTxt">
                <span className="col-12 col-lg-6">
                  日本自由行必學的實用日語會話
                </span>
                <span className="col-12 col-lg-6 c-blue">
                  NT$2700
                </span>
              </div>
            </div>
            <div className="orderDetailItem col-12">
              <img
                src={`${devUrl}/images/cart/jp_course.jpg`}
                alt=""
                className="col-4 orderDetailItemImg"
              />
              <div className="col-8 orderDetailItemTxt">
                <span className="col-12 col-lg-6">
                  日本自由行必學的實用日語會話
                </span>
                <span className="col-12 col-lg-6 c-blue">
                  NT$2700
                </span>
              </div>
            </div>
            <div className="orderDetailItem col-12">
              <img
                src={`${devUrl}/images/cart/jp_course.jpg`}
                alt=""
                className="col-4 orderDetailItemImg"
              />
              <div className="col-8 orderDetailItemTxt">
                <span className="col-12 col-lg-6">
                  日本自由行必學的實用日語會話
                </span>
                <span className="col-12 col-lg-6 c-blue">
                  NT$2700
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StOrderDetail
