import React from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'

import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseVideoUpload() {
  const durationReader = (e) => {
    const file = e.target.files[0],
      mime = file.type,
      reader = new FileReader()

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
  }

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
                <i className="fas fa-upload"></i>
                <p>將你要上傳的影片檔案拖曳到這裡</p>
                <label>
                  僅支持檔案小於1GB，且格式為mp4, mov,
                  wmv的檔案
                </label>
                <input
                  type="file"
                  id="durationReader"
                  onChange={durationReader}
                  className="d-none"
                  multiple
                ></input>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector('#durationReader')
                      .click()
                  }}
                >
                  選擇檔案
                </button>
                <div id="duration"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default TcCourseVideoUpload
