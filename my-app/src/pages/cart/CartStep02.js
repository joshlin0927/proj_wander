import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import {
  devUrl,
  Cart_API,
  SendOrder_API,
} from '../../config'
import axios from 'axios'

// 頁面元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import PayMethodSelectInfo from '../../components/cart/PayMethodSelectInfo'
import PayInfo from '../../components/cart/PayInfo'
import CartSummary from '../../components/cart/CartSummary'
import EditCheckList from '../../components/cart/EditCheckList'
import Footer from '../../components/Footer'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'

function CartStep02(props) {
  // footer css
  const [cartFooterMb, setCartFooterMb] = useState(true)
  // 下拉選單state
  const [payMethodSelect, setPayMethodSelect] = useState('')
  const [cstoresort, setCstoresort] = useState(0)
  // modal
  const [checkModalShow, setCheckModalShow] =
    useState(false)
  const handleCheckModalClose = () =>
    setCheckModalShow(false)
  const handleCheckModalShow = () => setCheckModalShow(true)
  const [alertModalShow, setAlertModalShow] =
    useState(false)
  const handleAlertModalClose = () =>
    setAlertModalShow(false)
  const handleAlertModalShow = () => setAlertModalShow(true)
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)
  // states
  const [cartData, setCartData] = useState([{}])
  const [cartQty, setCartQty] = useState(-1)
  const counponID = sessionStorage.getItem('counponID')
  // 取得該會員購物車資料
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${Cart_API}/list?member_sid=${member.sid}`
      )
      if (r.data.success) {
        setCartData(r.data.result)
        setCartQty(r.data.result.length)
      } else {
        setCartQty(0)
      }
    })()
  }, [member.sid])
  // 計算總價
  const total = () => {
    if (cartQty === 0) {
      return 0
    } else {
      let sum = 0
      for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].course_price
      }
      return sum
    }
  }
  // 計算折扣
  const discount = (t) => {
    switch (counponID) {
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
  // 送出訂單
  function sendToOrder() {
    const sendOrderMain = {
      total_price: 0,
      pay_method: '', //1信用卡 2超商 3銀轉
      cstoresort: 0, //1seven 2fami 3ok 4hilife
      order_id: '',
      order_status: 0, //0待付款 1已付款 2已取消
      member_sid: member.sid,
    }
    const sendOrderDetail = {
      order_main_id: '',
      product_sid: [],
    }
    const newID =
      String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      ) +
      String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      ) +
      (
        Math.floor(Math.random() * 899999) + 100000
      ).toString()
    if (payMethodSelect) {
      sendOrderMain.total_price =
        total() - discount(total())
      sendOrderMain.pay_method = payMethodSelect
      sendOrderMain.cstoresort = cstoresort
      sendOrderMain.order_id = newID
      sendOrderDetail.order_main_id = newID
      cartData.forEach((v, i) => {
        sendOrderDetail.product_sid[i] = v.product_sid
      })
    }

    if (
      sendOrderMain.order_id !== '' &&
      sendOrderDetail.order_main_id !== ''
    ) {
      sessionStorage.setItem(
        'order',
        JSON.stringify(sendOrderMain)
      )
      console.log('傳資料囉')
      ;(async () => {
        let rm = await axios.post(
          `${SendOrder_API}/add/main`,
          sendOrderMain
        )
        let rd = await axios.post(
          `${SendOrder_API}/add/detail`,
          sendOrderDetail
        )
        if (!rm.data.success) {
          alert(rm.data.error)
        }
        if (!rd.data.success) {
          alert(rd.data.error)
        }
        if (rm.data.success && rd.data.success) {
          props.history.push('/Cart/Step03')
        }
      })()
    }
  }
  return (
    <>
      <div className="container cartBread">
        <MultiLevelBreadCrumb />
      </div>
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
              <PayInfo
                payMethodSelect={payMethodSelect}
                setCstoresort={setCstoresort}
              />
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
                <div className="w-100 mt-3 counponImage">
                  <img
                    src={`${devUrl}/images/cart/coupon${counponID}.svg`}
                    alt=""
                  />
                </div>
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
                  {cartQty === 0
                    ? handleStopModalShow()
                    : cartData.map((v, i) => {
                        return (
                          <EditCheckList
                            key={i}
                            product_sid={v.product_sid}
                            name={v.course_name}
                            img={v.course_img}
                          />
                        )
                      })}
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
                  NT${total() - discount(total())}
                </span>
                <div className="w-100"></div>
                <span className="checkoutTotal-m-2">
                  (優惠折抵：NT${discount(total())})
                </span>
              </div>
              <button
                className="btn cartCheckoutBtn"
                data-toggle="modal"
                data-target="#checkModal"
                onClick={
                  payMethodSelect
                    ? handleCheckModalShow
                    : handleAlertModalShow
                }
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
              sendToOrder()
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
      <Modal
        show={alertModalShow}
        onHide={handleAlertModalClose}
        id="alertModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>請先選擇付款方式</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleAlertModalClose}
          >
            確認
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={stopModalShow}
        onHide={handleStopModalClose}
        id="alertModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>購物車內無項目</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={() => {
              props.history.push('/')
            }}
          >
            返回首頁
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

export default withRouter(CartStep02)
