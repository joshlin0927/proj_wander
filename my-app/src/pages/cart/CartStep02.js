import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'

// 全頁通用元件
import Footer from '../../components/Footer'
function CartStep02(props) {
  const [cartFooterMb, setCartFooterMb] = useState(true)
  const textLength = (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, '')
  }
  // modal
  const [checkModalShow, setCheckModalShow] =
    useState(false)
  const handleCheckModalClose = () =>
    setCheckModalShow(false)
  const handleCheckModalShow = () => setCheckModalShow(true)
  return (
    <>
      {/* <!-- Main --> */}
      <div className="container-fluid p-0 mb-footer">
        <div className="row align-items-start m-0">
          {/* <!-- SideList --> */}
          <div className="cartSideList col-10 offset-1 col-md-3 offset-md-0">
            <img
              src={`${devUrl}/images/cart/cartSideList.svg`}
              alt=""
              className="cartSideListImage"
            />
            <div className="cartSideListItem">
              <span className="cartSideListItemNum">1</span>
              <span className="cartSideListItemTxt">
                確認購物車內容
              </span>
            </div>
            <div className="cartSideListItem">
              <span className="cartSideListItemNum c-white bgc-blue">
                2
              </span>
              <span className="cartSideListItemTxt c-blue">
                選擇付款方式
              </span>
            </div>
            <div className="cartSideListItem">
              <span className="cartSideListItemNum c-blue bgc-white">
                3
              </span>
              <span className="cartSideListItemTxt c-white">
                完成訂單&付款
              </span>
            </div>
            <div className="cartSideListLine1 bd-blue"></div>
            <div className="cartSideListLine2"></div>
          </div>
          {/* <!-- Main Content --> */}
          <div className="cartMain container col-10 col-md-5">
            {/* <!-- 購物車標題 --> */}
            <div className="row">
              <div className="cartTitle">
                <img
                  src={`${devUrl}/images/cart/checkout_icon.svg`}
                  alt=""
                  className="cartIcon"
                />
                <span className="cartTitleTxt">
                  結帳資訊
                </span>
                <Link to="/Cart/Step01">
                  <span className="cartBackStep">
                    回到上一步
                  </span>
                </Link>
              </div>
            </div>
            {/* <!-- 付款方式 --> */}
            <div className="row payMethod">
              <div className="col-12 payTitle">
                <span>付款方式</span>
              </div>
              <div className="w-100 mt-4"></div>
              <div className="col-12 col-md-6 payMethodSelect">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                >
                  <option defaultValue="0">
                    請選擇付款方式...
                  </option>
                  <option value="1">
                    信用卡 (支援信用卡與簽帳卡)
                  </option>
                  <option value="2">超商代碼</option>
                  <option value="3">ATM轉帳匯款</option>
                </select>
              </div>
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
              <div
                id="payMethodSelectInfo2"
                className="col-12 col-md-6 payMethodSelectInfo"
              >
                <span className="text-danger">
                  注意事項：
                </span>
                <div className="w-100"></div>
                <span>
                  超商代碼繳費時限為7天，請務必於期限內進行繳費。
                </span>
              </div>
              <div
                id="payMethodSelectInfo3"
                className="col-12 col-md-6 payMethodSelectInfo"
              >
                <span className="text-danger">
                  注意事項：
                </span>
                <div className="w-100"></div>
                <span>
                  平台僅提供部分銀行，如有跨行轉帳之手續費需由買方負擔。
                </span>
                <div className="w-100"></div>
                <span>
                  請於取得平台轉帳帳號後於48小時內完成匯款。
                </span>
              </div>
            </div>
            {/* <!-- 付款資訊 --> */}
            <div className="row payInfo">
              <div className="col-12 payTitle">
                <span>付款資訊</span>
              </div>
              <div className="w-100 mt-4"></div>
              {/* <!-- 信用卡 --> */}
              <div className="col-12 payInfoInput">
                <div className="input-group align-items-center flex-wrap">
                  <label className="inputCategory">
                    信用卡號
                  </label>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="4"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="4"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="4"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="4"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                </div>
                <div className="input-group align-items-center mt-3 flex-wrap">
                  <label className="inputCategory">
                    有效期限
                  </label>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="2"
                    placeholder="YY"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="2"
                    placeholder="MM"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                </div>
                <div className="input-group align-items-center mt-3 flex-wrap">
                  <label className="inputCategory">
                    檢核碼
                  </label>
                  <input
                    type="text"
                    className="allInputs fourLengthInput"
                    maxLength="3"
                    placeholder="000"
                    onInput={(e) => {
                      textLength(e)
                    }}
                  />
                </div>
                <div className="input-group align-items-center mt-3 flex-wrap">
                  <label className="inputCategory">
                    持卡人姓名
                  </label>
                  <input
                    type="text"
                    className="allInputs longLengthInput"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div className="input-group align-items-center mt-3 flex-wrap">
                  <label className="inputCategory">
                    手機號碼
                  </label>
                  <input
                    type="text"
                    className="allInputs longLengthInput"
                    onInput={(e) => {
                      textLength(e)
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
                  <span className="credit-MY">
                    Month/Year
                  </span>
                  <span className="credit-date">11/24</span>
                </div>
              </div>
              <div className="w-100 mt-4"></div>
              {/* <!-- 超商代碼 --> */}
              <div className="col-12 d-flex flex-wrap">
                <div className="form-check col-12 col-md-6 d-flex align-items-center my-3">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    name="RadioCStore"
                    id="Radio7-Eleven"
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
            </div>
          </div>
          {/* <!-- Checkout Detail --> */}
          <div className="checkout container col-10 col-md-2">
            <div className="row">
              <div className="checkoutTitle">
                <span>結帳明細</span>
              </div>
              <div className="checkoutSubtotal">
                <span>小計</span>
                <span>NT$8100</span>
                <div className="w-100"></div>
                <span>折扣</span>
                <span>-NT$810</span>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="checkoutTotal">NT$ 7310</div>
            </div>
            {/* <!-- 選擇優惠券 --> */}
            <div className="row justify-content-center">
              <div className="couponTitle-m">優惠券</div>
              <div className="checkoutCoupon">
                <span>選擇使用的優惠券：</span>
                <div className="w-100 mt-3 counponImage">
                  <img
                    src={`${devUrl}/images/cart/coupon.svg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="couponTitle-m">結帳明細</div>
              <div className="checkoutSubtotal-m">
                <span>小計</span>
                <span>NT$8100</span>
                <div className="w-100"></div>
                <span>折扣</span>
                <span>-NT$810</span>
                <div className="w-100 my-2 border-bottom"></div>
                <span>結帳金額</span>
                <span>NT$7310</span>
              </div>
            </div>
            <div className="row">
              <div className="checkoutTitle">
                <span>購買清單</span>
                <button
                  className="btn editCheckBtn"
                  onClick={() => {
                    props.history.push('/Cart/Step01')
                  }}
                >
                  修改
                </button>
              </div>
              <div className="editCheckList container">
                <div className="row align-items-center">
                  <div className="w-100 my-2"></div>
                  <div className="col-5 pr-0">
                    <img
                      src={`${devUrl}/images/cart/jp_course.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    日本自由行必學的實用日語會話
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col-5 pr-0">
                    <img
                      src={`${devUrl}/images/cart/jp_course.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    日本自由行必學的實用日語會話
                  </div>
                  <div className="w-100 my-2"></div>
                  <div className="col-5 pr-0">
                    <img
                      src={`${devUrl}/images/cart/jp_course.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    日本自由行必學的實用日語會話
                  </div>
                  <div className="w-100 my-2"></div>
                </div>
              </div>
            </div>
            {/* <!-- 結帳按鈕 --> */}
            <div className="checkoutFooter">
              <div className="checkoutFooter-t">
                <span>結帳金額：</span>
              </div>
              <div className="checkoutTotal-m">
                <span className="checkoutTotal-m-1">
                  NT$7310
                </span>
                <div className="w-100"></div>
                <span className="checkoutTotal-m-2">
                  (優惠折抵：NT$810)
                </span>
              </div>
              <button
                className="btn checkoutBtn"
                data-toggle="modal"
                data-target="#checkModal"
                onClick={handleCheckModalShow}
              >
                確認付款
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={checkModalShow}
        onHide={handleCheckModalClose}
        id="confirmCheckModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>確認付款</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>確認送出訂單並進行付款？</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn confirmBtn"
            id="checkBtn"
            onClick={() => {
              props.history.push('/Cart/Step03')
            }}
          >
            確認
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleCheckModalClose}
          >
            取消
          </button>
        </Modal.Footer>
      </Modal>
      <Footer
        cartFooterMb={cartFooterMb}
        setCartFooterMb={setCartFooterMb}
      />
    </>
  )
}

export default withRouter(CartStep02)
