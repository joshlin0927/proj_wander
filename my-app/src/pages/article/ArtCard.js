import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'

import { Modal } from 'react-bootstrap'
import { devUrl } from '../../config'

import {
  API_HOST,
  ArtMessage_DELETE,
  ArtMessage_EDIT,
  ArtMessage_LIST,
} from '../../config'

function ArtCard(props) {
  const member = localStorage.getItem('member')

  const memberObj = JSON.parse(member)

  // useEffect(() => {
  //   let r = axios.delete(TcCourse_DELETE)

  //   console.log(r)
  // }, [])

  // 使用物件值作為狀態值，儲存所有欄位的值

  const {
    sid,
    ar_sid,
    st_sid,
    st_pictuer,
    messenger,
    great,
    created_date,
    remove,
    setMess,
  } = props

  // 刪除留言
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //TODO: 怎麼將sid傳上去
  const deleteCourse = () => {
    ;(async () => {
      let r = await axios.delete(ArtMessage_DELETE + sid)
      if (r.status === 200) {
        remove()
        handleClose()
      }
    })()
  }

  //修改留言
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)

  // 留言欄位
  const [nameChange, setNameChange] = useState(messenger)

  console.log(nameChange)
  // console.log(setNameChange)

  const FormSubmit = async (e) => {
    e.preventDefault()
    const mess = new FormData(e.target).get('messenger')
    console.log('message:', mess)
    ;(async () => {
      let r = await axios.post(
        // `${ArtMessage_EDIT}${sid}`,
        `${ArtMessage_EDIT}?Sid=${sid}`,

        {
          messenger: mess,
        }
      )
      console.log(r)
      if (r.status === 200) {
        setMess(mess)
        handleIsClose()
      }
    })()
  }

  return (
    <>
      {/* <div className="TCcourse-card col-12"> */}
      <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
        <div className="TCcourse-img-sing">
          <img
            src={`${devUrl}/images/article/message/avatar/01.png`}
            alt=""
          />
          <span className="TCcourse-img-selector-sin">
            Ann{sid}
          </span>
        </div>
        <div className="TCcourse-info-sing">
          <div className="TCcourse-title-sin ">
            <p>{messenger}</p>
          </div>
          <div className="TCcourse-info-right-sin">
            <div className="TCcourse-detail-sin">
              <a href="#">
                <img
                  src={`${devUrl}/images/article/message/thumb_up.png`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {memberObj.sid === st_sid ? (
          <div
            className="TCcourse-delete-sing"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div
              className="opp-icon-sing"
              onClick={handleIsShow}
            >
              <i className="fas fa-edit"></i>
            </div>
            <div
              className="opp-icon-sing"
              title="刪除"
              onClick={handleShow}
            >
              <i className="fas fa-trash"></i>
            </div>
          </div>
        ) : (
          <div
            className="TCcourse-delete-sing"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <div className="opp-icon-sing">
              {/* <i className="fas fa-edit"></i> */}
            </div>
            <div className="opp-icon-sing" title="刪除">
              {/* <i className="fas fa-trash"></i> */}
            </div>
          </div>
        )}
      </li>
      <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>修改留言</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={FormSubmit}>
            <input
              name="messenger"
              className="col-12 allInputs bgt"
              // placeholder="修改留言 "
              value={nameChange}
              onChange={(e) => {
                setNameChange(e.target.value)
              }}
            />
            <button
              type="submit"
              className="btn btn-secondary mx-auto"
            >
              送出
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>刪除留言</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title text-center my-4"
            id="exampleModalLabel"
          >
            確定要刪除留言?
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={deleteCourse}
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

export default ArtCard
