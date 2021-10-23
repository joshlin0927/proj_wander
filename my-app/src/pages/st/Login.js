import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'

import '../st/style/login.css'

function Login(props) {
  console.log(props)

  const { auth, setAuth } = props

  return (
    <>
      <div className="stbg-img">
        <div className="container">
          <div className="m-wrap row justify-content-center">
            <div className="logo-m">
              <img
                src={`${devUrl}/images/logo/log_mobile.png`}
                alt=""
              />
            </div>
          </div>
          <div className="row m-wrap">
            <div className="back">Back</div>
          </div>
          <div className="h95"></div>

          <div className="login col-md-6">
            <form className="form-sm">
              <div className="title">Welcome Back!</div>
              <div className="d-flex justify-content-center">
                <input
                  type="password"
                  className="allInputs col-10"
                  placeholder="請填寫電子信箱"
                />
              </div>
              <label
                className="notice col-10 ml-2  ml-lg-4"
                for=""
              >
                請填寫正確的信箱
              </label>

              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="allInputs col-10"
                  placeholder="密碼*"
                />
              </div>
              <label
                className="notice col-10 ml-2 ml-lg-4"
                for=""
              >
                密碼錯誤
              </label>
              <p className="forgetPassword">忘記密碼？</p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="signUpBtn-m mx-auto col-10"
                >
                  註冊
                </button>
                <button type="button" className="signUpBtn">
                  註冊
                </button>
              </div>

              <div className="joinusblack">
                還沒加入我們？
                <Link to="#/" className="joinus">
                  前往註冊
                </Link>
              </div>
              <div className="h30"></div>
            </form>
          </div>
        </div>

        <div className="h150"></div>
      </div>
      {/* <p>目前登入情況: {auth ? '登入中' : '未登入'}</p> */}
      {/* <button
        onClick={() => {
          setAuth(true)
          //出現歡迎訊息
          alert('你好，登入已完成！')
          //跳回首頁
          props.history.push('/')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          props.history.push('/about')
        }}
      >
        連到 關於我們
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </button> */}
    </>
  )
}

export default withRouter(Login)
