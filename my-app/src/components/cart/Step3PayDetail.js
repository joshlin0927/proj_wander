import React from 'react'
import { devUrl } from '../../config'
import dayjs from 'dayjs'

function Step3PayDetail(props) {
  const { total, time, cstoresort, payMethod } = props
  function sevenDays(str) {
    let dd = dayjs(str)
      .add(7, 'day')
      .format('YYYY-MM-DD HH:mm:ss')
    return dd
  }
  return (
    <>
      {/* <!-- 付款詳情(信用卡) --> */}
      {payMethod === 1 ? (
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
              <span>付款金額：</span>
              <span id="payTotal">NT${total}</span>
            </div>
            <div className="finishContentRow">
              <span>付款時間：</span>
              <span id="payTime">{time}</span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {/* <!-- 付款詳情(超商) --> */}
      {payMethod === 2 ? (
        <div className="row payMethod">
          <div className="col-12 payTitle">
            <span>付款詳情</span>
          </div>
          <div className="col-12 finishContent">
            <div className="finishContentRow">
              <span>付款方式：</span>
              <span id="payWay">超商代碼</span>
            </div>
            {cstoresort === 1 ? (
              <div className="finishContentRow">
                <span>超商類別：</span>
                <span id="payWay">7-Eleven</span>
                <img
                  src={`${devUrl}/images/cart/7-Eleven.png`}
                  alt=""
                />
              </div>
            ) : (
              ''
            )}
            {cstoresort === 2 ? (
              <div className="finishContentRow">
                <span>超商類別：</span>
                <span id="payWay">全家FamilyMart</span>
                <img
                  src={`${devUrl}/images/cart/FamiMart.png`}
                  alt=""
                />
              </div>
            ) : (
              ''
            )}
            {cstoresort === 3 ? (
              <div className="finishContentRow">
                <span>超商類別：</span>
                <span id="payWay">OK Mart</span>
                <img
                  src={`${devUrl}/images/cart/OKMart.png`}
                  alt=""
                />
              </div>
            ) : (
              ''
            )}
            {cstoresort === 4 ? (
              <div className="finishContentRow">
                <span>超商類別：</span>
                <span id="payWay">萊爾富HiLife</span>
                <img
                  src={`${devUrl}/images/cart/HiLife.png`}
                  alt=""
                />
              </div>
            ) : (
              ''
            )}
            <div className="finishContentRow">
              <span>繳費代碼：</span>
              <span id="payWay">GW12345678901234</span>
            </div>
            <div className="finishContentRow">
              <span>付款金額：</span>
              <span id="payTotal">NT${total}</span>
            </div>
            <div className="finishContentRow">
              <span>生成時間：</span>
              <span id="payTime">{time}</span>
              <span id="payTimeDL">
                請於{sevenDays(time)}前完成付款
              </span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {/* <!-- 付款詳情(銀轉) --> */}
      {payMethod === 3 ? (
        <div className="row payMethod">
          <div className="col-12 payTitle">
            <span>付款詳情</span>
          </div>
          <div className="col-12 finishContent">
            <div className="finishContentRow">
              <span>付款方式：</span>
              <span id="payWay">ATM轉帳匯款</span>
            </div>
            <div className="finishContentRow">
              <span>轉帳帳號：</span>
              <span id="payWay">(812)8888111122224444</span>
            </div>
            <div className="finishContentRow">
              <span>付款金額：</span>
              <span id="payTotal">NT${total}</span>
            </div>
            <div className="finishContentRow">
              <span>生成時間：</span>
              <span id="payTime">{time}</span>
              <span id="payTimeDL">
                請於{sevenDays(time)}前完成付款
              </span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Step3PayDetail
