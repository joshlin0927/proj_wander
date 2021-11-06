import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { withRouter } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style/membercenterformobile.css'
//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

import StBgDecoration from '../../components/st/StBgDecoration'
import Footer from '../../components/Footer'

function MemberCenterForMobile(props) {
  const [isActive, setIsActive] = useState('')
  const { auth, setAuth } = props

  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const memberObj = JSON.parse(member)
  // console.log('memberObj', memberObj)
  // useEffect(() => {
  //   if (token) {
  //     setAuth(true)
  //   }
  // }, [])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <form className="form col-12 offset-0 col-md-8 offset-md-1 mobileform">
            <div className="form-head ml-1 mobileline">
              <div
                onClick={() => {
                  props.history.goBack()
                }}
              >
                <i className="fas fa-chevron-left TCback-btn"></i>
              </div>
              <div className="form-title"> 會員中心 </div>
              <div
                onClick={() => {
                  props.history.goBack()
                }}
              >
                <i className="TCback-btn"> </i>
              </div>
            </div>
            <Nav className="">
              <div className="mobilelist">
                <Nav.Link
                  as={NavLink}
                  to={
                    memberObj.identity === 1
                      ? '/TcIndex/TcProfile'
                      : '/StIndex/StProfile'
                  }
                  className="nav-item d-flex align-items-center offset-2"
                  activeClassName="active"
                >
                  <div className="mobilecircle">
                    <i className="fas fa-user mobileicon"></i>
                  </div>
                  <div className="nav-item-text mobiletext ml-4">
                    個人資料
                  </div>
                </Nav.Link>
              </div>
              <div className="mobilelist">
                <Nav.Link
                  as={NavLink}
                  to={
                    memberObj.identity === 1
                      ? '/TcIndex/TcPassword'
                      : '/StIndex/StPasswordModify/:id?'
                  }
                  className="nav-item d-flex align-items-center offset-2 "
                  activeClassName="active"
                >
                  <div className="mobilecircle">
                    <i className="fas fa-key mobileicon"></i>
                  </div>
                  <div className="nav-item-text mobiletext ml-4">
                    密碼更改
                  </div>
                </Nav.Link>
              </div>
              <div className="mobilelist">
                <Nav.Link
                  as={NavLink}
                  to={
                    memberObj.identity === 1
                      ? '/TcIndex/TcAnalytic'
                      : '/StIndex/StOrder'
                  }
                  className="nav-item d-flex align-items-center offset-2"
                >
                  <div className="mobilecircle">
                    {memberObj.identity === 1 ? (
                      <i className="fas fa-chart-line mobileicon"></i>
                    ) : (
                      <i className="fas fa-shopping-bag mobileicon"></i>
                    )}
                  </div>
                  <div className="nav-item-text mobiletext ml-4">
                    {memberObj.identity === 1
                      ? '數據分析'
                      : '訂單查詢'}
                  </div>
                </Nav.Link>
              </div>
              <div className="mobilelist lastline">
                <Nav.Link
                  as={NavLink}
                  to="/StIndex/StOrder"
                  className="nav-item d-flex align-items-center offset-2 "
                >
                  <div className="mobilecircle">
                    <i className="fas fa-comment-alt mobileicon"></i>
                  </div>
                  <div className="nav-item-text mobiletext ml-4">
                    聊天室
                  </div>
                </Nav.Link>
              </div>
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

export default withRouter(MemberCenterForMobile)
