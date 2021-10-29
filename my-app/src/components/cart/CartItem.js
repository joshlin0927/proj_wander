import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'

function CartItem(props) {
  return (
    <>
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
          <Link to="#/" className="cartItemBtn-Detail">
            <img
              src={`${devUrl}/images/cart/cartItemDetail.svg`}
              alt=""
            />
            <span>課程詳情</span>
          </Link>
          <Link to="#/" className="cartItemBtn-Delete">
            <img
              src={`${devUrl}/images/cart/cartItemDelete.svg`}
              alt=""
            />
            <span>刪除</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartItem
