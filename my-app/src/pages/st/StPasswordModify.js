import React, { useState, useRef, useEffect } from 'react'
import './style/st_passwordmodify.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import StSideBar from '../../components/st/StSideBar'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

export default withRouter(function StPasswordModify(props) {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const identity = member ? JSON.parse(member).identity : ''
  const studentSid = member ? JSON.parse(member).sid : ''
  const { auth, setAuth } = props
  const [imgSrc, setImgSrc] = useState('')

  const [close, setClose] = useState('far fa-eye-slash')
  const [closeAnother, setCloseAnother] = useState(
    'far fa-eye-slash'
  )
  const [type, setType] = useState('password')

  useEffect(() => {
    if (token && identity === 0) {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/stprofile/list`,
          {
            headers: {
              Authorization:
                'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        if (r) {
          console.log(r)
          setImgSrc(r.data[0][0].avatar)
        }
      })()
    } else {
      history.push('/')
    }
  }, [imgSrc])

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
        .put(
          `http://localhost:3001/passwordmodify/modify`,

          {
            body: {
              sid: studentSid,
              origin: fields.origin,
              newPassword: fields.newPassConfirm,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            setShowUp('showup')
            setTimeout(() => {
              setShowUp('none')
            }, 1000)
          } else {
            setFieldErrors({
              origin: res.data.error,
              newPass: '',
              newPassConfirm: '',
            })
          }
        })
    }
  }

  // const showOHide = () => {
  //   const eyes = document.querySelector('#_eye')
  //   const pw = document.querySelector('#_password')

  //   if (pw.type == 'password') {
  //     pw.type = 'text'
  //     eyes.className = 'mt-2 ml-1 far fa-eye'
  //   } else {
  //     pw.type = 'password'
  //     eyes.className = 'mt-2 ml-1 far fa-eye-slash'
  //   }
  // }

  return (
    <>
      <div className="container mainContent ">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText password">
              Password
            </span>
          </div>
        </div>
        <div className="row ">
          <StSideBar imgSrc={imgSrc} />
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
                <div
                  onClick={() => {
                    props.history.push(
                      '/StIndex/MemberCenter'
                    )
                  }}
                >
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </div>
                <div className="form-title"> 密碼更改 </div>
              </div>
              <div className="d-flex">
                <input
                  name="origin"
                  type="password"
                  className="col-12 allInputs"
                  placeholder="請輸入原密碼"
                  value={fields.origin}
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
              {fieldErrors.origin === '' ? (
                <label className="stnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="stnotice" htmlFor="">
                  {fieldErrors.origin}
                </label>
              )}
              <div className="d-flex">
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
      <div className="bgbeige"> </div> <Footer />
    </>
  )
})
