import React, { useState } from 'react'
import './style/st_order.css'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar from '../../components/st/StSideBar'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

function StOrder() {
  // modal
  const [cancelModalShow, setCancelModalShow] =
    useState(false)
  const handleCancelModalClose = () =>
    setCancelModalShow(false)
  const handleCancelModalShow = () =>
    setCancelModalShow(true)
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
              <div className="row">
                <Link
                  to="#/"
                  className="col-3 col-md-2 stOrderContentTitle active"
                >
                  <span>全部</span>
                </Link>
                <Link
                  to="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>待付款</span>
                </Link>
                <Link
                  to="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>已付款</span>
                </Link>
                <Link
                  to="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>已取消</span>
                </Link>
              </div>
              {/* <!-- orders --> */}
              <div className="row">
                <div className="container stOrders">
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
                  <div className="row stOrderDetail">
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
                    <div className="col-12 col-md-2 stOrderDetailItem m-d-none">
                      <Link to="#/">
                        <img
                          src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="row stOrderDetail">
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
                    <div className="col-2 stOrderDetailItem m-d-none">
                      <Link to="#/">
                        <img
                          src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="row stOrderDetail">
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
                    <div className="col-2 stOrderDetailItem m-d-none">
                      <Link to="#/">
                        <img
                          src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="row stOrderDetail">
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
                    <div className="col-2 stOrderDetailItem m-d-none">
                      <Link to="#/">
                        <img
                          src={`${devUrl}/images/st_order/orderDetail_icon.svg`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <!-- 訂單明細 --> */}
                  <div className="row stPayMethod m-0 bgc-main">
                    <div className="col-12 payTitle">
                      <span>訂單明細</span>
                      <div className="btn stOrderBackBtn">
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
                          <span className="col-4">
                            課程預覽
                          </span>
                          <span className="col-4">
                            課程名稱
                          </span>
                          <span className="col-4">
                            課程售價
                          </span>
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
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
