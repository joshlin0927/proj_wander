import React from 'react'
import { devUrl } from '../../config'

function PayMethodSelectInfo(props) {
  const { payMethodSelect } = props
  return (
    <>
      {payMethodSelect === '1' ? (
        <div
          id="payMethodSelectInfo1"
          className="col-12 col-md-6 payMethodSelectInfo"
        >
          <img
            src={`${devUrl}/images/cart/credit_VISA.png`}
            alt=""
          />
          <img
            src={`${devUrl}/images/cart/credit_MSCard.png`}
            alt=""
          />
          <img
            src={`${devUrl}/images/cart/credit_JCB.png`}
            alt=""
          />
        </div>
      ) : (
        ''
      )}
      {payMethodSelect === '2' ? (
        <div
          id="payMethodSelectInfo2"
          className="col-12 col-md-6 payMethodSelectInfo"
        >
          <span className="text-danger">注意事項：</span>
          <div className="w-100"></div>
          <span>
            超商代碼繳費時限為7天，請務必於期限內進行繳費。
          </span>
        </div>
      ) : (
        ''
      )}
      {payMethodSelect === '3' ? (
        <div
          id="payMethodSelectInfo3"
          className="col-12 col-md-6 payMethodSelectInfo"
        >
          <span className="text-danger">注意事項：</span>
          <div className="w-100"></div>
          <span>
            平台僅提供部分銀行，如有跨行轉帳之手續費需由買方負擔。
          </span>
          <div className="w-100"></div>
          <span>
            請於取得平台轉帳帳號後於48小時內完成匯款。
          </span>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default PayMethodSelectInfo
