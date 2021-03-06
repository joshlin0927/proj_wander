import React from 'react'
import { Nav } from 'react-bootstrap'

import { IMG_PATH } from '../../config'
//讓Link標籤可以有style(透過加className)
import { NavLink } from 'react-router-dom'

function StSideBar(props) {
  const { imgSrc } = props
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
            <Nav.Link
              as={NavLink}
              to="/StIndex/StProfile"
              className="nav-item"
              activeClassName="active"
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
              activeClassName="active"
            >
              <i className="fas fa-key"></i>
              <div className="nav-item-text">密碼更改</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/StIndex/StOrder"
              className="nav-item"
              activeClassName="active"
            >
              <i className="fas fa-shopping-bag"> </i>
              <div className="nav-item-text">訂單查詢</div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}
export default StSideBar
