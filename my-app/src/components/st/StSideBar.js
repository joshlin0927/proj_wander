import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { devUrl } from '../../config'

//讓Link標籤可以有style(透過加className)
import { NavLink } from 'react-router-dom'

export default function StSideBar(props) {
  const [isActive, setIsActive] = useState('')
  return (
    <>
      <Nav className="sidebar col-2">
        <div className="avatar">
          <img
            src={`${devUrl}/images/pic/學生照片/Anne Hathaway.jpg`}
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav-list">
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StProfile"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('個人資料')
              }}
            >
              <i className="fas fa-user"> </i>
              <div className="nav-item-text">個人資料</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StPasswordModify"
              className="nav-item"
              activeclassname="active"
              onClick={() => {
                setIsActive('密碼更改')
              }}
            >
              <i className="fas fa-key"></i>
              <div className="nav-item-text">密碼更改</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/Cart"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('訂單查詢')
              }}
            >
              <i className="fas fa-shopping-bag"> </i>
              <div className="nav-item-text">訂單查詢</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              className={
                isActive === '聊天室'
                  ? 'nav-item' + ' ' + 'active'
                  : 'nav-item'
              }
              activeClassName="active"
              onClick={() => {
                setIsActive('聊天室')
              }}
            >
              <i className="fas fa-comment-alt"> </i>
              <div className="nav-item-text"> 聊天室 </div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}
