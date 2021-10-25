import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'
import { withRouter, NavLink } from 'react-router-dom'

export default withRouter(function StSideBar(props) {
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
              to="/StIndex"
              className="nav-item"
              activeclassname="active"
            >
              <i className="fas fa-user"> </i>
              <div className="nav-item-text">個人資料</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StPasswordModify/:id?"
              className="nav-item"
            >
              <i className="fas fa-key"> </i>
              <div className="nav-item-text">密碼更改</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/#"
              className="nav-item"
            >
              <i className="fas fa-shopping-bag"> </i>
              <div className="nav-item-text">訂單查詢</div>
            </Nav.Link>
          </li>
          <li>
            <div className="nav-item">
              <i className="fas fa-comment-alt"> </i>
              <div className="nav-item-text"> 聊天室 </div>
            </div>
          </li>
        </ul>
      </Nav>
    </>
  )
})
