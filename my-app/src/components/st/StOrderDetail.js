import React, { useState, useEffect } from 'react'
import { SendOrder_API, Calendar_API } from '../../config'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import Step3OrderDetailItem from '../../components/cart/Step3OrderDetailItem'

function StOrderDetail(props) {
  // modal
  const [cancelModalShow, setCancelModalShow] =
    useState(false)
  const handleCancelModalClose = () =>
    setCancelModalShow(false)
  const handleCancelModalShow = () =>
    setCancelModalShow(true)
  const [sendModalShow, setSendModalShow] = useState(false)
  const handleSendModalClose = () => setSendModalShow(false)
  const handleSendModalShow = () => setSendModalShow(true)
  // detailData
  const { setShowDetail, orderID, memberID } = props
  const [detailData, setDetailData] = useState([{}])
  useEffect(() => {
    ;(async () => {
      let o = await axios.get(
        `${SendOrder_API}/detailList?member_sid=${memberID}&order_id=${orderID}`
      )
      if (o.data.success) {
        setDetailData(o.data.result)
      }
    })()
  }, [memberID, orderID])
  // sendToSchedule
  const sendToSchedule = async () => {
    const nameArr = []
    for (let i = 0; i < detailData.length; i++) {
      nameArr[i] = detailData[i].course_name
    }
    let o = await axios.put(
      `${SendOrder_API}/statusToOne?order_id=${orderID}`
    )
    if (o.data.success) {
      let r = await axios.post(`${Calendar_API}/add`, {
        member_sid: memberID,
        course_name: nameArr,
      })
      if (!r.data.success) {
        console.log('error:', r.data.error)
      }
    }
  }
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
            <span>{orderID}</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>付款方式：</span>
            {detailData[0].pay_method === 1 ? (
              <span>信用卡</span>
            ) : (
              ''
            )}
            {detailData[0].pay_method === 2 ? (
              <span>超商代碼</span>
            ) : (
              ''
            )}
            {detailData[0].pay_method === 3 ? (
              <span>ATM轉帳匯款</span>
            ) : (
              ''
            )}
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>訂單金額：</span>
            <span>NT${detailData[0].total_price}</span>
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>支付狀態：</span>
            {detailData[0].order_status === 0 ? (
              <>
                <span className="text-danger">待付款</span>
                <div
                  className="btn stOrderCancelBtn"
                  onClick={handleSendModalShow}
                >
                  完成付款
                </div>
              </>
            ) : (
              ''
            )}
            {detailData[0].order_status === 1 ? (
              <>
                <span>已付款</span>
                <div
                  className="btn stOrderCancelBtn"
                  data-toggle="modal"
                  data-target="#cancelModal"
                  onClick={handleCancelModalShow}
                >
                  我要取消
                </div>
              </>
            ) : (
              ''
            )}
            {detailData[0].order_status === 2 ? (
              <span>已取消</span>
            ) : (
              ''
            )}
          </div>
          <div className="orderContentRow col-12 col-xl-6">
            <span>成立時間：</span>
            <span>{detailData[0].created_at}</span>
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
            {detailData.length === 0
              ? ''
              : detailData.map((v, i) => {
                  return (
                    <Step3OrderDetailItem
                      name={v.course_name}
                      price={v.course_price}
                      img={v.course_img}
                    />
                  )
                })}
          </div>
        </div>
      </div>
      {/* Send Schedule Modal */}
      <Modal
        show={sendModalShow}
        onHide={handleSendModalClose}
        id="confirmCheckModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>完成付款</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>確認已完成付款？</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            id="checkBtn"
            onClick={() => {
              sendToSchedule()
              handleSendModalClose()
            }}
          >
            確認
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleSendModalClose}
          >
            取消
          </button>
        </Modal.Footer>
      </Modal>
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
                <span>{orderID}</span>
                <div class="w-100"></div>
                <span>
                  {' '}
                  {detailData[0].pay_method === 1 ? (
                    <span>信用卡</span>
                  ) : (
                    ''
                  )}
                  {detailData[0].pay_method === 2 ? (
                    <span>超商代碼</span>
                  ) : (
                    ''
                  )}
                  {detailData[0].pay_method === 3 ? (
                    <span>ATM轉帳匯款</span>
                  ) : (
                    ''
                  )}
                </span>
                <div class="w-100"></div>
                <span>NT${detailData[0].total_price}</span>
                <div class="w-100"></div>
                <span>{detailData[0].created_at}</span>
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
                      htmlFor="cancelReason1"
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
                      htmlFor="cancelReason2"
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
                      htmlFor="cancelReason3"
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
                      htmlFor="cancelReason4"
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
    </>
  )
}

export default StOrderDetail
