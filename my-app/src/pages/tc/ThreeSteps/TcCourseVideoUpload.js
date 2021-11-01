import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import { useDropzone } from 'react-dropzone'

import { TcCourse_ADD } from '../../../config'

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

  const durationReader = useCallback((e) => {
    console.log('et', e.target.files)
    const file = e.target.files[0]
    const mime = file.type
    const reader = new FileReader()

    reader.onload = function (e) {
      let blob = new Blob([e.target.result], {
          type: mime,
        }),
        url = URL.createObjectURL(blob),
        video = document.createElement('video')

      // video.preload = 'metadata'
      video.addEventListener('loadedmetadata', function () {
        document.querySelector('#duration').innerHTML =
          '<div>' +
          `Duration: ${Math.ceil(video.duration)} s` +
          '</div>' +
          '<div>' +
          `File: ${file.name}` +
          '</div>' +
          '<div>' +
          `Size: ${file.size}` +
          '</div>' +
          '<div>' +
          `src: ${video.src.slice(27)}` +
          '</div>'

        URL.revokeObjectURL(url)
      })
      video.src = url
    }

    reader.readAsArrayBuffer(file)
    let r = axios.post(TcCourse_ADD, { video_link: file })
    console.log(r)
  }, [])

  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
  } = useDropzone({
    durationReader,
    accept: 'video/mp4,video/quicktime,video/x-ms-wmv',
  })

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
                name="formVideo"
              >
                <div
                  {...getRootProps({
                    className: 'dropzone',
                  })}
                >
                  <input
                    {...getInputProps()}
                    onChange={(e) => {
                      durationReader(e)
                    }}
                    name="video_link"
                  />
                </div>
                <i className="fas fa-upload"></i>
                <p>將你要上傳的影片檔案拖曳到這裡</p>
                <label>
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>

                <button
                  type="button"
                  className="btn btn-secondary mx-auto"
                  onClick={open}
                >
                  選擇檔案
                </button>
              </form>
              <div id="duration" className="videoMeta">
                <div name="duration">Duration:</div>
                <div>File:</div>
                <div>Size:</div>
                <div>src:</div>
              </div>
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
