import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  devUrl,
  Cart_API,
  SendOrder_API,
} from '../../config'
import axios from 'axios'

// 全頁通用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import Step3PayDetail from '../../components/cart/Step3PayDetail'
import Step3OrderDetailItem from '../../components/cart/Step3OrderDetailItem'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'

function CartStep03(props) {
  const [orderData, setOrderData] = useState([{}])
  // 取得該會員訂單資料
  const member = JSON.parse(localStorage.getItem('member'))
  const order = JSON.parse(sessionStorage.getItem('order'))
  useEffect(() => {
    ;(async () => {
      let r = await axios.delete(
        `${Cart_API}/clear?member_sid=${member.sid}`
      )
      if (r.status === 200) {
        console.log('r', r)
      }
      let o = await axios.get(
        `${SendOrder_API}/list?member_sid=${member.sid}&order_id=${order.order_id}`
      )
      if (o.data.success) {
        setOrderData(o.data.result)
      }
    })()
  }, [member.sid, order.order_id])
  return (
    <>
      <MultiLevelBreadCrumb />
      {console.log('orderData', orderData)}
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
              <span className="cartSideListItemNum c-white bgc-blue">
                3
              </span>
              <span className="cartSideListItemTxt c-blue">
                完成訂單&付款
              </span>
            </div>
            <div className="cartSideListLine1 bd-blue"></div>
            <div className="cartSideListLine2 bd-blue"></div>
          </div>
          {/* <!-- Main Content --> */}
          <div className="cartMain container col-10 col-md-6">
            {/* <!-- 購物車標題 --> */}
            <div className="row">
              <div className="cartTitle">
                <img
                  src={`${devUrl}/images/cart/finish_icon.png`}
                  alt=""
                  className="cartIcon"
                />
                <span className="cartTitleTxt">
                  感謝您的購買
                </span>
                <span className="cartQuality">
                  請儘速完成付款
                </span>
              </div>
            </div>
            <Step3PayDetail
              total={orderData[0].total_price}
              time={orderData[0].created_at}
              payMethod={orderData[0].pay_method}
              cstoresort={orderData[0].cstoresort}
            />
            {/* <!-- 訂單明細 --> */}
            <div className="row payMethod">
              <div className="col-12 payTitle">
                <span>訂單明細</span>
                <button className="btn orderGoBtn">
                  前往會員中心查看 &rarr;
                </button>
              </div>
              <div className="orderContent col-12">
                <div className="orderContentRow col-12 col-xl-6">
                  <span>訂單編號：</span>
                  <span>{orderData[0].order_id}</span>
                </div>
                <div className="orderContentRow col-12 col-xl-6">
                  <span>付款方式：</span>
                  {orderData[0].pay_method === 1 ? (
                    <span>信用卡</span>
                  ) : (
                    ''
                  )}
                  {orderData[0].pay_method === 2 ? (
                    <span>超商代碼</span>
                  ) : (
                    ''
                  )}
                  {orderData[0].pay_method === 3 ? (
                    <span>ATM轉帳匯款</span>
                  ) : (
                    ''
                  )}
                </div>
                <div className="orderContentRow col-12 col-xl-6">
                  <span>訂單金額：</span>
                  <span>NT${orderData[0].total_price}</span>
                </div>
                <div className="orderContentRow col-12 col-xl-6">
                  <span>支付狀態：</span>
                  <span>待付款</span>
                </div>
                <div className="orderContentRow col-12 col-xl-6">
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
                  {orderData.length === 0
                    ? ''
                    : orderData.map((v, i) => {
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
          </div>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(CartStep03)
