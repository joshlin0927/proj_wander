import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'
import './cart_step.css'
// 全頁通用元件
import Footer from '../../components/Footer'
function CartStep01() {
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
              <div className="cartItem">
                <div className="container">
                  <div className="row w-100 m-0">
                    <div className="cartItemImage col-4 col-md-3"></div>
                    <div className="cartItemTxt col-7 col-md-9">
                      <span className="cartItemName col-12 col-md-4">
                        日本自由行必學的實用日語會話
                      </span>
                      <span className="cartItemStatus col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-1">
                        已開課
                      </span>
                      <span className="cartItemPrice col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-0">
                        NT$2700
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cartItemBtn">
                  <Link
                    to="#/"
                    className="cartItemBtn-Detail"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDetail.svg`}
                      alt=""
                    />
                    <span>課程詳情</span>
                  </Link>
                  <Link
                    to="#/"
                    className="cartItemBtn-Delete"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDelete.svg`}
                      alt=""
                    />
                    <span>刪除</span>
                  </Link>
                </div>
              </div>
              <div className="cartItem">
                <div className="container">
                  <div className="row w-100 m-0">
                    <div className="cartItemImage col-4 col-md-3"></div>
                    <div className="cartItemTxt col-7 col-md-9">
                      <span className="cartItemName col-12 col-md-4">
                        日本自由行必學的實用日語會話
                      </span>
                      <span className="cartItemStatus col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-1">
                        已開課
                      </span>
                      <span className="cartItemPrice col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-0">
                        NT$2700
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cartItemBtn">
                  <Link
                    to="#/"
                    className="cartItemBtn-Detail"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDetail.svg`}
                      alt=""
                    />
                    <span>課程詳情</span>
                  </Link>
                  <Link
                    to="#/"
                    className="cartItemBtn-Delete"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDelete.svg`}
                      alt=""
                    />
                    <span>刪除</span>
                  </Link>
                </div>
              </div>
              <div className="cartItem">
                <div className="container">
                  <div className="row w-100 m-0">
                    <div className="cartItemImage col-4 col-md-3"></div>
                    <div className="cartItemTxt col-7 col-md-9">
                      <span className="cartItemName col-12 col-md-4">
                        日本自由行必學的實用日語會話
                      </span>
                      <span className="cartItemStatus col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-1">
                        已開課
                      </span>
                      <span className="cartItemPrice col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-0">
                        NT$2700
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cartItemBtn">
                  <Link
                    to="#/"
                    className="cartItemBtn-Detail"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDetail.svg`}
                      alt=""
                    />
                    <span>課程詳情</span>
                  </Link>
                  <Link
                    to="#/"
                    className="cartItemBtn-Delete"
                  >
                    <img
                      src={`${devUrl}/images/cart/cartItemDelete.svg`}
                      alt=""
                    />
                    <span>刪除</span>
                  </Link>
                </div>
              </div>
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
                        <a href="#" className="ml-auto mr-auto" data-toggle="modal" data-target="#counponModal">
                            <span className="selectCoupon">點我選擇優惠券</span>
                        </a> --> */}
                <div className="w-100 mt-3"></div>
                <Link
                  to="#/"
                  className="ml-auto"
                  data-toggle="modal"
                  data-target="#counponModal"
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
                className="btn checkoutBtn"
                onClick="location.href='./cart_step2.html'"
              >
                我要結帳
              </button>
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

export default CartStep01
