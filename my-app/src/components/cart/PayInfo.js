import React from 'react'
import { devUrl } from '../../config'

function PayInfo(props) {
  const { payMethodSelect, setCstoresort } = props
  // input length
  const textLength = (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '')
  }
  function changeCreditColor(e) {
    document
      .querySelectorAll('.creditCardFront span')
      .forEach((v) => {
        v.classList.remove('onfocus')
      })
    const id = e.target.id
    if (id === 'cardNum') {
      document
        .querySelector('.credit-num')
        .classList.add('onfocus')
    }
    if (id === 'cardDL') {
      document
        .querySelector('.credit-date')
        .classList.add('onfocus')
    }
    if (id === 'CYC') {
      document
        .querySelector('.credit-num')
        .classList.add('onfocus')
    }
    if (id === 'payname') {
      document
        .querySelector('.credit-name')
        .classList.add('onfocus')
    }
    if (id === 'mobile') {
      document
        .querySelector('.credit-num')
        .classList.add('onfocus')
    }
  }
  return (
    <>
      {payMethodSelect === '1' ? (
        <>
          <div className="w-100 mt-4"></div>
          {/* <!-- 信用卡 --> */}
          <div className="col-12 payInfoInput">
            <div className="input-group align-items-center flex-wrap">
              <label className="inputCategory">
                信用卡號
              </label>
              <input
                id="cardNum"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="4"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
              <span>-</span>
              <input
                id="cardNum"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="4"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
              <span>-</span>
              <input
                id="cardNum"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="4"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
              <span>-</span>
              <input
                id="cardNum"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="4"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
            </div>
            <div className="input-group align-items-center mt-3 flex-wrap">
              <label className="inputCategory">
                有效期限
              </label>
              <input
                id="cardDL"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="2"
                placeholder="YY"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
              <span>-</span>
              <input
                id="cardDL"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="2"
                placeholder="MM"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
            </div>
            <div className="input-group align-items-center mt-3 flex-wrap">
              <label className="inputCategory">
                檢核碼
              </label>
              <input
                id="CYC"
                type="text"
                className="allInputs fourLengthInput"
                maxLength="3"
                placeholder="000"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
            </div>
            <div className="input-group align-items-center mt-3 flex-wrap">
              <label className="inputCategory">
                持卡人姓名
              </label>
              <input
                id="payname"
                type="text"
                className="allInputs longLengthInput"
                placeholder="請輸入姓名"
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
            </div>
            <div className="input-group align-items-center mt-3 flex-wrap">
              <label className="inputCategory">
                手機號碼
              </label>
              <input
                id="mobile"
                type="text"
                className="allInputs longLengthInput"
                onInput={(e) => {
                  textLength(e)
                }}
                onFocus={(e) => {
                  changeCreditColor(e)
                }}
              />
            </div>
          </div>
          <div className="w-100 mt-4"></div>
          {/* <!-- 信用卡圖背面 --> */}
          <div className="creditCard">
            <div className="creditCardBack">
              <div className="credit-blackbar"></div>
              <div className="credit-graybar"></div>
              <div className="credit-CVC">888</div>
              <div className="credit-whitebar1"></div>
              <div className="credit-whitebar2"></div>
              <div className="credit-whitebar3"></div>
              <div className="credit-whitebar4"></div>
            </div>
          </div>
          {/* <!-- 信用卡圖正面 --> */}
          <div className="creditCard">
            <div className="creditCardFront">
              <img
                src={`${devUrl}/images/cart/credit_icon.svg`}
                alt=""
                className="credit-icon"
              />
              <span className="credit-title">
                Credit Card
              </span>
              <span className="credit-num">
                0000 0000 0000 0000
              </span>
              <span className="credit-name">
                Xiao-Ming Wang
              </span>
              <span className="credit-MY">Month/Year</span>
              <span className="credit-date">11/24</span>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {payMethodSelect === '2' ? (
        <>
          <div className="w-100 mt-4"></div>
          {/* <!-- 超商代碼 --> */}
          <div className="col-12 d-flex flex-wrap">
            <div className="form-check col-12 col-md-6 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioCStore"
                id="Radio7-Eleven"
                onChange={() => {
                  setCstoresort(1)
                }}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="Radio7-Eleven"
              >
                7-Eleven
              </label>
              <img
                src={`${devUrl}/images/cart/7-Eleven.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 col-md-6 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioCStore"
                id="RadioFamiMart"
                onChange={() => {
                  setCstoresort(2)
                }}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioFamiMart"
              >
                全家FamilyMart
              </label>
              <img
                src={`${devUrl}/images/cart/FamiMart.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 col-md-6 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioCStore"
                id="RadioOKMart"
                onChange={() => {
                  setCstoresort(3)
                }}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioOKMart"
              >
                OK Mart
              </label>
              <img
                src={`${devUrl}/images/cart/OKMart.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 col-md-6 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioCStore"
                id="RadioHiLife"
                onChange={() => {
                  setCstoresort(4)
                }}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioHiLife"
              >
                萊爾富HiLife
              </label>
              <img
                src={`${devUrl}/images/cart/HiLife.png`}
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {payMethodSelect === '3' ? (
        <>
          <div className="w-100 mt-4"></div>
          {/* <!-- ATM銀行轉帳 --> */}
          <div className="col-12 d-flex flex-wrap">
            <div className="form-check col-12 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioBank"
                id="RadioCTBC"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioCTBC"
              >
                中國信託銀行
              </label>
              <img
                src={`${devUrl}/images/cart/CTBC.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioBank"
                id="RadioCUB"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioCUB"
              >
                國泰世華銀行
              </label>
              <img
                src={`${devUrl}/images/cart/CUB.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioBank"
                id="RadioTFB"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioTFB"
              >
                台北富邦銀行
              </label>
              <img
                src={`${devUrl}/images/cart/TFB.png`}
                alt=""
              />
            </div>
            <div className="form-check col-12 d-flex align-items-center my-3">
              <input
                className="form-check-input mt-0"
                type="radio"
                name="RadioBank"
                id="RadioESB"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="RadioESB"
              >
                玉山銀行
              </label>
              <img
                src={`${devUrl}/images/cart/ESB.png`}
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default PayInfo
