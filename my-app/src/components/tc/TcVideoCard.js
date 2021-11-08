import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

import { TcVideo__DELETE, TcVideo_EDIT } from '../../config'

function TcVideoCard(props) {
  const {
    sid,
    // course_sid,
    // course_name,
    // video_cover,
    video_name,
    // teacher_sid,
    created_at,
    duration1,
    remove,
    status,
    setShowUp,
  } = props

  //時間換算
  const videoTime = moment
    .duration(duration1, 'seconds')
    .format('hh:mm:ss')

  // 刪除影片
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const deleteVideo = async () => {
    let r = await axios.delete(TcVideo__DELETE + sid)
    handleClose()
  }

  //修改影片
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)

  // 影片名稱欄位
  const [nameChange, setNameChange] = useState(video_name)

  // 影片名稱修改後的送出
  const FormSubmit = async (e) => {
    e.preventDefault()

    // console.log(new FormData(e.target).get('video_name'))
    ;(async () => {
      let r = await axios.post(
        `${TcVideo_EDIT}?videoSid=${sid}`,
        {
          video_name: new FormData(e.target).get(
            'video_name'
          ),
        }
      )
      // console.log(r)
      handleIsClose()
      if (r.data.success === true) {
        setShowUp('showup')
        setTimeout(() => {
          setShowUp('none')
        }, 1000)
      }
    })()
  }

  return (
    <>
      <div className="TCcourse-card col-12">
        {/* <div
          className="TCcourse-img"
          onClick={handleIsShow}
        >
          {video_cover ? (
            <img
              src={`${API_HOST}/img/${video_cover}`}
              alt=""
            />
          ) : (
            <img
              src={`${devUrl}/images/course/AdobeStock_339695471.jpg`}
              alt=""
            />
          )}
        </div> */}
        <div
          className="TCcourse-info"
          onClick={handleIsShow}
        >
          <div className="TCcourse-title">
            <span>{video_name}</span>
          </div>
          <div className="TCcourse-info-right">
            <div className="TCcourse-detail">
              <span>上傳日期：</span> {created_at}
            </div>
            <div className="TCcourse-detail">
              <span>影片長度：</span>
              {videoTime}
            </div>
          </div>
        </div>
        <div
          className="TCcourse-delete"
          title="刪除"
          onClick={handleShow}
        >
          <i className="far fa-times-circle"></i>
        </div>
      </div>
      <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>影片資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={FormSubmit}>
            <input
              name="video_name"
              className="col-12 allInputs bgt"
              placeholder="請輸入影片標題 "
              value={nameChange}
              onChange={(e) => {
                setNameChange(e.target.value)
              }}
            />
            <button
              type="submit"
              className="btn btn-secondary mx-auto"
              onClick={status}
            >
              更改名稱
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>刪除影片</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title text-center my-4"
            id="exampleModalLabel"
          >
            確定要刪除影片?
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={remove}
            onMouseUp={deleteVideo}
            onTouchEnd={deleteVideo}
            onTouchStart={deleteVideo}
          >
            <span>是</span>
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleClose}
          >
            <span>否</span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TcVideoCard
