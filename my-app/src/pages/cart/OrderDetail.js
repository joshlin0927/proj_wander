import React, { useState, useEffect } from 'react'
import StoreCard from './StoreCard'
import StoreCardMobile from './StoreCardMobile'
import CartItem from './CartItem'
import CartMobile from './CartMobile'
// import CART from '../../config'
//示意圖

function OrderDetail(props) {
  const [Likeicon, setLikeicon] = useState('full')
  const [unLikeicon, setunLikeicon] = useState('heart')
  // let [data, setData] = useState([{}])
  // const [total, setTotal] = useState(0)
  // const [judge, setjudge] = useState(false)
  // const [deleteProduct, setdeleteProduct] = useState()
  // const [Count, setCount] = useState(initState(data))
  let { data, Count, setCount, DeleteProduct, ModifyProduct, setData, PD, setPD } = props
  
  return (
    <>
      <div className="orderlist col-lg-8 col-12">
        {/* 桌機版 */}
        <table className="table table-borderless table-responsive">
          <thead>
            <tr className="border-bottom">
              <th scope="col"></th>
              <th scope="col">商品資訊</th>
              <th scope="col">優惠</th>
              <th scope="col">商品數量</th>
              <th scope="col">商品單價</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map
              ? data.map((v, i) => {
                  return (
                    <CartItem
                      Order_Sid={v.Order_Sid}
                      Product_id={v.Product_id}
                      name={v.name}
                      cate_sid={v.cate_sid}
                      Promotion_Number={v.Promotion_Number}
                      price={v.price}
                      Order_Amount={v.Order_Amount}
                      setAmounts={(newCount) => {
                        const newData = [...data]
                        const newPD = [...PD]
                        newData[i].Order_Amount = newCount
                        PD[i].Order_Amount = newCount
                        setData(newData)
                        setPD(newPD)
                        console.log('PD(c):', PD)
                      }}
                      // DeleteProduct={DeleteProduct}
                      // ModifyProduct={ModifyProduct(v.Order_Sid)}
                    />
                  )
                })
              : 'No Result'}

            {/* <tr>
              <td>
                <img src="http://localhost:3000/image/product1.png" alt="" />
              </td>
              <td className="text-start">Optimum Nutrition 100% 乳清蛋白</td>
              <td className="text-start ">- 50P</td>
              <td className="text-start">
                <FaMinusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange < 1 ? 0 : AmountChange - 1)
                  }}
                />
                {AmountChange}
                <FaPlusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                    setAmountChange(AmountChange > 9 ? 10 : AmountChange + 1)
                  }}
                />
              </td>
              <td className="text-start">NT$2,000</td>
              <td>
                <FaTrash className="trashIcon" />
              </td>
            </tr> */}
          </tbody>
        </table>

        {/* 手機板 */}
        <table className="tablemobile table-borderless">
          <thead></thead>
          <tbody>
            {data.map
              ? data.map((v, i) => {
                  ;<CartMobile />
                })
              : ''}

            {/* <tr>
              <td>
                <img src="../../../image/product1.png" alt="" />
              </td>
              <td className="text-start">
                Optimum Nutrition 100% 乳清蛋白
                <br />
                NT$2,000
              </td>
              <td className="text-start col-4 text-center">
                <FaMinusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                  }}
                />
                10
                <FaPlusCircle
                  className="countIcon"
                  onClick={() => {
                    // console.log(e.target)
                  }}
                />
              </td>
            </tr> */}
          </tbody>
        </table>

        <div className="bottomline col-lg-9"></div>

        <h4 className="col-lg-10 text-lg-start">你可能也會喜歡</h4>
        <StoreCard
          Likeicon={Likeicon}
          setLikeicon={setLikeicon}
          unLikeicon={unLikeicon}
          setunLikeicon={setunLikeicon}
        />

        <StoreCardMobile />
      </div>
    </>
  )
}

export default OrderDetail
