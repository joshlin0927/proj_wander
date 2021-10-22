import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'

function TcPassword() {
  const [origin, setOrigin] = useState('')
  const [newPass, setNewPass] = useState('')
  const [newPassCopy, setNewPassCopy] = useState('')

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText password">
              Password
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <form class="TCform col-12 offset-0 col-md-8 offset-md-1">
            <div class="TCform-content w-100 col-md-10 col-lg-8">
              <div class="TCform-head p-0">
                <Link to="/">
                  <i class="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div class="TCform-title">密碼更改</div>
                <Link to="/">
                  <i class="TCback-btn"></i>
                </Link>
              </div>
              <input
                type="password"
                class="col-12 allInputs"
                placeholder="請輸入原密碼"
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value)
                }}
              />
              <label class="TCnotice" for="">
                請填寫正確密碼
              </label>
              <input
                type="text"
                class="col-12 allInputs"
                placeholder="請輸入新密碼"
                value={newPass}
                onChange={(e) => {
                  setNewPass(e.target.value)
                }}
              />
              <label class="TCnotice" for="">
                請填寫至少6位數密碼
              </label>
              <input
                type="text"
                class="col-12 allInputs"
                placeholder="請再次輸入新密碼"
                value={newPassCopy}
                onChange={(e) => {
                  setNewPassCopy(e.target.value)
                }}
              />
              <label class="TCnotice" for="">
                與上列密碼不符
              </label>
              <button class="TCbtn btn-secondary mx-auto one-btn">
                <span>更改</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
    </>
  )
}

export default TcPassword
