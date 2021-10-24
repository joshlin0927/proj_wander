import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'

// 全頁通用元件
import Footer from '../../components/Footer'
function CartStep03(props) {
  const [cartFooterMb, setCartFooterMb] = useState(true)
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
            {/* <!-- 訂單詳情 --> */}
            <div className="row payMethod">
              <div className="col-12 payTitle">
                <span>付款詳情</span>
              </div>
              <div className="col-12 finishContent">
                <div className="finishContentRow">
                  <span>付款方式：</span>
                  <span id="payWay">信用卡</span>
                </div>
                <div className="finishContentRow">
                  <span>付款姓名：</span>
                  <span id="payName">王小明</span>
                </div>
                <div className="finishContentRow">
                  <span>付款金額：</span>
                  <span id="payTotal">NT$7310</span>
                </div>
                <div className="finishContentRow">
                  <span>付款時間：</span>
                  <span id="payTime">
                    2021-12-01 23:00:12
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- 付款詳情 --> */}
            <div className="row payMethod">
              <div className="col-12 payTitle">
                <span>付款詳情</span>
              </div>
              <div className="col-12 finishContent">
                <div className="finishContentRow">
                  <span>付款方式：</span>
                  <span id="payWay">超商代碼</span>
                </div>
                <div className="finishContentRow">
                  <span>超商類別：</span>
                  <span id="payWay">7-Eleven</span>
                  <img
                    src={`${devUrl}/images/cart/7-Eleven.png`}
                    alt=""
                  />
                </div>
                <div className="finishContentRow">
                  <span>付款姓名：</span>
                  <span id="payName">王小明</span>
                </div>
                <div className="finishContentRow">
                  <span>付款金額：</span>
                  <span id="payTotal">NT$7310</span>
                </div>
                <div className="finishContentRow">
                  <span>生成時間：</span>
                  <span id="payTime">
                    2021-12-01 23:00:12
                  </span>
                  <span id="payTimeDL">
                    請在2021-12-08 23:00:12前完成付款
                  </span>
                </div>
              </div>
            </div>
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
      <Footer
        cartFooterMb={cartFooterMb}
        setCartFooterMb={setCartFooterMb}
      />
    </>
  )
}

export default withRouter(CartStep03)
