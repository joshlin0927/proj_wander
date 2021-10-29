import React from 'react'
import { withRouter } from 'react-router-dom'
import { devUrl, Cart_API } from '../../config'

function CartItem(props) {
  const {
    index,
    product_sid,
    name,
    price,
    status,
    img,
    cartData,
    setCartData,
  } = props
  const member = JSON.parse(localStorage.getItem('member'))
  // 刪除function
  function deleteSend(product_sid) {
    fetch(`${Cart_API}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_sid: member.sid,
        product_sid: product_sid,
      }),
    })
      .then((r) => r.json())
      .then((obj) => {
        if (obj.success) {
          console.log('response:', JSON.stringify(obj))
        } else {
          console.log('error:', obj.error)
        }
      })
  }
  return (
    <>
      <div className="cartItem">
        <div className="container">
          <div className="row w-100 m-0">
            <div className="cartItemImage col-4 col-md-3">
              <img
                src={`${devUrl}/images/cart/jp_course.jpg`}
                alt=""
              />
            </div>
            <div className="cartItemTxt col-7 col-md-9">
              <span className="cartItemName col-12 col-md-4">
                {name === null
                  ? '目前架上已無此課程'
                  : name}
              </span>
              <span className="cartItemStatus col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-1">
                {status === 1 ? '已開課' : '未開課'}
              </span>
              <span className="cartItemPrice col-12 col-md-3 offset-xl-1 offset-lg-1 offset-md-0">
                NT${price}
              </span>
            </div>
          </div>
        </div>
        <div className="cartItemBtn">
          <div className="cartItemBtn-Detail">
            <img
              src={`${devUrl}/images/cart/cartItemDetail.svg`}
              alt=""
            />
            <span>課程詳情</span>
          </div>
          <div
            className="cartItemBtn-Delete"
            onClick={() => {
              const newCartData = [...cartData]
              newCartData.splice(index, 1)
              setCartData(newCartData)
              deleteSend(product_sid)
            }}
          >
            <img
              src={`${devUrl}/images/cart/cartItemDelete.svg`}
              alt=""
            />
            <span>刪除</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
