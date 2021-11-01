import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'

import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'

import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

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
          'Duration: ' + video.duration + 's'
        URL.revokeObjectURL(url)
      })
      video.src = url
    }
    reader.readAsArrayBuffer(file)
  }, [])

  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
  } = useDropzone({
    durationReader,
  })

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form className="TCform col-12 col-md-10">
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="/TCindex/TcCourseEdit/:sid?">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">
                  課程內容上傳
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to="/TCindex/TcCourseVideoEdit"
                    className="TCbtn-sm-w-switch btn-primary"
                  >
                    <span>下一步</span>
                  </Link>
                </div>
              </div>

              <div className="TCvideo-drop-zone">
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
              </div>
              <ul>{files}</ul>
              <div id="duration"></div>
            </div>
          </form>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default withRouter(TcCourseVideoUpload)
