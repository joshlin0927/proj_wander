import React from 'react'
import { Nav } from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function TcCourseProcessBar() {
  return (
    <>
      <Nav className="TCcourse-processBar col-10">
        <Nav.Link
          as={NavLink}
          to="/TCindex/TcCourse"
          className="btn btn-border-only-no-h col-2"
        >
          <i className="fas fa-chevron-left"></i>
          <span>返回列表</span>
        </Nav.Link>
        <ul className="TCcourse-processBarList">
          <li className="TCcourse-processBar-item">
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcCourseEdit"
            >
              <i className="far fa-check-circle"></i>
              <div>課程細節頁面</div>
            </Nav.Link>
          </li>
          <li className="TCcourse-processBar-item">
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcCourseVideoUpload"
            >
              <i className="far fa-check-circle"></i>
              <div>課程內容上傳</div>
            </Nav.Link>
          </li>
          <li className="TCcourse-processBar-item">
            <Nav.Link
              as={NavLink}
              to="/TCindex/TcCourseVideoEdit"
            >
              <i className="far fa-check-circle"></i>
              <div>課程內容管理</div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default TcCourseProcessBar
