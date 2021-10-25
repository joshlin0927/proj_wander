<<<<<<< HEAD
import React, { useState, useRef } from 'react'
=======
import React, { useState, useRef, useEffect } from 'react'
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_HOST, Member_LIST } from '../../config'

import { devUrl } from '../../config'

import '../st/style/login.css'

function Login(props) {
<<<<<<< HEAD
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
=======
  console.log(props)
  const { auth, setAuth } = props
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba

  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)

  const formRef = useRef(null)

  //儲存所有欄位的值
  const [fields, setFields] = useState({
    origin: '',
    newPass: '',
    newPassConfirm: '',
  })

  // 存入錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    origin: '',
    newPass: '',
    newPassConfirm: '',
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

  // 當表單有檢查有不合法出現時觸發
  const handleFormInvalid = (e) => {
    // 阻擋form的預設行為(泡泡訊息)
    e.preventDefault()

    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
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

    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)

    // ex. 以下用fetch api/axios送到伺服器
  }

  useEffect(() => {
    ;(async () => {
      let r = await axios.post(Member_LIST)
      console.log(r)
      if (r.status === 200) {
        setTotalRows(r.data.totalRows)
        setData(r.data)
      }
    })()
  })
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
<<<<<<< HEAD
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
=======
              name="login"
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
              ref={formRef}
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
            >
              <div className="title">Welcome Back!</div>
              <div className="d-flex justify-content-center">
                <input
<<<<<<< HEAD
                  type="email"
                  name="email"
                  className="allInputs col-10"
                  placeholder="請填寫電子信箱"
                  title="請填寫正確格式"
                  value={fields.email}
                  onChange={handleFieldChange}
                  required
=======
                  type="text"
                  name="email"
                  className="allInputs col-10"
                  placeholder="請填寫電子信箱"
                  value={fields.email}
                  onChange={handleFieldChange}
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
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
<<<<<<< HEAD
                  required
                  minLength="5"
                  title="請輸入5個以上字元"
=======
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
                />
              </div>
              {fieldsErrors.password === '' ? (
                <label
                  className="notice col-10 ml-3 ml-md-2 ml-lg-4 labelName"
                  htmlFor=""
                >
<<<<<<< HEAD
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
=======
                  登入
                </button>
                <button type="button" className="signUpBtn">
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
                  登入
                </button>
                <button className="signUpBtn">登入</button>
              </div>

              <div className="joinusblack">
                還沒加入我們？
                <Link to="/SignUp" className="joinus">
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
