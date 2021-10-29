import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'
import $ from 'jquery'

// 全頁通用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import CartItem from '../../components/cart/CartItem'

function CartStep01(props) {
  const [cartFooterMb, setCartFooterMb] = useState(true)
  // modal
  const [counponModalShow, setCounponModalShow] =
    useState(false)
  const handleCounponModalClose = () =>
    setCounponModalShow(false)
  const handleCounponModalShow = () =>
    setCounponModalShow(true)
  useEffect(() => {
    $('#counponCanUse .modal-card').on(
      'click',
      function () {
        if ($(this).attr('isChecked') !== 'checked') {
          $(this).attr('isChecked', 'checked')
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
          $(this).siblings().attr('isChecked', '')
          $(this)
            .children()
            .last()
            .html(
              `<img src="${devUrl}/images/cart/checked_icon.svg" alt="">`
            )
          $('#counponCanUse .modal-card').each(function (
            i,
            v
          ) {
            if ($(this).attr('isChecked') !== 'checked') {
              $(this)
                .children()
                .last()
                .html(
                  `<img src="${devUrl}/images/cart/check_icon.svg" alt="">`
                )
            }
          })
        }
      }
    )
  }, [counponModalShow])
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
              <span className="cartSideListItemNum c-blue bgc-white">
                2
              </span>
              <span className="cartSideListItemTxt c-white">
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
            <div className="cartSideListLine1"></div>
            <div className="cartSideListLine2"></div>
          </div>
          {/* <!-- Main Content --> */}
          <div className="cartMain container col-10 col-md-5">
            {/* <!-- 購物車標題 --> */}
            <div className="row">
              <div className="cartTitle">
                <img
                  src={`${devUrl}/images/cart/cart_icon.svg`}
                  alt=""
                  className="cartIcon"
                />
                <span className="cartTitleTxt">購物車</span>
                <span className="cartQuality">
                  已加入 3 堂課
                </span>
              </div>
              <div className="w-100"></div>
              <div className="cartSort container">
                <div className="row w-100">
                  <span className="cartSortTxt col-3">
                    課程預覽
                  </span>
                  <span className="cartSortTxt col-3">
                    課程全名
                  </span>
                  <span className="cartSortTxt col">
                    開課狀態
                  </span>
                  <span className="cartSortTxt col-2">
                    售價
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- 購物車item --> */}
            <div className="row">
              <CartItem />
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
                {/* <!-- <div className="w-100 mt-3"></div>
                        <a href="#" className="ml-auto mr-auto" onClick={handleCounponModalShow}>
                            <span className="selectCoupon">點我選擇優惠券</span>
                        </a> --> */}
                <div className="w-100 mt-3"></div>
                <Link
                  to="#/"
                  className="ml-auto"
                  onClick={handleCounponModalShow}
                >
                  <span className="selectOtherCoupon">
                    選擇其他優惠券
                  </span>
                </Link>
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
                className="btn cartCheckoutBtn"
                onClick={() => {
                  props.history.push('/Cart/Step02')
                }}
              >
                我要結帳
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={counponModalShow}
        onHide={handleCounponModalClose}
        id="counponModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="counponModalTitle">
            選擇優惠券
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="counponModalBody">
          <div className="container-fluid">
            {/* <!-- 分類標題 --> */}
            <div className="row modal-body-title">
              <div className="col-4 text-center">
                優惠券類別
              </div>
              <div className="col-4 text-center">
                詳細說明
              </div>
              <div className="col-2 text-center">
                有效期限
              </div>
              <div className="col-2 text-center">選取</div>
            </div>
            {/* <!-- 可用/不可用標題 --> */}
            <div className="row">
              <div className="col-12 modal-card-title">
                可使用的優惠券
              </div>
            </div>
          </div>
          <div
            id="counponCanUse"
            className="container-fluid "
          >
            {/* <!-- 優惠券 --> */}
            <div className="row modal-card">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="row modal-card">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="row modal-card">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container-fluid mt-5">
            {/* <!-- 不可用標題 --> */}
            <div className="row">
              <div className="col-12 modal-card-title">
                無法套用的優惠券
              </div>
            </div>
            {/* <!-- disable優惠券 --> */}
            <div className="row modal-card disable">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="row modal-card disable">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
            <div className="row modal-card disable">
              <div className="col-6 col-md-4 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/coupon.svg`}
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4">
                <span>帳號內首筆訂單可使用</span>
                <div className="w-100"></div>
                <span>不限制訂單內課程購買數量</span>
              </div>
              <div className="col-6 col-md-2 text-center">
                2021.12.31
              </div>
              <div className="col-2 offset-4 offset-md-0 text-center p-0">
                <img
                  src={`${devUrl}/images/cart/check_icon.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            id="checkBtn"
            onClick={handleCounponModalClose}
          >
            確認
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleCounponModalClose}
          >
            取消
          </button>
        </Modal.Footer>
      </Modal>
      <TcBgDecorationNormal />
      <Footer
        cartFooterMb={cartFooterMb}
        setCartFooterMb={setCartFooterMb}
      />
    </>
  )
}

export default withRouter(CartStep01)
