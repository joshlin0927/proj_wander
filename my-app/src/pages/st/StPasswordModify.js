import React from 'react'
import '../../../public/css/st_passwordmodify.css'
import { Link } from 'react-router-dom'

import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'

export default function StPasswordModify() {
  return (
    <>
      <div class="bgc-img">
        <div className="container">
          <MultiLevelBreadCrumb />
          <div className="row">
            <div className="logo-m">
              <img
                src="../public/imgs/網頁素材/log_mobile.png"
                alt=""
              />
            </div>

            <div className="col-10 ml-auto pageName">
              <span className="pageNameText password">
                Password
              </span>
            </div>
          </div>
          <div className="row justify-content-center">
            <nav className="sidebar col-2">
              <div className="avatar">
                <img
                  src="../public/imgs/學生照片/Anne Hathaway.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <ul className="nav-list">
                <li>
                  <Link to="" className="nav-item">
                    <i className="fas fa-user"></i>
                    <div>個人資料</div>
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-item active">
                    <i className="fas fa-key"></i>
                    <div>密碼更改</div>
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-item">
                    <i className="fas fa-shopping-bag"></i>
                    <div>訂單查詢</div>
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-item">
                    <i className="fas fa-comment-alt"></i>
                    <div>聊天室</div>
                  </Link>
                </li>
              </ul>
            </nav>

            <form className="form col-12 offset-0 col-md-7 offset-md-1 col-lg-7">
              <div className="confirmmsg-m">
                <i className="far fa-check-circle"></i>
                資料已修改完成
              </div>
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
                <button className="btn btn-secondary row mx-auto one-btn">
                  更改
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <StBgDecorationNormal />
    </>
  )
}
