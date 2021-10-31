import React from 'react'

function CartSummary(props) {
  const { total } = props
  return (
    <>
      <div className="row">
        <div className="checkoutTitle">
          <span>結帳明細</span>
        </div>
        <div className="checkoutSubtotal">
          <span>小計</span>
          <span>NT${total}</span>
          <div className="w-100"></div>
          <span>折扣</span>
          <span>-NT${Math.floor(total * 0.1)}</span>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="checkoutTotal">
          NT$ {total - Math.floor(total * 0.1)}
        </div>
      </div>
    </>
  )
}

export default CartSummary
