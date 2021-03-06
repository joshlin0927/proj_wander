//css
import '../st/style/login.css'
import { useHistory } from 'react-router'
import React, { useState, useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { devUrl, MemberLogin } from '../../config'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import Goologin from '../../components/st/GooLogin'

function Login(props) {
  const { auth, setAuth, setUser } = props
  const history = useHistory()
  const formRef = useRef(null)

  // const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  // const identity = member ? JSON.parse(member).identity : ''
  // const studentSid = member ? JSON.parse(member).sid : ''
  //儲存所有欄位的值
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })

  const [close, setClose] = useState('far fa-eye-slash')
  const [type, setType] = useState('password')
  let account = ''
  let firstname = ''
  // 存入錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
  })

  // 已登入狀態跳轉
  useEffect(() => {
    if (member) {
      props.history.push('/')
    }
  }, [member, props.history])

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

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name

    const usp = new URLSearchParams(new FormData(e.target))
    fetch(MemberLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: usp.toString(),
    })
      .then((r) => r.json())
      .then((obj) => {
        // 查看附帶的數值
        // console.log(JSON.stringify(obj, null, 4))
        if (obj.success === true) {
          localStorage.setItem('token', obj.token)
          localStorage.setItem(
            'member',
            JSON.stringify(obj.member)
          )
          setAuth(true)
          setUser(obj.member.sid)
          history.push('/')
        } else {
          setAuth(false)
          if (auth === false) {
            const updatedFieldErrors = {
              ...fieldErrors,
              email: '帳號或密碼錯誤',
              password: '帳號或密碼錯誤',
            }
            setFieldErrors(updatedFieldErrors)
          }
        }
      })
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
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }
  const newPass = Math.floor(Math.random() * 89999 + 10000)
  // console.log(newPass)
  // //設定Email.js
  const sendmail = () => {
    let templateParams = {
      email: account,
      name: firstname,
      notes: `請使用Wander提供給您的新密碼重新登入。新密碼:
        ${newPass}`,
    }

    let service_id = 'default_service'
    let template_id = 'template_tahmupk'
    let userID = 'user_Bz9tUiSEEhdms8KVMRLUn'

    emailjs
      .send(service_id, template_id, templateParams, userID)
      .then((response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      })
      .catch((error) => {
        console.log('FAILED...', error)
      })
  }

  return (
    <>
      <div className="container mb80">
        <div className="m-wrap row justify-content-center">
          <div className="logo-m-login">
            <img
              src={`${devUrl}/images/logo/log_mobile.png`}
              alt=""
            />
          </div>
        </div>
        <div className="row m-wrap">
          <div className="back" onClick={history.goBack}>
            <span> Back </span>
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
          >
            <div className="title"> Welcome Back! </div>
            <div className="d-flex justify-content-center">
              <input
                type="email"
                name="email"
                className="allInputs  col-10 col-md-8"
                placeholder="請填寫電子信箱"
                title="電子信箱地址必須要有「@」"
                value={fields.email}
                onChange={handleFieldChange}
                required
              />
            </div>
            {fieldErrors.email === '' ? (
              <label
                className="stnotice col-12  offset-lg-2 p-0"
                htmlFor=""
              >
                &nbsp;
              </label>
            ) : (
              <label
                className="stnotice col-12 offset-lg-2 p-0"
                htmlFor=""
              >
                {fieldErrors.email}
              </label>
            )}
            <div className="d-flex ">
              <input
                type={type}
                name="password"
                className="allInputs offset-md-2 col-md-8 col-10 offset-1"
                placeholder="請填寫密碼*"
                value={fields.password}
                onChange={handleFieldChange}
                required
              />
              <i
                className={`mt-4 mt-md-3 ml-2 ${close}`}
                onClick={() => {
                  if (type === 'password') {
                    setType('text')
                    setClose('far fa-eye')
                  } else {
                    setType('password')
                    setClose('far fa-eye-slash')
                  }
                }}
              ></i>
            </div>
            {fieldErrors.password === '' ? (
              <label
                className="stnotice col-12  offset-lg-2 p-0"
                htmlFor=""
              >
                &nbsp;
              </label>
            ) : (
              <label
                className="stnotice col-12  offset-lg-2 p-0"
                htmlFor=""
              >
                {fieldErrors.password}
              </label>
            )}
            <div className="d-flex justify-content-center ">
              <button
                type="submit"
                className="signUpBtn-m mx-auto col-10"
              >
                登入
              </button>
              <button type="submit" className="signUpBtn">
                登入
              </button>
            </div>

            <div className="d-flex justify-content-center mb-50">
              <Goologin />
            </div>
            <div className="d-flex ">
              <div className="joinusblack d-flex offset-4">
                還沒加入我們？
                <Link to="/SignUp" className="joinus">
                  前往註冊
                </Link>
              </div>
              <div
                className="forgetPassword ml-3"
                onClick={async () => {
                  await Swal.fire({
                    title: '請輸入您的帳號',
                    input: 'text',
                    inputAttributes: {
                      autocapitalize: 'off',
                    },
                    showCancelButton: true,
                    confirmButtonText: '送出',
                    showLoaderOnConfirm: true,
                    preConfirm: (email) => {
                      return fetch(
                        `http://localhost:3001/passwordmodify/list?email=${email}`
                      )
                        .then((r) => r.json())
                        .then((response) => {
                          // console.log('response', response)
                          if (response.success) {
                            firstname =
                              response.result[0].firstname

                            if (
                              response.result[0]
                                .googleidentity === 1
                            ) {
                              Swal.showValidationMessage(
                                '您已使用Google帳號註冊'
                              )
                            }
                          } else {
                            Swal.showValidationMessage(
                              '無效帳號'
                            )
                          }
                        })
                    },
                    allowOutsideClick: () =>
                      !Swal.isLoading(),
                  }).then((result) => {
                    // console.log('result', result)
                    account = result.value
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: '請到信箱確認重置密碼',
                        showClass: {
                          popup:
                            'animate__animated animate__fadeInDown',
                        },
                        hideClass: {
                          popup:
                            'animate__animated animate__fadeOutUp',
                        },
                      })
                    }
                  })
                  await sendmail()
                  let j = await fetch(
                    'http://localhost:3001/passwordmodify/update',
                    {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        password: newPass,
                        email: account,
                      }),
                    }
                  )
                  let res = await j.json()
                  console.log('res:', res)
                }}
              >
                <span> 忘記密碼？ </span>
              </div>
            </div>

            <div className="h30"> </div>
          </form>
        </div>
      </div>
      <div className="h150"> </div>
      <div className="bgisignup"> </div>
    </>
  )
}

export default withRouter(Login)
