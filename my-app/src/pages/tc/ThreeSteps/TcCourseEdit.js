import React, { useRef, useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  IMG_PATH,
  TcCourse_EDIT,
  TcCourse_Cover,
} from '../../../config'

import ConfirmMsg from '../../../components/ConfirmMsg'
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseEdit(props) {
  //課程封面狀態
  let [imgSrc, setImgSrc] = useState('')
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const identity = member ? JSON.parse(member).identity : ''
  const teacherSid = member ? JSON.parse(member).sid : ''
  const courseSid = sessionStorage.getItem('courseSid')
    ? sessionStorage.getItem('courseSid')
    : ''

  useEffect(() => {
    if (!token && identity !== 1) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `${TcCourse_EDIT}/?courseSid=${courseSid}`
        )
        setFields(r.data[0])
        setImgSrc(r.data[0].course_img)
        // console.log('edit', r.data[0])
      })()
    }
  }, [imgSrc])

  const formRef = useRef(null)

  const doUpload = async () => {
    const r = await axios.post(
      `${TcCourse_Cover}?sid=${courseSid}`,
      new FormData(document.formCover)
    )
    setImgSrc(r.data.filename)
    // console.log(r.data)
  }
  // console.log(imgSrc)

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

  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    teacher_sid: '',
    course_name: '',
    course_category: '',
    course_price: '',
    course_introduction: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    teacher_sid: '',
    course_name: '',
    course_category: '',
    course_price: '',
    course_introduction: '',
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
  const FormSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    // console.log(formData.get('course_name'))
    // console.log(formData.get('course_category'))
    // console.log(formData.get('course_price'))
    // console.log(formData.get('course_introduction'))
    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器
    // 修改課程
    fetch(TcCourse_EDIT + props.location.search, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(JSON.stringify(obj, null, 4))
        if (obj.success) {
          setShowUp('showup')
          setTimeout(() => {
            setShowUp('none')
          }, 3000)
        } else {
          alert(obj.error || '資料新增失敗')
        }
      })
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const FormChange = (e) => {
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
  const FormInvalid = (e) => {
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
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar CourseSid={fields.sid} />
          {/* form */}
          <form
            className="TCform col-12 col-md-10"
            ref={formRef}
            onSubmit={FormSubmit}
            onChange={FormChange}
            onInvalid={FormInvalid}
          >
            <ConfirmMsg showUp={showUp} />
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="/TcIndex/TcCourse/">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">
                  課程細節頁面
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="/TcIndex/TcCourseVideoUpload"
                    className="TCbtn-sm-w-switch btn-primary"
                  >
                    <span>儲存</span>
                  </Link>
                </div>
              </div>
              <input
                name="teacher_sid"
                value={teacherSid}
                className="d-none"
              />
              <div className="TCcourse-img-selector">
                <div className="TCcourse-pic-square">
                  <img
                    src={
                      imgSrc
                        ? IMG_PATH + '/course/img/' + imgSrc
                        : IMG_PATH +
                          '/course/' +
                          'Course_Preset.jpg'
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <label className="TCbtn btn-border-only">
                  <form name="formCover">
                    <input
                      type="file"
                      name="course_img"
                      className="d-none"
                      accept="image/*"
                      onChange={doUpload}
                      ref={inputRef}
                    />
                    <input
                      name="sid"
                      value={fields.sid}
                      className="d-none"
                    />
                  </form>
                  <span>請選擇圖片</span>
                </label>
              </div>
              <input
                name="sid"
                value={fields.sid}
                className="d-none"
              />
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
                name="course_introduction"
                id="course_introduction"
                rows="5"
                value={fields.course_introduction}
                onChange={handleFieldChange}
              ></textarea>
            </div>
            <div className="onebtn-switch">
              <button
                // to="/TcIndex/TcCourseVideoUpload"
                type="submit"
                className="TCbtn btn-secondary mx-auto one-btn"
              >
                <span>儲存</span>
              </button>
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

export default withRouter(TcCourseEdit)
