import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { devUrl } from '../../config'

function TcVideoCard(props) {
  const {
    sid,
    course_sid,
    video_cover,
    video_name,
    teacher_sid,
    created_at,
    duration,
    view_count,
  } = props

  // 刪除課程
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //修改課程
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)
  return (
    <>
      <div className="TCcourse-card col-12">
        <div
          className="TCcourse-img"
          onClick={handleIsShow}
        >
          <img
            src={`${devUrl}/images/course/AdobeStock_339695471.jpg`}
            alt=""
          />
        </div>
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
              <span>影片長度：</span> {duration}
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
          <div className="resume">
            <input
              className="col-12 allInputs bgt"
              placeholder="請輸入影片標題 "
            />
            <button
              type="submit"
              className="btn-secondary browse"
            >
              更改名稱
            </button>
          </div>
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
            onClick={handleClose}
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
