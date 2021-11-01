import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { devUrl, Cart_API } from '../../config'
import axios from 'axios'
import $ from 'jquery'

// 全頁通用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import CartItem from '../../components/cart/CartItem'
import CounponCard from '../../components/cart/CounponCard'
import SelectOtherCounpon from '../../components/cart/SelectOtherCounpon'
import NotSelectCounpon from '../../components/cart/NotSelectCounpon'
import CartSummary from '../../components/cart/CartSummary'

function CartStep01(props) {
  const [cartData, setCartData] = useState([{}])
  const [cartQty, setCartQty] = useState(0)
  const [cartFooterMb, setCartFooterMb] = useState(true)
  const [counponSelect, setCounponSelect] = useState('')
  const [counponIsUsed, setCounponIsUsed] = useState(
    sessionStorage.getItem('counponID')
  )
  // modal
  const [counponModalShow, setCounponModalShow] =
    useState(false)
  const handleCounponModalClose = () =>
    setCounponModalShow(false)
  const handleCounponModalShow = () =>
    setCounponModalShow(true)
  // 取得該會員購物車資料
  const member = JSON.parse(localStorage.getItem('member'))
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${Cart_API}/list?member_sid=${member.sid}`
      )
      console.log('rows:', r.data.result)
      if (r.data.success) {
        setCartData(r.data.result)
        setCartQty(r.data.result.length)
      } else {
        setCartQty(0)
      }
    })()
  }, [member.sid])
  // 新增購物車資料
  function addCart(courseID) {
    fetch(`${Cart_API}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_sid: member.sid,
        product_sid: courseID,
      }),
    })
      .then((r) => r.json())
      .then((obj) => {
        if (obj.success) {
          console.log('新增成功：', obj)
        } else {
          console.log(obj.error)
        }
      })
  }
  // counpon打勾效果
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
          $('#counponCanUse .modal-card').each(function () {
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
  }, [counponModalShow, counponSelect])
  useEffect(() => {
    const counponItem = document.querySelector(
      `#counponCard${counponIsUsed}`
    )
    if (counponItem) {
      counponItem.classList.add('active')
      counponItem.lastChild.innerHTML = `<img src="${devUrl}/images/cart/checked_icon.svg" alt="">`
    }
  }, [counponModalShow, counponIsUsed])

  // 計算總價
  const total = () => {
    let sum = 0
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i].course_price
    }
    return sum
  }
  // 計算折扣
  const discount = (t) => {
    switch (counponIsUsed) {
      case 'c1':
        return Math.floor(t * 0.1)
      case 'c2':
        return Math.floor(t * 0.05)
      case 'c3':
        return 100
      default:
        return 0
    }
  }
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
                  已加入 {cartQty} 堂課
                </span>
              </div>
              <div className="w-100"></div>
              <div
                className="btn"
                onClick={() => {
                  addCart(1)
                }}
              >
                新增product1
              </div>
              <div
                className="btn"
                onClick={() => {
                  addCart(2)
                }}
              >
                新增product2
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
              {cartQty === 0 ? (
                <span className="emptyCart">
                  購物車內無項目
                </span>
              ) : (
                cartData.map((v, i) => {
                  return (
                    <CartItem
                      key={i}
                      index={i}
                      product_sid={v.product_sid}
                      name={v.course_name}
                      price={v.course_price}
                      status={v.course_status}
                      img={v.course_img}
                      cartQty={cartQty}
                      setCartQty={setCartQty}
                      cartData={cartData}
                      setCartData={setCartData}
                    />
                  )
                })
              )}
            </div>
          </div>
          {/* <!-- Checkout Detail --> */}
          <div className="checkout container col-10 col-md-2">
            <CartSummary
              total={total()}
              discount={discount}
            />
            {/* <!-- 選擇優惠券 --> */}
            <div className="row justify-content-center">
              <div className="couponTitle-m">優惠券</div>
              <div className="checkoutCoupon">
                <span>選擇使用的優惠券：</span>
                {counponIsUsed === null ? (
                  <NotSelectCounpon
                    handleCounponModalShow={
                      handleCounponModalShow
                    }
                  />
                ) : (
                  <SelectOtherCounpon
                    handleCounponModalShow={
                      handleCounponModalShow
                    }
                  />
                )}
              </div>
              <div className="couponTitle-m">結帳明細</div>
              <div className="checkoutSubtotal-m">
                <span>小計</span>
                <span>NT${total()}</span>
                <div className="w-100"></div>
                <span>折扣</span>
                <span>-NT${discount(total())}</span>
                <div className="w-100 my-2 border-bottom"></div>
                <span>結帳金額</span>
                <span>
                  NT${total() - discount(total())}
                </span>
              </div>
            </div>
            {/* <!-- 結帳按鈕 --> */}
            <div className="checkoutFooter">
              <div className="checkoutFooter-t">
                <span>結帳金額：</span>
              </div>
              <div className="checkoutTotal-m">
                <span className="checkoutTotal-m-1">
                  NT${total() - Math.floor(total() * 0.1)}
                </span>
                <div className="w-100"></div>
                <span className="checkoutTotal-m-2">
                  (優惠折抵：NT${Math.floor(total() * 0.1)})
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
            <div className="row">
              <input
                type="radio"
                name="counponCtrl"
                id="counponTabc1"
                className="counponCtrl"
                value="c1"
                onChange={(e) => {
                  setCounponSelect(e.target.value)
                }}
              />
              <input
                type="radio"
                name="counponCtrl"
                id="counponTabc2"
                className="counponCtrl"
                value="c2"
                onChange={(e) => {
                  setCounponSelect(e.target.value)
                }}
              />
              <input
                type="radio"
                name="counponCtrl"
                id="counponTabc3"
                className="counponCtrl"
                value="c3"
                onChange={(e) => {
                  setCounponSelect(e.target.value)
                }}
              />
            </div>
            {/* <!-- 優惠券 --> */}
            <CounponCard counponTab={'c1'} />
            <CounponCard counponTab={'c2'} />
            <CounponCard counponTab={'c3'} />
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
            onClick={() => {
              handleCounponModalClose()
              sessionStorage.setItem(
                'counponID',
                counponSelect
              )
              setCounponIsUsed(counponSelect)
            }}
          >
            確認使用
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={() => {
              handleCounponModalClose()
              sessionStorage.removeItem('counponID')
              setCounponIsUsed(null)
            }}
          >
            不使用優惠券
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
