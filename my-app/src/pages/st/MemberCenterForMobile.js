import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style/membercenterformobile.css'
//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

import StBgDecoration from '../../components/st/StBgDecoration'
import Footer from '../../components/Footer'

function MemberCenterForMobile(props) {
  const [isActive, setIsActive] = useState('')
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <form className="form col-12 offset-0 col-md-8 offset-md-1">
            <div className="form-head ml-1">
              <Link href="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="form-title"> 會員中心 </div>
              <Link href="">
                <i className="TCback-btn"> </i>
              </Link>
            </div>
            <Nav className="">
              <ul className="nav-list">
                <li className="mobilelist">
                  <Nav.Link
                    as={NavLink}
                    to="/StIndex/StProfile"
                    className="nav-item d-flex align-items-center"
                    activeClassName="active"
                    onClick={() => {
                      setIsActive('個人資料')
                    }}
                  >
                    <i className="fas fa-user"> </i>
                    <div className="nav-item-text">
                      個人資料
                    </div>
                  </Nav.Link>
                </li>
                <li className="mobilelist">
                  <Nav.Link
                    as={NavLink}
                    to="/StIndex/StPasswordModify/:id?"
                    className="nav-item d-flex align-items-center"
                    activeClassName="active"
                    onClick={() => {
                      setIsActive('密碼更改')
                    }}
                  >
                    <i className="fas fa-key"> </i>
                    <div className="nav-item-text">
                      密碼更改
                    </div>
                  </Nav.Link>
                </li>
                <li className="mobilelist">
                  <Nav.Link
                    as={NavLink}
                    to="/StIndex/StOrder"
                    className="nav-item d-flex align-items-center"
                  >
                    <i className="fas fa-shopping-bag"> </i>
                    <div className="nav-item-text">
                      訂單查詢
                    </div>
                  </Nav.Link>
                </li>
                <li className="mobilelist">
                  <Nav.Link
                    as={NavLink}
                    to="/StIndex/StOrder"
                    className="nav-item d-flex align-items-center"
                  >
                    <i className="fas fa-comment-alt"></i>
                    <div className="nav-item-text ">
                      聊天室
                    </div>
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
            {/* <div>個人資料</div>
            <div>密碼更改</div>
            <div>訂單查詢</div>
            <div>聊天室</div> */}
          </form>
        </div>
      </div>
      <StBgDecoration />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default MemberCenterForMobile
