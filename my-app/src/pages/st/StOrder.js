import React from 'react'
import './style/st_order.css'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar from '../../components/st/StSideBar'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

function StOrder() {
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div class="col-10 ml-auto pageName">
            <span class="pageNameText order">Order</span>
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
                <a
                  href="#/"
                  className="col-3 col-md-2 stOrderContentTitle active"
                >
                  <span>全部</span>
                </a>
                <a
                  href="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>待付款</span>
                </a>
                <a
                  href="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>已付款</span>
                </a>
                <a
                  href="#/"
                  className="col-3 col-md-2 stOrderContentTitle"
                >
                  <span>已取消</span>
                </a>
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
                          src={`${devUrl}/images/st_order/stOrderDetail_icon.svg`}
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
                          src={`${devUrl}/images/st_order/stOrderDetail_icon.svg`}
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
                          src={`${devUrl}/images/st_order/stOrderDetail_icon.svg`}
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
                          src={`${devUrl}/images/st_order/stOrderDetail_icon.svg`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <StBgDecorationNormal />
      <Footer />
    </>
  )
}

export default StOrder
