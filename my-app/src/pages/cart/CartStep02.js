import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'

// 頁面元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import PayMethodSelectInfo from '../../components/cart/PayMethodSelectInfo'
import PayInfo from '../../components/cart/PayInfo'
import Footer from '../../components/Footer'

function CartStep02(props) {
  // footer css
  const [cartFooterMb, setCartFooterMb] = useState(true)
  // 下拉選單state
  const [payMethodSelect, setPayMethodSelect] = useState('')
  // modal
  const [checkModalShow, setCheckModalShow] =
    useState(false)
  const handleCheckModalClose = () =>
    setCheckModalShow(false)
  const handleCheckModalShow = () => setCheckModalShow(true)
  return (
    <>
      <MultiLevelBreadCrumb />
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
                  id="payMethodSelect"
                  value={payMethodSelect}
                  onChange={(e) => {
                    setPayMethodSelect(e.target.value)
                  }}
                >
                  <option value="">
                    請選擇付款方式...
                  </option>
                  <option value="1">
                    信用卡 (支援信用卡與簽帳卡)
                  </option>
                  <option value="2">超商代碼</option>
                  <option value="3">ATM轉帳匯款</option>
                </select>
              </div>
              <PayMethodSelectInfo
                payMethodSelect={payMethodSelect}
              />
            </div>
            {/* <!-- 付款資訊 --> */}
            <div className="row payInfo">
              <div className="col-12 payTitle">
                <span>付款資訊</span>
              </div>
              <PayInfo payMethodSelect={payMethodSelect} />
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
            className="btn confirmBtn"
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
