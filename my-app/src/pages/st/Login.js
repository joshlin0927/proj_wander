import React, { useState, useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserDataService from '../../services/UserDataService'

import { devUrl } from '../../config'

import '../st/style/login.css'

function Login(props) {
  // console.log(props)
  const { auth, setAuth } = props

  const formRef = useRef(null)

  //儲存所有欄位的值
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })

  // 存入錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
  })

  // 專門用來處理每個欄位的輸入用
  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝新物件
    // 2. 在拷貝的新物件上處理
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }
    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  const login = async () => {
    const fd = new FormData(document.form_login)
    const r = await fetch(UserDataService.login, {
      method: 'POST',
      body: fd,
    })
    const j = await r.json()

    console.log(r)
  }

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('email'))
    console.log(formData.get('password'))

    // ex. 以下用fetch api/axios送到伺服器
  }

  // 當表單有檢查有不合法出現時觸發
  const handleFormInvalid = (e) => {
    // 阻擋form的預設行為(泡泡訊息)
    e.preventDefault()

    // 表單實體的物件參照
    const form = formRef.current

    let errorMsg = {}

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i]

      if (
        element.tagName !== 'button' &&
        element.willValidate &&
        !element.validity.valid
      ) {
        // 必填用預設訊息，但錯誤格式驗証用title中的字串
        if (element.validity.valueMissing) {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.validationMessage,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }

        // console.log([element.name], element.title)
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <div className="stbg-img">
        <div className="container">
          <div className="m-wrap row justify-content-center">
            <div className="logo-m-login">
              <img
                src={`${devUrl}/images/logo/log_mobile.png`}
                alt=""
              />
            </div>
          </div>
          <div className="row m-wrap">
            <div className="back">
              <Link to="/">Back </Link>
            </div>
          </div>
          <div className="h95"> </div>
          <div className="login col-md-6">
            <form
              name="form_login"
              className="form-sm"
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
              ref={formRef}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="title"> Welcome Back! </div>
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  name="email"
                  className="allInputs col-10"
                  placeholder="請填寫電子信箱"
                  title="電子信箱地址必須要有「@」"
                  value={fields.email}
                  onChange={handleFieldChange}
                  required
                />
              </div>
              {fieldErrors.email === '' ? (
                <label
                  className="notice col-10 ml-2  ml-lg-4 "
                  htmlFor=""
                >
                  &nbsp;
                </label>
              ) : (
                <label
                  className="notice col-10 ml-2  ml-lg-4 "
                  htmlFor=""
                >
                  {fieldErrors.email}
                </label>
              )}
              <div className="d-flex justify-content-center">
                <input
                  type="password"
                  name="password"
                  className="allInputs col-10"
                  placeholder="密碼*"
                  value={fields.password}
                  onChange={handleFieldChange}
                  required
                />
              </div>
              {fieldErrors.password === '' ? (
                <label
                  className="notice col-10 ml-2  ml-lg-4 "
                  htmlFor=""
                >
                  &nbsp;
                </label>
              ) : (
                <label
                  className="notice col-10 ml-2  ml-lg-4 "
                  htmlFor=""
                >
                  {fieldErrors.password}
                </label>
              )}
              <p className="forgetPassword">忘記密碼？</p>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="signUpBtn-m mx-auto col-10"
                  onClick={login}
                >
                  登入
                </button>
                <button type="submit" className="signUpBtn">
                  登入
                </button>
              </div>
              <div className="joinusblack">
                還沒加入我們？
                <Link to="/SignUp" className="joinus">
                  前往註冊
                </Link>
              </div>
              <div className="h30"> </div>
            </form>
          </div>
        </div>
        <div className="h150"> </div>
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
