import '../st/style/signUp.css'
import React, { useState, useRef, useEffect } from 'react'
import { devUrl } from '../../config'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//共用元件
// import FBLogin from '../../components/st/FBLogin'
// import GooLogin from '../../components/st/GooLogin'

export default withRouter(function SignUp(props) {
  const history = useHistory()
  const [asTeacherOrStudent, setasTeacherOrStudent] =
    useState(3)
  const MySwal = withReactContent(Swal)
  //將所有欄位的值以物件形式存在一個狀態
  const [fields, setFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    nickname: '',
  })

  const [fieldsErrors, setFieldsErrors] = useState({
    firstname: '',
    lastname: '',
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
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldsErrors(updatedFieldErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //阻止表單預設送出行為

    const fd = new FormData(e.target)
    console.log(fd.get('lastname'))
    // 測試有得到表單欄位的輸入值
    if (account) {
      for (let i of account.data.rows) {
        if (i.email === fields.email) {
          Swal.fire({
            icon: 'error',
            title: '請重新註冊',
            text: '帳號重複了！',
          })
          return
        }
      }
    }

    if (asTeacherOrStudent === 3) {
      Swal.fire('請選擇註冊身份')
      return
    }
    // 用axios把表單送出
    if (
      fields.lastname !== '' &&
      fields.firstname !== '' &&
      fields.email !== '' &&
      fields.password !== ''
    ) {
      axios
        .post('http://localhost:3001/SignUp', {
          nickname: fields.nickname,
          lastname: fields.lastname,
          firstname: fields.firstname,
          email: fields.email,
          password: fields.password,
          nickname: fields.nickname,
          identity: asTeacherOrStudent,
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.success === true) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: '恭喜成為Wander會員',
              showConfirmButton: false,
              timer: 1500,
            })

            history.push('/login')
          } else {
            Swal.fire({
              icon: 'error',
              title: '抱歉',
              text: '註冊失敗',
            })
            return
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
  const [account, setAccount] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await axios.get(
        'http://localhost:3001/api/accountdata'
      )
      if (data) {
        setAccount(data)
        // console.log(data)
      } else {
        console.log('failed')
      }
    })()
  }, [])

  return (
    <>
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
          <Link to="/">
            <div className="back">Back</div>
          </Link>
        </div>
        <div className="row m-wrap justify-content-end col-11">
          <label className="toggle">
            <input
              type="checkbox"
              id="mySwitch"
              onChange={(e) => {
                setasTeacherOrStudent(+!e.target.checked)
                console.log(+!e.target.checked)

                //測試將布林值轉為數字
                // console.log(+e.target.checked)
              }}
            />
            <span className="slider round switch">
              學生 教師
            </span>
          </label>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="signUp col-12 col-md-6 col-lg-6">
            <form
              className="form-sm"
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
            >
              <div className="tab_css">
                {/* <!--TAB1--> */}
                <input
                  id="tab1"
                  type="radio"
                  name="tab"
                  value="1"
                  onChange={(e) => {
                    setasTeacherOrStudent(e.target.value)
                  }}
                />
                <label for="tab1" id="asTeacher">
                  成為教師
                </label>
                {/* <!-- TAB2 --> */}
                <input
                  id="tab2"
                  type="radio"
                  name="tab"
                  value="0"
                  onChange={(e) => {
                    setasTeacherOrStudent(e.target.value)
                  }}
                />
                <label for="tab2" id="asStudent">
                  成為學生
                </label>
                <div className="title">Wander With Us!</div>
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="shortInputs  col-5 col-lg-4"
                  placeholder="名字*"
                  name="firstname"
                  value={fields.firstname}
                  onChange={handleFieldChange}
                  required
                />
                <input
                  type="text"
                  className="shortInputs  col-5 col-lg-4 lastName"
                  placeholder="姓氏*"
                  name="lastname"
                  value={fields.lastname}
                  onChange={handleFieldChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-start">
                {fieldsErrors.firstname === '' ? (
                  <label
                    className="stnotice  col-4 offset-1 col-lg-4 offset-lg-2 p-0"
                    htmlFor=""
                  >
                    &nbsp;
                  </label>
                ) : (
                  <label
                    className="stnotice  col-4 offset-1 col-lg-4 offset-lg-2 p-0"
                    htmlFor=""
                  >
                    {fieldsErrors.firstname}
                  </label>
                )}
                {fieldsErrors.lastname === '' ? (
                  <label
                    className="stnotice col-4 offset-1 col-lg-4 offset-lg-0 p-0"
                    htmlFor=""
                  >
                    &nbsp;
                  </label>
                ) : (
                  <label
                    className="stnotice  col-4 offset-1 col-lg-4 offset-lg-0 p-0"
                    htmlFor=""
                  >
                    {fieldsErrors.lastname}
                  </label>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  name="email"
                  className="allInputs-login col-10 col-lg-8"
                  placeholder="請填寫電子信箱"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </div>
              {fieldsErrors.email === '' ? (
                <label
                  className="stnotice col-10 offset-1 col-lg-8 offset-lg-2 p-0"
                  htmlFor=""
                >
                  &nbsp;
                </label>
              ) : (
                <label
                  className="stnotice col-10 offset-1 col-lg-8 offset-lg-2 p-0"
                  htmlFor=""
                >
                  {fieldsErrors.email}
                </label>
              )}

              <div className="d-flex justify-content-center">
                <input
                  type="password"
                  name="password"
                  className="allInputs-login col-10 col-lg-8"
                  placeholder="請輸入密碼*"
                  value={fields.password}
                  onChange={handleFieldChange}
                  minLength="5"
                />
              </div>
              {fieldsErrors.password === '' ? (
                <label
                  className="stnotice col-8 offset-1 col-lg-8 offset-lg-2 p-0"
                  htmlFor=""
                >
                  &nbsp;
                </label>
              ) : (
                <label
                  className="stnotice col-10 offset-1 col-lg-8 offset-lg-2 p-0"
                  htmlFor=""
                >
                  {fieldsErrors.password}
                </label>
              )}

              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  name="nickname"
                  className="allInputs-login  col-10 col-lg-8"
                  placeholder="請填寫暱稱"
                  value={fields.nickname}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="separator col-10 col-lg-8 mx-auto">
                <div className="or">OR</div>
              </div>
              <div className="d-flex d-md-block">
                {/* <FBLogin /> */}
                {/* <GooLogin /> */}
              </div>
              <div>
                <button className="signUpBtn-m mx-auto col-10 ">
                  註冊
                </button>
                <button className="signUpBtn col-12 mx-auto">
                  註冊
                </button>
              </div>
              <div className="h30 des-none"></div>
            </form>
          </div>
        </div>
      </div>
      <div className="bgisignup"></div>
    </>
  )
})
