import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import axios from 'axios'

import {
  IMG_PATH,
  MemberAvatar,
  MemberLoginVerify,
  MemberEdit,
} from '../../config'

// components
import ConfirmMsg from '../../components/ConfirmMsg'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcProfile(props) {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

  //大頭貼狀態
  let [imgSrc, setImgSrc] = useState('')
  const doUpload = async () => {
    const r = await axios.post(
      `${MemberAvatar}/?teacherSid=${teacherSid}`,
      new FormData(document.formAvatar)
    )
    setImgSrc(r.data.filename)
    console.log(r.data)
  }

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `${MemberEdit}/?teacherSid=${teacherSid}`
        )
        // 為什麼生日填不上去? ANS:在node就先處理，在mysql-connect就設定dateToString為true
        setFields(r.data[0])
        setImgSrc(r.data[0].avatar)
      })()
    }
  }, [imgSrc])

  //設定確認表單送出訊息框的狀態
  const [showUp, setShowUp] = useState('')

  //預覽大頭貼的地方
  // const imgRef = useRef(null)
  //實際擁有預覽功能的input因為太醜藏起來
  const inputRef = useRef(null)
  // const previewFile = () => {
  //   var preview = imgRef.current
  //   var file = inputRef.current.files[0]
  //   var reader = new FileReader()

  //   reader.addEventListener(
  //     'load',
  //     function () {
  //       preview.src = reader.result
  //     },
  //     false
  //   )

  //   if (file) {
  //     reader.readAsDataURL(file)
  //   }
  // }

  const formRef = useRef(null)
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    birth: '',
    nickname: '',
    language: '',
    intro: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    language: '',
    birth: '',
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
  const ProfileFormSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const TcProfileFormData = new FormData(e.target)
    // console.log(TcProfileFormData.get('avatar'))
    // console.log(TcProfileFormData.get('birth'))
    // console.log(TcProfileFormData.get('nickname'))
    // console.log(TcProfileFormData.get('language'))

    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器

    const r = fetch(
      `${MemberEdit}/?teacherSid=${teacherSid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          TcProfileFormData
        ).toString(),
      }
    )
      .then((r) => r.json())
      .then((obj) => {
        // console.log(JSON.stringify(obj, null, 4))
        if (obj.success) {
          setShowUp('showup')
          setTimeout(() => {
            setShowUp('none')
          }, 1000)
        }
        // else {
        //   alert(obj.error || '資料修改失敗')
        // }
      })
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const ProfileFormChange = (e) => {
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
  const ProfileFormInvalid = (e) => {
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

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCprofile">
              Profile
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar imgSrc={imgSrc} />
          {/* form */}
          <form
            encType="multipart/form-data"
            name="profile"
            className="TCform col-12 offset-0 col-md-8 offset-md-1"
            ref={formRef}
            onSubmit={ProfileFormSubmit}
            onChange={ProfileFormChange}
            onInvalid={ProfileFormInvalid}
          >
            <ConfirmMsg showUp={showUp} />
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">個人資料</div>
                <i className="TCback-btn"></i>
                {/* <button
                  className="TCbtn btn-primary preview-btn-top"
                  to=""
                >
                  <span>個人頁面預覽</span>
                </button> */}
              </div>
              {/* HeadImgSelector */}
              <div className="d-flex align-items-center">
                <div className="profile-pic">
                  <img
                    src={
                      imgSrc
                        ? IMG_PATH + '/' + imgSrc
                        : IMG_PATH +
                          '/' +
                          'c943da4c-dd71-4e60-b598-ee44fdbd2fb6.jpg'
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <label className="TCbtn btn-border-only">
                  <form name="formAvatar">
                    <input
                      type="file"
                      name="avatar"
                      className="d-none"
                      accept="image/*"
                      onChange={doUpload}
                      ref={inputRef}
                    />
                    <input
                      name="teacherSid"
                      value={teacherSid}
                      className="d-none"
                    />
                  </form>
                  <span>請選擇圖片</span>
                </label>
              </div>
              <div className="fullname row">
                <div className="col-6 ">
                  <input
                    name="firstname"
                    type="text"
                    className="TCnameInputs"
                    placeholder="名字"
                    value={fields.firstname}
                    onChange={handleFieldChange}
                    required
                  />
                  {fieldErrors.firstname === '' ? (
                    <label className="TCnotice" htmlFor="">
                      &nbsp;
                    </label>
                  ) : (
                    <label className="TCnotice" htmlFor="">
                      {fieldErrors.firstname}
                    </label>
                  )}
                </div>
                <div className="col-6 ">
                  <input
                    name="lastname"
                    type="text"
                    className="TCnameInputs"
                    placeholder="姓氏"
                    value={fields.lastname}
                    onChange={handleFieldChange}
                    required
                  />
                  {fieldErrors.lastname === '' ? (
                    <label className="TCnotice" htmlFor="">
                      &nbsp;
                    </label>
                  ) : (
                    <label className="TCnotice" htmlFor="">
                      {fieldErrors.lastname}
                    </label>
                  )}
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
                  disabled
                />
              </div>

              <input
                name="birth"
                type="date"
                className="col-12 allInputs px-2"
                placeholder="生日"
                title="請選擇生日"
                value={fields.birth}
                onChange={handleFieldChange}
                min="1900-01-01"
                max="2011-01-01"
                required
              />
              {fieldErrors.birth === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.birth}
                </label>
              )}
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
                id="intro"
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
            {/* <button
              id="TcPreviewBtn"
              className="TCbtn btn-primary preview-btn"
            >
              <span>個人頁面預覽</span>
            </button> */}
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(TcProfile)
