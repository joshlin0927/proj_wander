import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'

import '../st/style/login.css'

function Login(props) {
  // console.log(props)

  // const { auth, setAuth } = props

  //將所有欄位的值以物件形式存在一個狀態
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })

  const [fieldsErrors, setFieldsErrors] = useState({
    email: '',
    password: '',
  })

  //將使用者在欄位輸入的值進行更新
  const handleFieldChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let newValue = value
    const updatedFields = {
      ...fields,
      [name]: newValue,
    }
    setFields(updatedFields)
  }

  //使用者輸入表單時錯誤訊息會自動更新
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldsErrors(updatedFieldErrors)
  }

  //表單的ref
  const formRef = useRef(null)
  //自訂欄位檢查訊息提示
  const handleFormInvalid = (e) => {
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
            [element.name]: element.title,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldsErrors,
      ...errorMsg,
    }

    setFieldsErrors(updatedFieldErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //阻止表單預設送出行為

    const fd = new FormData(e.target)
    console.log(fd.get('firstname'))
    // 測試有得到表單欄位的輸入值

    // TODO:用axios把表單送出
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
            <div className="back">Back</div>
          </div>
          <div className="h95"></div>

          <div className="login col-md-6">
            <form
              className="form-sm"
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
            >
              <div className="title">Welcome Back!</div>
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  name="email"
                  className="allInputs col-10"
                  placeholder="請填寫電子信箱"
                  title="請填寫正確格式"
                  value={fields.email}
                  onChange={handleFieldChange}
                  required
                />
              </div>
              {fieldsErrors.email === '' ? (
                <label className="notice col-10 ml-3 ml-md-2 ml-lg-4 labelName">
                  &nbsp;
                </label>
              ) : (
                <label className="notice col-10 ml-3 ml-md-2 ml-lg-4 labelName">
                  {fieldsErrors.email}
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
                  minLength="5"
                  title="請輸入5個以上字元"
                />
              </div>
              {fieldsErrors.password === '' ? (
                <label
                  className="notice col-10 ml-3 ml-md-2 ml-lg-4 labelName"
                  htmlFor=""
                >
                  &nbsp;
                </label>
              ) : (
                <label
                  className="notice col-10 ml-3 ml-md-2 ml-lg-4 labelName"
                  htmlFor=""
                >
                  {fieldsErrors.password}
                </label>
              )}
              <p className="forgetPassword">
                <Link to="/StIndex/StPasswordModify">
                  忘記密碼？
                </Link>
              </p>
              <div className="d-flex justify-content-center">
                <button className="signUpBtn-m mx-auto col-10">
                  登入
                </button>
                <button className="signUpBtn">登入</button>
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
