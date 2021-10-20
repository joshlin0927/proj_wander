import React from 'react'
import { Navbar, Nav, NavDropdown, NavItem, NavLink } from 'react-bootstrap'

function TcSideBar() {
  return (
    <>
      <Nav className="sidebar col-2">
        <div className="avatar">
          <img
            src="../images/teacher/Thomas_Lillard.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="">
              <i className="fas fa-user"></i>
              <div>個人資料</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-key"></i>
              <div>密碼更改</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-th-list"></i>
              <div>課程列表</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-comment-alt"></i>
              <div>聊天室</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-chart-line"></i>
              <div>數據分析</div>
            </a>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default TcSideBar
