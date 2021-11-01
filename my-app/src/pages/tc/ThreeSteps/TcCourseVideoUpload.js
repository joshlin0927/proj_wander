import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'

import { TcVideo_ADD } from '../../../config'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'

import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'
import axios from 'axios'

function TcCourseVideoUpload() {
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

  const inputRef = useRef(null)

  const formRef = useRef(null)
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    duration: '',
    video_name: '',
    video_link: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    video_link: '',
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

  const durationReader = (e) => {
    // console.log('et', e.target.files)
    const file = e.target.files[0]
    const mime = file.type
    const reader = new FileReader()

    reader.onChangeCapture = function (e) {
      let blob = new Blob([e.target.result], {
          type: mime,
        }),
        url = URL.createObjectURL(blob),
        video = document.createElement('video')

      // video.preload = 'metadata'
      video.addEventListener('loadedmetadata', function () {
        // document.querySelector('#duration').innerHTML =
        //   '<div>' +
        //   `Duration: ${Math.ceil(video.duration)} s` +
        //   '</div>' +
        //   '<div>' +
        //   `File: ${file.name}` +
        //   '</div>' +
        //   '<div>' +
        //   `Size: ${file.size}` +
        //   '</div>'
        const data = {
          duration: Math.ceil(video.duration),
          video_name: file.name,
          video_link: file.size,
        }

        setFields(data)
        URL.revokeObjectURL(url)
      })
      video.src = url
    }

    reader.readAsArrayBuffer(file)
  }

  // 在 表單完成驗証 之後，才會觸發
  const ProfileFormSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const FormData = new FormData(e.target)
    // console.log(FormData.get('duration'))
    // console.log(FormData.get('video_name'))
    // console.log(FormData.get('video_link'))

    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器

    const r = fetch(TcVideo_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(FormData).toString(),
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(JSON.stringify(obj, null, 4))
        if (obj.success) {
          alert('資料修改成功')
          // TODO: 修改alert成通知條形式(ConfirmMsg)
        } else {
          alert(obj.error || '資料修改失敗')
        }
      })
  }

  const doUpload = async () => {
    const r = await axios.post(
      TcVideo_ADD,
      new FormData(document.formVideo)
    )
    console.log(r)
    if (r.success === true) {
      alert('資料修改成功')
    } else {
      alert(r.error || '資料修改失敗')
    }
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

  // window.addEventListener(
  //   'dragover',
  //   function (e) {
  //     e.preventDefault()
  //   },
  //   false
  // )
  // window.addEventListener(
  //   'drop',
  //   function (e) {
  //     e.preventDefault()
  //   },
  //   false
  // )

  const dd = document.querySelector('#formVideo')
  const video_link = document.querySelector('#video_link')
  // dd.ondragover = (e) => {
  //   e.preventDefault()
  // }

  // dd.ondragenter = (e) => {
  //   e.preventDefault()
  // }

  const DragNDrop = function (e) {
    video_link.files = e.dataTransfer.files

    // If you want to use some of the dropped files
    const dT = new DataTransfer()
    dT.items.add(e.dataTransfer.files[0])
    video_link.files = dT.files

    e.preventDefault()
  }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <div className="TCform col-12 col-md-10">
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="/TcIndex/TcCourseEdit/:sid?">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">
                  課程內容上傳
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="/TcIndex/TcCourseVideoEdit"
                    className="TCbtn-sm-w-switch btn-primary"
                  >
                    <span>下一步</span>
                  </Link>
                </div>
              </div>

              <form
                className="TCvideo-drop-zone"
                id="formVideo"
                name="formVideo"
                ref={formRef}
                onSubmit={ProfileFormSubmit}
                onChange={ProfileFormChange}
                onInvalid={ProfileFormInvalid}
                onDrop={(e) => {
                  DragNDrop(e)
                }}
                // onClick={() => {
                //   video_link.click()
                // }}
              >
                <i className="fas fa-upload"></i>
                <p>將你要上傳的影片檔案拖曳到這裡</p>
                <label>
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>
                <input
                  type="file"
                  accept="video/mp4,video/quicktime,video/x-ms-wmv"
                  id="video_link"
                  name="video_link"
                  // className="d-none"
                  value={fields.video_link}
                  onChange={handleFieldChange}
                  onChangeCapture={durationReader}
                  ref={inputRef}
                />
                <div id="duration" className="videoMeta">
                  <div>
                    Duration:
                    <input
                      name="duration"
                      value={fields.duration}
                      onChange={handleFieldChange}
                    />
                  </div>
                  <div>
                    File:
                    <input
                      name="video_name"
                      value={fields.video_name}
                      onChange={handleFieldChange}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary mx-auto"
                  // onClick={doUpload}
                >
                  上傳檔案
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default withRouter(TcCourseVideoUpload)
