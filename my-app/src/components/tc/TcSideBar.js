import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function TcSideBar() {
  const [isActive, setIsActive] = useState('')

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
          <li>
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcProfile"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('個人資料')
              }}
            >
              <i className="fas fa-user"></i>
              <div>個人資料</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcPassword"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('密碼更改')
              }}
            >
              <i className="fas fa-key"></i>
              <div>密碼更改</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcCourse"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('課程列表')
              }}
            >
              <i className="fas fa-th-list"></i>
              <div>課程列表</div>
            </Nav.Link>
          </li>
          <li>
            <div
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
              <i className="fas fa-comment-alt"></i>
              <div>聊天室</div>
            </div>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcAnalytic"
              className="nav-item"
              activeClassName="active"
              onClick={() => {
                setIsActive('數據分析')
              }}
            >
              <i className="fas fa-chart-line"></i>
              <div>數據分析</div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default TcSideBar
