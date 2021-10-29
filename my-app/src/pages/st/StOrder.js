import React, { useState, useEffect } from 'react'
import './style/st_order.css'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar from '../../components/st/StSideBar'
import StOrderDetail from '../../components/st/StOrderDetail'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

function StOrder() {
  // tab
  const [tab, setTab] = useState(1)
  // set order & orderdetail
  const [showDetail, setShowDetail] = useState(false)
  useEffect(() => {
    const stPM = document.querySelector('.stPayMethod')
    if (!showDetail) {
      let t = document.querySelector(
        `.stOrderContentTitle${tab}`
      )
      let st = document.querySelector(`.stODC${tab}`)
      for (let i = 1; i < 5; i++) {
        document
          .querySelector(`.stOrderContentTitle${i}`)
          .classList.remove('active')
        document
          .querySelector(`.stODC${i}`)
          .classList.remove('tab-d-flex')
        document
          .querySelector(`.stODC${i}`)
          .classList.add('tab-d-none')
      }
      console.log('tab:', tab)
      t.classList.add('active')
      st.classList.remove('tab-d-none')
      st.classList.add('tab-d-flex')
      const stOrderHeight =
        document.querySelector('.stOrders').scrollHeight
      const stOrderDetailHeight =
        document.querySelector('.stPayMethod').scrollHeight
      console.log(stOrderHeight, stOrderDetailHeight)
      stPM.style.transform = `translateX(100%)`
      stPM.style.marginTop = `${
        stOrderDetailHeight - stOrderHeight + 16
      }px`
    } else {
      const stOrderHeight =
        document.querySelector('.stOrders').scrollHeight
      const stOrderDetailHeight =
        document.querySelector('.stPayMethod').scrollHeight
      console.log(stOrderHeight, stOrderDetailHeight)
      stPM.style.transform = `translateX(0%)`
      stPM.style.marginTop = `${
        stOrderDetailHeight - stOrderHeight + 16
      }px`
    }
  }, [tab, showDetail])
  // modal
  const [cancelModalShow, setCancelModalShow] =
    useState(false)
  const handleCancelModalClose = () =>
    setCancelModalShow(false)
  const handleCancelModalShow = () =>
    setCancelModalShow(true)
  // stOrder
  const stOrder = (
    <>
      {/* <!-- 分類欄 --> */}
      <div className="row stOrderDetailTitle m-d-none">
        <div className="col-3 stOrderDetailTitleTxt">
          <span>成立時間</span>
        </div>
        <div className="col-3 stOrderDetailTitleTxt">
          <span>訂單編號</span>
        </div>
        <div className="col-2 stOrderDetailTitleTxt">
          <span>訂單狀態</span>
        </div>
        <div className="col-2 stOrderDetailTitleTxt">
          <span>訂單金額</span>
        </div>
        <div className="col-2 stOrderDetailTitleTxt">
          <span>詳情</span>
        </div>
      </div>
      {/* <!-- orderItem --> */}
      {/* 全部 */}
      <div className="row stOrderDetailContent stODC1">
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>AAA00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div
            className="col-12 col-md-2 stOrderDetailItem m-d-none stOrderDetailBtn"
            onClick={() => {
              setShowDetail(true)
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
            }}
          >
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon_m.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>BBB00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>CCC00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem text-danger">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>待付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>DDD00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已取消</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 待付款 */}
      <div className="row stOrderDetailContent stODC2">
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>CCC00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem text-danger">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>待付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 已付款 */}
      <div className="row stOrderDetailContent stODC3">
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>AAA00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>BBB00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已付款</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 已取消 */}
      <div className="row stOrderDetailContent stODC4">
        <div className="stOrderDetail">
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>成立時間</span>
            </div>
            <span>2021-12-01 23:00:12</span>
          </div>
          <div className="col-12 col-md-3 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單編號</span>
            </div>
            <span>DDD00123456</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單狀態</span>
            </div>
            <span>已取消</span>
          </div>
          <div className="col-12 col-md-2 stOrderDetailItem">
            <div className="stOrderDetailItem-t">
              <span>訂單金額</span>
            </div>
            <span>NT$7310</span>
          </div>
          <div className="col-2 stOrderDetailItem m-d-none stOrderDetailBtn">
            <img
              src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText order">
              Order
            </span>
          </div>
        </div>
        <div className="row">
          <StSideBar />
          <form className="form col-12 offset-0 col-md-9 offset-md-1">
            <ConfirmMsg />
            <div className="form-head ml-1 px-3">
              <Link to="#/">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="form-title">訂單查詢</div>
              <Link to="#/">
                <i className="TCback-btn"></i>
              </Link>
            </div>

            <div className="stOrderContent container">
              {/* 假input radio */}
              <div className="row">
                <input
                  type="radio"
                  name="tabCtrl"
                  id="stOrderContentTitleTab1"
                  className="tabCtrl"
                  value="1"
                  onChange={(e) => {
                    setTab(e.target.value)
                  }}
                />
                <input
                  type="radio"
                  name="tabCtrl"
                  id="stOrderContentTitleTab2"
                  className="tabCtrl"
                  value="2"
                  onChange={(e) => {
                    setTab(e.target.value)
                  }}
                />
                <input
                  type="radio"
                  name="tabCtrl"
                  id="stOrderContentTitleTab3"
                  className="tabCtrl"
                  value="3"
                  onChange={(e) => {
                    setTab(e.target.value)
                  }}
                />
                <input
                  type="radio"
                  name="tabCtrl"
                  id="stOrderContentTitleTab4"
                  className="tabCtrl"
                  value="4"
                  onChange={(e) => {
                    setTab(e.target.value)
                  }}
                />
              </div>
              {/* Title Tab */}
              <div className="row stOrderContentTitleTab">
                <label
                  for="stOrderContentTitleTab1"
                  class="col-3 col-md-2 stOrderContentTitle stOrderContentTitle1"
                >
                  <span>全部</span>
                </label>
                <label
                  for="stOrderContentTitleTab2"
                  class="col-3 col-md-2 stOrderContentTitle stOrderContentTitle2"
                >
                  <span>待付款</span>
                </label>
                <label
                  for="stOrderContentTitleTab3"
                  class="col-3 col-md-2 stOrderContentTitle stOrderContentTitle3"
                >
                  <span>已付款</span>
                </label>
                <label
                  for="stOrderContentTitleTab4"
                  class="col-3 col-md-2 stOrderContentTitle stOrderContentTitle4"
                >
                  <span>已取消</span>
                </label>
              </div>
              {/* <!-- orders --> */}
              <div className="row">
                <div className="container stOrders">
                  {stOrder}
                  <StOrderDetail
                    handleCancelModalShow={
                      handleCancelModalShow
                    }
                    setShowDetail={setShowDetail}
                  />
                  {/* {showDetail ? (
                    <StOrderDetail
                      handleCancelModalShow={
                        handleCancelModalShow
                      }
                      setShowDetail={setShowDetail}
                    />
                  ) : (
                    stOrder
                  )} */}
                  {/* <!-- 訂單明細 --> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Cancel Modal */}
      <Modal
        show={cancelModalShow}
        onHide={handleCancelModalClose}
        id="cancelModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>取消訂單</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container bgc-main py-3">
            <div class="row">
              <div class="col-4 d-flex flex-column align-items-end">
                <span>訂單編號：</span>
                <div class="w-100"></div>
                <span>付款方式：</span>
                <div class="w-100"></div>
                <span>訂單金額：</span>
                <div class="w-100"></div>
                <span>成立時間：</span>
                <div class="w-100"></div>
                <span>取消原因：</span>
              </div>
              <div class="col-8 d-flex flex-column">
                <span>ABC - 00123456</span>
                <div class="w-100"></div>
                <span>信用卡</span>
                <div class="w-100"></div>
                <span>NT$7310</span>
                <div class="w-100"></div>
                <span>2021-12-01 23:00:12</span>
                <div class="w-100"></div>
                <form action="">
                  <div class="form-check d-flex align-items-center">
                    <input
                      class="form-check-input mt-0"
                      type="radio"
                      name="cancelRadio"
                      id="cancelReason1"
                    />
                    <label
                      class="form-check-label mx-2"
                      for="cancelReason1"
                    >
                      課程內容不符需求
                    </label>
                  </div>
                  <div class="form-check d-flex align-items-center">
                    <input
                      class="form-check-input mt-0"
                      type="radio"
                      name="cancelRadio"
                      id="cancelReason2"
                    />
                    <label
                      class="form-check-label mx-2"
                      for="cancelReason2"
                    >
                      暫時中止學習規劃
                    </label>
                  </div>
                  <div class="form-check d-flex align-items-center">
                    <input
                      class="form-check-input mt-0"
                      type="radio"
                      name="cancelRadio"
                      id="cancelReason3"
                    />
                    <label
                      class="form-check-label mx-2"
                      for="cancelReason3"
                    >
                      重複選購
                    </label>
                  </div>
                  <div class="form-check d-flex align-items-start flex-wrap">
                    <input
                      class="form-check-input mt-0"
                      type="radio"
                      name="cancelRadio"
                      id="cancelReason4"
                    />
                    <label
                      class="form-check-label mx-2"
                      for="cancelReason4"
                    >
                      其他
                    </label>
                    <div class="w-100"></div>
                    <textarea
                      class="form-control"
                      id="cancelReason4"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            id="checkBtn"
          >
            確認
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleCancelModalClose}
          >
            取消
          </button>
        </Modal.Footer>
      </Modal>
      <StBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(StOrder)
