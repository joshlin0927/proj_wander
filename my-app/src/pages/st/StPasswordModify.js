import React from 'react'
import './style/st_passwordmodify.css'
import { Link } from 'react-router-dom'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import StSideBar from '../../components/st/StSideBar'
import ConfirmMsg from '../../components/ConfirmMsg'
import Footer from '../../components/Footer'

function StPasswordModify() {
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
        <div className="row justify-content-center">
          <StSideBar />

          <form className="form col-12 offset-0 col-md-7 offset-md-1 col-lg-7">
            <ConfirmMsg />
            <div className="form-content w-100 col-md-8">
              <div className="form-head p-0">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="form-title">密碼更改</div>
                <Link to="">
                  <i className="TCback-btn"></i>
                </Link>
              </div>
              <input
                type="password"
                className="col-12 allInputs"
                placeholder="請輸入原密碼"
              />
              <label className="notice" for="">
                請填寫正確密碼
              </label>
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入新密碼"
              />
              <label className="notice" for="">
                請填寫至少6位數密碼
              </label>
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請再次輸入新密碼"
              />
              <label className="notice" for="">
                與上列密碼不符
              </label>
              <button className="Stbtn btn-secondary row mx-auto one-btn">
                更改
              </button>
            </div>
          </form>
        </div>
      </div>
      <StBgDecorationNormal />
      <Footer />
    </>
  )
}
export default StPasswordModify
