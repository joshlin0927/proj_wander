import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import axios from 'axios'
import { PasswordChange } from '../../config'

// components
import ConfirmMsg from '../../components/ConfirmMsg'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcPassword() {
  const formRef = useRef(null)
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid
  const email = JSON.parse(member).email

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      return
    }
  }, [])

  //設定確認表單送出訊息框的狀態
  const [showUp, setShowUp] = useState('')

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
    // console.log(formData.get('origin'))
    // console.log(formData.get('newPass'))
    // console.log(formData.get('newPassConfirm'))

    // 檢查確認密碼&密碼欄位
    if (
      formData.get('newPass') !==
      formData.get('newPassConfirm')
    ) {
      // 設定錯誤訊息狀態
      const updatedFieldErrors = {
        ...fieldErrors,
        newPass: '密碼與確認密碼欄位輸入值不相同',
        newPassConfirm: '密碼與確認密碼欄位輸入值不相同',
      }

      // 3. 設定回原錯誤訊息狀態物件
      setFieldErrors(updatedFieldErrors)

      // 不送出資料到伺服器
      return
    }

    // ex. 以下用fetch api/axios送到伺服器

    ;(async () => {
      let r = await axios.post(
        PasswordChange + '/?teacherSid=' + teacherSid,
        {
          email: email,
          origin: fields.origin,
          newPass: fields.newPass,
          teacherSid: teacherSid,
        }
      )

      if (r.data.success) {
        setShowUp('showup')
        setTimeout(() => {
          setShowUp('none')
        }, 1000)
      } else {
        setFieldErrors({
          origin: r.data.error,
          newPass: '',
          newPassConfirm: '',
        })
      }
    })()
  }

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCpassword">
              Password
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <form
            className="TCform col-12 offset-0 col-md-8 offset-md-1"
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <ConfirmMsg showUp={showUp} />
            <div className="TCform-content w-100 col-md-10 col-lg-8">
              <div className="TCform-head p-0">
                <Link to="/">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">密碼更改</div>
                <Link to="/">
                  <i className="TCback-btn"></i>
                </Link>
              </div>
              <input
                name="origin"
                type="password"
                className="col-12 allInputs"
                placeholder="請輸入原密碼"
                value={fields.origin}
                onChange={handleFieldChange}
                required
              />
              {fieldErrors.origin === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.origin}
                </label>
              )}
              <input
                name="newPass"
                type="password"
                className="col-12 allInputs"
                placeholder="請輸入新密碼"
                value={fields.newPass}
                onChange={handleFieldChange}
                required
                minLength="6"
              />
              {fieldErrors.newPass === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.newPass}
                </label>
              )}
              <input
                name="newPassConfirm"
                type="password"
                className="col-12 allInputs"
                placeholder="請再次輸入新密碼"
                value={fields.newPassConfirm}
                onChange={handleFieldChange}
                required
                minLength="5"
              />
              {fieldErrors.newPassConfirm === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.newPassConfirm}
                </label>
              )}
              <button className="TCbtn btn-secondary mx-auto one-btn">
                <span>更改</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(TcPassword)
