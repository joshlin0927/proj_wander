import React from 'react'

function CartSummary(props) {
  const { total, discount } = props
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
          <span>-NT${discount(total)}</span>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="checkoutTotal">
          NT$ {total - discount(total)}
        </div>
      </div>
    </>
  )
}

export default CartSummary
