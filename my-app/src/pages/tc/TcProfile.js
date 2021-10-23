import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcAvatarSelector from '../../components/tc/TcAvatarSelector'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcProfile() {
  const formRef = useRef(null)

  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    nickname: '',
    language: '',
    intro: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    nickname: '',
    language: '',
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

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('firstname'))
    console.log(formData.get('lastname'))
    console.log(formData.get('email'))
    console.log(formData.get('birthday'))
    console.log(formData.get('nickname'))
    console.log(formData.get('language'))

    // 利用狀態來得到輸入的值
    console.log(fields)
    // ex. 用fetch api/axios送到伺服器
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const handleFormChange = (e) => {
    // console.log('更動欄位：', e.target.name)

    // 該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
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
        // console.log([element.name], element.title)
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <div className="container mainContent">
        {/* breadcrumb */}
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCprofile">
              Profile
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
            onInvalid={handleInvalid}
          >
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">個人資料</div>
                <i className="TCback-btn"></i>
                <button className="TCbtn btn-primary preview-btn-top">
                  <span>個人頁面預覽</span>
                </button>
              </div>
              {/* HeadImgSelector */}
              <TcAvatarSelector />
              <div className="fullname d-flex">
                <div className="col-6 pl-0">
                  <input
                    name="firstname"
                    type="text"
                    className="nameInputs"
                    placeholder="名字"
                    value={fields.firstname}
                    onChange={handleFieldChange}
                    readOnly
                  />
                </div>
                <div className="col-6 pr-0">
                  <input
                    name="lastname"
                    type="text"
                    className="nameInputs"
                    placeholder="姓氏"
                    value={fields.lastname}
                    onChange={handleFieldChange}
                    readOnly
                  />
                </div>
              </div>
              <div className="TCmb-50">
                <input
                  name="email"
                  type="email"
                  className="col-12 allInputs"
                  placeholder="信箱"
                  value={fields.email}
                  onChange={handleFieldChange}
                  readOnly
                />
              </div>
              <div className="TCmb-50">
                <input
                  name="birthday"
                  type="date"
                  className="col-12 allInputs px-2"
                  placeholder="生日"
                  title="請選擇生日"
                  value={fields.birthday}
                  onChange={handleFieldChange}
                  min="1900-01-01"
                  max="2011-01-01"
                />
              </div>
              <input
                name="nickname"
                type="text"
                className="col-12 allInputs"
                placeholder="暱稱"
                title="請填寫暱稱"
                value={fields.nickname}
                onChange={handleFieldChange}
                required
                minLength="1"
              />
              {fieldErrors.nickname === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.nickname}
                </label>
              )}
              <input
                name="language"
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入擅長的語言"
                title="請填寫至少一種語言"
                value={fields.language}
                onChange={handleFieldChange}
                required
                minLength="2"
              />
              {fieldErrors.language === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.language}
                </label>
              )}
              <textarea
                name="intro"
                rows="5"
                className="TC-intro w-100 col-12"
                placeholder="自我介紹"
                value={fields.intro}
                onChange={handleFieldChange}
              ></textarea>
            </div>
            <button
              id="TcSaveBtn"
              className="TCbtn btn-secondary mx-auto TCsave-btn"
            >
              <span>儲存</span>
            </button>
            <button
              id="TcPreviewBtn"
              className="TCbtn btn-primary preview-btn"
            >
              <span>個人頁面預覽</span>
            </button>
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default TcProfile
