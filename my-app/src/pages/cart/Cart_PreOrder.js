import React, { useState, useEffect } from 'react'
import {
  FaShoppingCart,
  FaLongArrowAltRight,
  FaRegEdit,
  FaCheck,
} from 'react-icons/fa'
import OrderInfo from '../Cart_components/PreOrder/OrderInfo'
import OrderDetail from '../Cart_components/PreOrder/OrderDetail'
import axios from 'axios'

function Cart_PreOrder() {
  let [data, setData] = useState([{}])
  let [Count, setCount] = useState([{}])
  let [PD, setPD] = useState([
    {
      Order_Sid: 1,
      Order_Amount: 10,
      price: 1000,
      name: 'A',
    },
    {
      Order_Sid: 2,
      Order_Amount: 15,
      price: 2000,
      name: 'B',
    },
    {
      Order_Sid: 3,
      Order_Amount: 20,
      price: 3000,
      name: 'C',
    },
  ])
  useEffect(() => {
    setData(PD)
  }, [])
  useEffect(() => {
    console.log('changing:', data)
  }, [data])
  console.log('PD', PD)

  // async function DataAxios() {
  //   setData(PD)
  //   for (let i = 0; i < PD.length; i++) {
  //     Count[i] = PD[i].Order_Amount
  //   }
  //   setCount(Count)
  //   console.log(Count)
  // }
  // function DeleteProduct(e) {
  //   let del = axios.delete(`http://localhost:3001/cart/${e}`)
  //   if (del.status === 200) {
  //     console.log('ok')
  //   }
  // }

  // Summary
  // 計算目前所有的商品數量
  // const productCount = () => {
  //   let totalCount = 0

  //   for (let i = 0; i < Count.length; i++) {
  //     totalCount += Count[i]
  //     console.log(Count[i])
  //   }

  //   return totalCount
  // }

  // // 計算目前所有的商品總價
  // const totalPrice = () => {
  //   let sum = 0

  //   for (let i = 0; i < data.length; i++) {
  //     sum += Count[i] * data[i].price
  //   }

  //   return sum
  // }
  return (
    <>
      <div className="container-fluid Banner col-xs-10">
        <div className="bannerTitle col-lg-8 col-xs-8 ">
          <h1 className="bannerTitle1 col-xs-6">只差一步</h1>
          <h1 className="bannerTitle2 col-xs-6">眼前所及全部歸你</h1>
        </div>
      </div>

      <div className="Process col-lg-8 col-xs-6 d-flex justify-content-around align-content-end">
        <div className="CartImage col-lg-3 col-xs-1">
          <FaShoppingCart className="icons first" />
          <h3 className="first">確認購物車</h3>
        </div>
        <FaLongArrowAltRight className="arrow firstArrow" />
        <div className="EditInfo col-lg-3 col-xs-1">
          <FaRegEdit className="icons" />
          <h3>填寫資料</h3>
        </div>
        <FaLongArrowAltRight className="arrow" />
        <div className="FinishInfo col-lg-3 col-xs-1">
          <FaCheck className="icons" />
          <h3>完成訂單</h3>
        </div>
      </div>

      <div className="container shoppingtitle my-5 col-lg-10">
        <span>SHOPPING CART</span>
        <div className="bottom-line col-lg-6 col-10 mx-lg-0 mx-auto"></div>
      </div>

      <div className="container ordercheck col-lg-10 d-lg-flex">
        <OrderDetail
          data={data}
          setData={setData}
          setCount={setCount}
          Count={Count}
          PD={PD}
          setPD={setPD}
          // DeleteProduct={DeleteProduct}
          // // ModifyProduct={ModifyProduct}
        />
        <OrderInfo />
        {/* <OrderInfo productCount={productCount} totalPrice={totalPrice} /> */}
      </div>
    </>
  )
}

export default Cart_PreOrder
