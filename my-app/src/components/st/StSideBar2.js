import React, { useState } from 'react'
import { IMG_PATH } from '../../config'

import { Nav } from 'react-bootstrap'

//讓Link標籤可以有style(透過加className)
import { withRouter, NavLink } from 'react-router-dom'

export default function StSideBar2(props) {
  const [isActive, setIsActive] = useState('')
  const { imgSrc } = props
  return (
    <>
      <Nav className="sidebar col-2">
        <div className="avatar">
          <img
            src={
              imgSrc
                ? IMG_PATH + '/' + imgSrc
                : IMG_PATH + '/' + 'presetAvatar.jpeg'
            }
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav-list">
          <li>
            <div className="nav-item">
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
              onClick={() => {
                setIsActive('我的課程')
              }}
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
              onClick={() => {
                setIsActive('教室上課')
              }}
            >
              <i className="fal fa-users-class"> </i>
              <div className="nav-item-text">教室上課</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StCalendar"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('課程管理')
              }}
            >
              <i class="fal fa-table"> </i>
              <div className="nav-item-text">課程管理</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StStartMyCourse"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('推薦課程')
              }}
            >
              <i className="fal fa-thumbs-up"> </i>
              <div className="nav-item-text">推薦課程</div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}
