import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import { TcVideo_ADD } from '../../../config'

// components
import ConfirmMsg from '../../../components/ConfirmMsg'
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseVideoUpload() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const memberObj = member ? JSON.parse(member) : ''
  const courseSid = sessionStorage.getItem('courseSid')
    ? sessionStorage.getItem('courseSid')
    : ''

  // console.log(courseSid);
  useEffect(() => {
    if (!token && memberObj.identity !== 1) {
      history.push('/')
    } else {
      return
    }
  }, [])

  // 拖曳讀取檔案
  // const DragNDrop = function (e) {
  //   video_link.files = e.dataTransfer.files

  //   // If you want to use some of the dropped files
  //   const dT = new DataTransfer()
  //   dT.items.add(e.dataTransfer.files[0])
  //   video_link.files = dT.files

  //   e.preventDefault()
  // }

  //設定確認表單送出訊息框的狀態
  const [showUp, setShowUp] = useState('')
  const [selectedFile, setSelectedFile] = useState()
  // const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    // setIsFilePicked(true)
  }

  // console.log('selectedFile', selectedFile)

  const formRef = useRef(null)
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    duration: '',
    video_name: '',
    video_link: '',
  })

  // console.log(fields.video_link)

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
    const reader = new FileReader()
    if (file) {
      const mime = file.type

      reader.onload = function (e) {
        let blob = new Blob([e.target.result], {
            type: mime,
          }),
          url = URL.createObjectURL(blob),
          video = document.createElement('video')
        // console.log('url', url)
        // video.preload = 'metadata'
        video.addEventListener(
          'loadedmetadata',
          function () {
            const data = {
              duration: Math.ceil(video.duration),
              video_name: file.name,
              // video_link: url.slice(27),
              size: file.size,
            }

            setFields(data)
            URL.revokeObjectURL(url)
          }
        )
        video.src = url
      }

      reader.readAsArrayBuffer(file)
    }
  }

  console.log(selectedFile)

  const FormSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()
    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formVideo = new FormData(e.target)
    // console.log(formVideo.get('duration'))
    // console.log(formVideo.get('video_name'))
    // console.log(formVideo.get('video_link'))

    // formVideo.append('video_link', selectedFile)
    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器

    fetch(TcVideo_ADD, {
      method: 'POST',
      body: formVideo,
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(JSON.stringify(obj, null, 4))
        if (obj.success) {
          setShowUp('showup')
          setTimeout(() => {
            setShowUp('none')
          }, 3000)
        } else {
          alert(obj.error || '資料新增失敗')
        }
      })
    setFields('')
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

  // dd.ondragover = (e) => {
  //   e.preventDefault()
  // }

  // dd.ondragenter = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <div
            className="TCform col-12 col-md-10"
            name="formVideo"
          >
            <ConfirmMsg showUp={showUp} text={'上傳成功'} />
            <form
              className="TCform-content"
              onChange={FormChange}
              onSubmit={FormSubmit}
              ref={formRef}
            >
              <div className="TCform-head">
                <div onClick={history.goBack}>
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </div>
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

              <div
                className="TCvideo-drop-zone"
                onClick={() => {
                  document
                    .querySelector('#video_link')
                    .click()
                }}
              >
                <i className="fas fa-upload"></i>

                <p>請點擊並選擇要上傳的檔案</p>
                <label
                  id="warning"
                  className={
                    selectedFile
                      ? selectedFile.size < 1000000000
                        ? selectedFile.type !==
                            'video/mp4' &&
                          selectedFile.type !==
                            'video/quicktime' &&
                          selectedFile.type !==
                            'video/x-ms-wmv'
                          ? 'text-danger'
                          : ''
                        : 'text-danger'
                      : ''
                  }
                >
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>

                <input
                  type="file"
                  accept="video/mp4,video/quicktime,video/x-ms-wmv"
                  id="video_link"
                  name="video_link"
                  className="d-none"
                  onChange={changeHandler}
                  onChangeCapture={durationReader}
                />

                <div
                  id="duration"
                  className="videoMeta"
                  // onDrop={(e) => {
                  //   DragNDrop(e)
                  // }}
                >
                  <div className="">
                    <input
                      name="duration"
                      className="d-none"
                      value={fields.duration + 's'}
                      onChange={handleFieldChange}
                    />
                    <input
                      name="course_sid"
                      className="d-none"
                      value={courseSid}
                      onChange={handleFieldChange}
                    />
                    <input
                      name="teacher_sid"
                      className="d-none"
                      value={memberObj.sid}
                      onChange={handleFieldChange}
                    />
                  </div>
                  <div className="d-flex mx-auto ">
                    <span className="TCvideoName">
                      影片名稱:
                    </span>
                    <input
                      id="video_name"
                      name="video_name"
                      className="d-none"
                      value={
                        fields.video_name
                          ? fields.video_name.slice(
                              0,
                              fields.video_name.length - 4
                            )
                          : fields.video_name
                      }
                      onChange={handleFieldChange}
                    />
                    <label>
                      {fields.video_name
                        ? fields.video_name.slice(
                            0,
                            fields.video_name.length - 4
                          )
                        : fields.video_name}
                    </label>
                  </div>
                </div>
              </div>
              {selectedFile ? (
                selectedFile.type !== 'video/mp4' &&
                selectedFile.type !== 'video/quicktime' &&
                selectedFile.type !== 'video/x-ms-wmv' ? (
                  <button
                    disabled
                    type="submit"
                    id="uploadBtn"
                    className="btn btn-secondary mx-auto mb-5"
                  >
                    上傳檔案
                  </button>
                ) : selectedFile.size < 1000000000 ? (
                  <button
                    type="submit"
                    id="uploadBtn"
                    className="btn btn-secondary mx-auto mb-5"
                  >
                    上傳檔案
                  </button>
                ) : (
                  <button
                    disabled
                    type="submit"
                    id="uploadBtn"
                    className="btn btn-secondary mx-auto mb-5"
                  >
                    上傳檔案
                  </button>
                )
              ) : (
                <button
                  disabled
                  type="submit"
                  id="uploadBtn"
                  className="btn btn-secondary mx-auto mb-5"
                >
                  上傳檔案
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default withRouter(TcCourseVideoUpload)
