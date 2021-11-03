import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import axios from 'axios'

import { MemberEdit } from '../../config'

function TcApplyForm() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

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

  const formRef = useRef(null)
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    language: '',
    resume: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    language: '',
    resume: '',
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
  const FormSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const TcFormData = new FormData(e.target)
    // console.log(TcFormData.get('nationality'))
    // console.log(TcFormData.get('language'))
    // console.log(TcFormData.get('resume'))

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
        body: new URLSearchParams(TcFormData).toString(),
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
      <div className="TCform col-12 col-md-6 mx-auto">
        <form
          className="p-4"
          ref={formRef}
          onSubmit={FormSubmit}
          onChange={FormChange}
          onInvalid={FormInvalid}
        >
          <div className="TCform-content w-100">
            <div className="TCform-head ml-1">
              <Link to="/">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title">審核資料</div>
              <i className="TCback-btn"></i>
            </div>
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
            <div
              className="resume"
              onClick={() => {
                document
                  .querySelector('#realFileInput')
                  .click()
              }}
            >
              <input
                disabled
                id="fakeFileInput"
                className="col-10 special_browsing_Inputs"
                placeholder="請選擇要上傳的履歷"
                value={fields.resume.slice(12)}
              />
              <label
                id="brwosing"
                className="btn btn-secondary browse"
              >
                <input
                  type="file"
                  accept="application/pdf"
                  id="realFileInput"
                  name="resume"
                  className="d-none"
                  required
                  value={fields.resume}
                  onChange={handleFieldChange}
                />
                <span>瀏覽</span>
              </label>
            </div>
            {fieldErrors.resume === '' ? (
              <label className="TCnotice" htmlFor="">
                &nbsp;
              </label>
            ) : (
              <label className="TCnotice" htmlFor="">
                {fieldErrors.resume}
              </label>
            )}
          </div>
          <button className="btn btn-secondary mx-auto one-btn">
            <span>送出</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default withRouter(TcApplyForm)
