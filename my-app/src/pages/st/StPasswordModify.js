import React, { useState, useRef, useEffect } from 'react'
import './style/st_passwordmodify.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import StSideBar from '../../components/st/StSideBar'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

export default function StPasswordModify() {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const studentSid = JSON.parse(member).sid

  //設定確認表單送出訊息框的狀態
  const [showUp, setShowUp] = useState('')

  const formRef = useRef(null)

  //儲存所有欄位的值
  const [fields, setFields] = useState({
    origin: '',
    newPass: '',
    newPassConfirm: '',
  })

  // 錯誤訊息提示
  const [fieldErrors, setFieldErrors] = useState({
    origin: '',
    newPass: '',
    newPassConfirm: '',
  })

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/passwordmodify/getdata?studentSid=${studentSid}`
        )
        const memberData = r.data
        console.log('result:', memberData)
      })()
    }
  }, [])

  // 處理表單欄位變動
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

      // 修改密碼不用把資料傳到後台，在前端比對驗證就可以
      return
    }
    

    if (
      fields.origin !== '' &&
      fields.newPass !== '' &&
      fields.newPassConfirm !== '' &&
      fields.newPass === fields.newPassConfirm
    ) {
      //透過axios把資料送到後端
      axios
        .post(
          `http://localhost:3001/passwordmodify/modify?studentSid=${studentSid}`,
          {
            password: fields.newPass,
          }
        )
        .then((res) => {
          if (res.data) {
            console.log(res.data)
            setShowUp('showup')
            setTimeout(() => {
              setShowUp('none')
            }, 1000)
          } else {
            console.log('失敗')
          }
        })
    }
  }

  return (
    <>
      <div className="container mainContent ">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText password">
              Password
            </span>
          </div>
        </div>
        <div className="row ">
          <StSideBar />

          <form
            className="form col-12 offset-0 col-md-7 offset-md-1 col-lg-7"
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <ConfirmMsg showUp={showUp} />
            <div className="form-content w-100 col-md-8">
              <div className="form-head p-0">
                <Link to="/">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="form-title">密碼更改</div>
                <Link to="">
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
                <label className="stnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="stnotice" htmlFor="">
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
                minLength="5"
              />
              {fieldErrors.newPass === '' ? (
                <label className="stnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="stnotice" htmlFor="">
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
                <label className="stnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="stnotice" htmlFor="">
                  {fieldErrors.newPassConfirm}
                </label>
              )}
              <button className="btn btn-secondary row mx-auto one-btn">
                更改
              </button>
            </div>
          </form>
        </div>
      </div>
      <StBgDecorationNormal />
      <Footer />
    </>
  )
}
