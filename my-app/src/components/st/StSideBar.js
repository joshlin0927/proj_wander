import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { devUrl } from '../../config'
<<<<<<< HEAD

//讓Link標籤可以有style(透過加className)
import { NavLink } from 'react-router-dom'

export default function StSideBar(props) {
=======
import { withRouter, NavLink } from 'react-router-dom'

function StSideBar(props) {
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
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
<<<<<<< HEAD
              to="/StIndex/StProfile"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('個人資料')
              }}
=======
              to="/StIndex/StProfile/:id?"
              className="nav-item"
              activeclassname="active"
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
            >
              <i className="fas fa-user"> </i>
              <div className="nav-item-text">個人資料</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
<<<<<<< HEAD
              to="/StIndex/StPasswordModify"
              className="nav-item"
              activeclassname="active"
=======
              to="/StIndex/StPasswordModify/:id?"
              className="nav-item"
              activeClassName="active"
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
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
<<<<<<< HEAD
              to="/Cart"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('訂單查詢')
              }}
=======
              to="/StIndex/StOrder"
              className="nav-item"
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
            >
              <i className="fas fa-shopping-bag"> </i>
              <div className="nav-item-text">訂單查詢</div>
            </Nav.Link>
          </li>
          <li>
<<<<<<< HEAD
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
=======
            <div className="nav-item">
              <i className="fas fa-comment-alt"> </i>
              <div className="nav-item-text"> 聊天室 </div>
            </div>
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
          </li>
        </ul>
      </Nav>
    </>
  )
}
<<<<<<< HEAD
=======
export default StSideBar
>>>>>>> d891261842a629488ca72b4db44b0c3361837cba
