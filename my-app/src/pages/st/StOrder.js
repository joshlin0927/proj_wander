import React, { useState, useEffect } from 'react'
import './style/st_order.css'
import { withRouter } from 'react-router-dom'
import { SendOrder_API } from '../../config'
import axios from 'axios'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar from '../../components/st/StSideBar'
import StOrderList from '../../components/st/StOrderList'
import StOrderDetail from '../../components/st/StOrderDetail'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

function StOrder(props) {
  //大頭貼狀態
  let [imgSrc, setImgSrc] = useState('')
  const member = JSON.parse(localStorage.getItem('member'))
  const [orderID, setOrderID] = useState('')
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : ''
  // tab
  const [tab, setTab] = useState(1)
  // set order & orderdetail
  const [showDetail, setShowDetail] = useState(false)
  const [orderData, setOrderData] = useState([])
  const [orderData0, setOrderData0] = useState([{}])
  const [orderData1, setOrderData1] = useState([{}])
  const [orderData2, setOrderData2] = useState([{}])
  useEffect(() => {
    if (token && member.identity === 0) {
      ;(async () => {
        let o = await axios.get(
          `${SendOrder_API}/list?member_sid=${member.sid}`
        )
        if (o.data.success) {
          setOrderData(o.data.result)
        }
        let r = await axios.get(
          `http://localhost:3001/stprofile/list?studentSid=${member.sid}`
        )
        setImgSrc(r.data[0][0].avatar)
      })()
    } else {
      props.history.push('/')
    }
  }, [member.sid, props.history, member.identity, token])
  useEffect(() => {
    // tab切換
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
    }
    // setOrder Status
    setOrderData0(
      orderData.filter((v) => {
        return v.order_status === 0
      })
    )
    setOrderData1(
      orderData.filter((v) => {
        return v.order_status === 1
      })
    )
    setOrderData2(
      orderData.filter((v) => {
        return v.order_status === 2
      })
    )
  }, [tab, showDetail, orderData])
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
        {console.log('orderDDD:', orderData)}
        {orderData.length === 0 ? (
          <div className="orderDataEmpty">
            目前沒有訂單資料
          </div>
        ) : (
          orderData.map((v, i) => {
            return (
              <StOrderList
                setShowDetail={setShowDetail}
                time={v.created_at}
                order_id={v.order_id}
                order_status={v.order_status}
                price={v.total_price}
                setOrderID={setOrderID}
              />
            )
          })
        )}
      </div>
      {/* 待付款 */}
      <div className="row stOrderDetailContent stODC2">
        {orderData.length === 0
          ? ''
          : orderData0.map((v, i) => {
              return (
                <StOrderList
                  setShowDetail={setShowDetail}
                  time={v.created_at}
                  order_id={v.order_id}
                  order_status={v.order_status}
                  price={v.total_price}
                  setOrderID={setOrderID}
                />
              )
            })}
      </div>
      {/* 已付款 */}
      <div className="row stOrderDetailContent stODC3">
        {orderData.length === 0
          ? ''
          : orderData1.map((v, i) => {
              return (
                <StOrderList
                  setShowDetail={setShowDetail}
                  time={v.created_at}
                  order_id={v.order_id}
                  order_status={v.order_status}
                  price={v.total_price}
                  setOrderID={setOrderID}
                />
              )
            })}
      </div>
      {/* 已取消 */}
      <div className="row stOrderDetailContent stODC4">
        {orderData.length === 0
          ? ''
          : orderData2.map((v, i) => {
              return (
                <StOrderList
                  setShowDetail={setShowDetail}
                  time={v.created_at}
                  order_id={v.order_id}
                  order_status={v.order_status}
                  price={v.total_price}
                  setOrderID={setOrderID}
                />
              )
            })}
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
          <StSideBar imgSrc={imgSrc} />
          <form className="form col-12 offset-0 col-md-9 offset-md-1">
            <ConfirmMsg />
            <div className="form-head ml-1">
              <div
                onClick={() => {
                  props.history.push(
                    '/StIndex/MemberCenter'
                  )
                }}
              >
                <i className="fas fa-chevron-left TCback-btn"></i>
              </div>
              <div className="form-title">訂單查詢</div>
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
                  htmlFor="stOrderContentTitleTab1"
                  className="col-3 col-md-2 stOrderContentTitle stOrderContentTitle1"
                >
                  <span>全部</span>
                </label>
                <label
                  htmlFor="stOrderContentTitleTab2"
                  className="col-3 col-md-2 stOrderContentTitle stOrderContentTitle2"
                >
                  <span>待付款</span>
                </label>
                <label
                  htmlFor="stOrderContentTitleTab3"
                  className="col-3 col-md-2 stOrderContentTitle stOrderContentTitle3"
                >
                  <span>已付款</span>
                </label>
                <label
                  htmlFor="stOrderContentTitleTab4"
                  className="col-3 col-md-2 stOrderContentTitle stOrderContentTitle4"
                >
                  <span>已取消</span>
                </label>
              </div>
              {/* <!-- orders --> */}
              <div className="row">
                <div className="container stOrders">
                  {showDetail ? (
                    <StOrderDetail
                      setShowDetail={setShowDetail}
                      orderID={orderID}
                      memberID={member.sid}
                    />
                  ) : (
                    stOrder
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bgbeige"></div>
      <StBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(StOrder)
