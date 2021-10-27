import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { devUrl } from '../../../config'

import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseEdit() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      return
    }
  }, [])

  const formRef = useRef(null)

  //預覽大頭貼的地方
  const imgRef = useRef(null)
  //實際擁有預覽功能的input因為太醜藏起來
  const inputRef = useRef(null)

  const previewFile = () => {
    var preview = imgRef.current
    var file = inputRef.current.files[0]
    var reader = new FileReader()

    reader.addEventListener(
      'load',
      function () {
        preview.src = reader.result
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    course_name: '',
    course_category: '',
    course_price: '',
    course_intro: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    course_name: '',
    course_category: '',
    course_price: '',
    course_intro: '',
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
  const ProfileFormSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('course_name'))
    console.log(formData.get('course_category'))
    console.log(formData.get('course_price'))
    console.log(formData.get('course_intro'))

    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器
    // const usp = new URLSearchParams(formData)
    // const r = await fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: usp.toString(),
    // })
    //   .then((r) => r.json())
    //   .then((obj) => {
    //     // 查看附帶的數值
    //     console.log(JSON.stringify(obj, null, 4))
    //     if (obj.success === true) {
    //     }
    //   })
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
            [element.name]: element.validationMessage,
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
      {/* Main Content */}
      <div className="container mainContent">
        {/* logo */}
        <div className="row">
          <MultiLevelBreadCrumb />
        </div>
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          {/* form */}
          <form
            className="TCform col-12 col-md-10"
            ref={formRef}
            onSubmit={ProfileFormSubmit}
            onChange={ProfileFormChange}
            onInvalid={ProfileFormInvalid}
          >
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="/TCindex/TcCourse/">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">
                  課程細節頁面
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="/TCindex/TcCourseVideoUpload"
                    className="TCbtn-sm-w-switch btn-primary"
                  >
                    <span>儲存</span>
                  </Link>
                </div>
              </div>

              <div className="TCcourse-img-selector">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  className="d-none"
                  ref={inputRef}
                  onChange={previewFile}
                />
                <div className="TCcourse-pic-square">
                  <img
                    src={`${devUrl}/images/pic/presetAvatar.jpeg`}
                    className="img-fluid"
                    alt=""
                    name="avatar"
                    ref={imgRef}
                  />
                </div>
                <button
                  className="TCbtn btn-border-only"
                  id="loadFile"
                  onClick={(e) => {
                    e.preventDefault()
                    inputRef.current.click()
                  }}
                >
                  <span>請選擇圖片</span>
                </button>
              </div>
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入課程標題"
                name="course_name"
                value={fields.course_name}
                onChange={handleFieldChange}
                title="請輸入課程標題"
                required
                minLength="1"
              />
              {fieldErrors.course_name === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.course_name}
                </label>
              )}
              <select
                type="text"
                className="col-12 allInputs"
                placeholder="課程種類"
                name="course_category"
                value={fields.course_category}
                onChange={handleFieldChange}
                title="請選擇課程種類"
                required
              >
                <option value="" disabled>
                  請選擇
                </option>
                <option value="日文">日文</option>
                <option value="英文">英文</option>
                <option value="中文">中文</option>
              </select>
              {fieldErrors.course_category === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.course_category}
                </label>
              )}

              <input
                type="number"
                className="col-12 allInputs"
                placeholder="課程定價"
                name="course_price"
                value={fields.course_price}
                onChange={handleFieldChange}
                required
                min="0"
              />
              {fieldErrors.course_price === '' ? (
                <label className="TCnotice" htmlFor="">
                  &nbsp;
                </label>
              ) : (
                <label className="TCnotice" htmlFor="">
                  {fieldErrors.course_price}
                </label>
              )}
              <textarea
                type="text"
                className="TC-intro w-100 col-12"
                placeholder="課程介紹與說明"
                name="course_intro"
                id="course_intro"
                rows="5"
                value={fields.course_intro}
                onChange={handleFieldChange}
              ></textarea>
            </div>
            <div className="onebtn-switch">
              <Link
                to="/TCindex/TcCourseVideoUpload"
                type="submit"
                className="TCbtn btn-secondary mx-auto one-btn"
              >
                <span>儲存</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* bg decoration */}
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default TcCourseEdit
