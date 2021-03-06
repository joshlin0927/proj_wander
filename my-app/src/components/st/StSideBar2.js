import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { IMG_PATH } from '../../config'

import { Nav } from 'react-bootstrap'

//讓Link標籤可以有style(透過加className)
import { NavLink } from 'react-router-dom'

//引用元件
import ChatList from '../chatroom/ChatList'

export default function StSideBar2(props) {
  const { imgSrc } = props

  let [chat, setChat] = useState('d-none')
  const [isOpen, setIsOpen] = useState(false)
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)

  return (
    <>
      <Nav className="sidebar col-2">
        <div className="avatar">
          <img
            src={
              imgSrc
                ? IMG_PATH + '/' + imgSrc
                : `${IMG_PATH}/presetAvatar.jpeg`
            }
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav-list">
          <li>
            <div
              id="nav-item-chatroom"
              className={
                isOpen ? 'nav-item active' : 'nav-item'
              }
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false)
                  setChat('d-none')
                } else {
                  setIsOpen(true)
                  setChat('d-block')
                }
              }}
            >
              <i className="fas fa-user"> </i>
              <div className="nav-item-text"> 聊天室 </div>
            </div>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StCourse"
              className="nav-item"
              activeClassName="active"
            >
              <i className="far fa-play-circle"> </i>
              <div className="nav-item-text">我的課程</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StClassroom"
              className="nav-item"
              activeClassName="active"
            >
              <i
                className="fal fa-users-class"
                style={{ width: '24px', height: '24px' }}
              ></i>
              <div className="nav-item-text">教室上課</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StCalendar"
              className="nav-item"
              activeClassName="active"
            >
              <i
                className="fal fa-table"
                style={{
                  paddingLeft: '2px',
                }}
              ></i>
              <div className="nav-item-text">課程管理</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StStartMyCourse"
              className="nav-item"
              activeClassName="active"
            >
              <i className="fal fa-thumbs-up"> </i>
              <div className="nav-item-text">推薦課程</div>
            </Nav.Link>
          </li>
        </ul>
        <div className="chatWrapper">
          <ChatList
            setChat={setChat}
            chat={chat}
            isOpen={isOpen}
          />
        </div>
      </Nav>
      {/* 教師訪問stop Modal */}
      <Modal
        show={stopModalShow}
        onHide={handleStopModalClose}
        id="alertModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>如要購買課程請先登入學生帳戶</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleStopModalClose}
          >
            前往登入
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
