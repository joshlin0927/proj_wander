import React from 'react'
import './style/st_editprofile.css'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar from '../../components/st/StSideBar'
import StBgDecorationNormal from '../../components/st/StBgDecorationNormal'
import ConfirmMsg from '../../components/ConfirmMsg'

export default function StEditProfile() {
  return (
    <>
      <div className="stbg-img">
        <div className="container mainContent">
          {/* <!-- breadcrumb --> */}

          <div className="row">
            <MultiLevelBreadCrumb />
            <div className="col-10 ml-auto pageName">
              <span className="pageNameText profile">
                Profile
              </span>
            </div>
          </div>
          <div className="row">
            <StSideBar />
            {/* <!-- form --> */}
            <form className="form col-12 offset-0 col-md-8 offset-md-1">
              <ConfirmMsg />
              <div className="form-head ml-1">
                <Link href="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="form-title">個人資料</div>
                <Link href="">
                  <i className="TCback-btn"></i>
                </Link>
              </div>

              <div className="form-content">
                <div className="d-flex align-items-center ml-1">
                  <div className="pic">
                    <img
                      src={`${devUrl}/images/pic/學生照片/Anne Hathaway.jpg`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <button className="btn btn-border-only">
                    <span>請選擇圖片</span>
                  </button>
                </div>
                <div className="fullname row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="nameInputs"
                      placeholder="Ann"
                      disabled
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="nameInputs"
                      placeholder="Huang"
                      disabled
                    />
                  </div>
                </div>
                <div className="mb-50">
                  <input
                    type="email"
                    className="col-12 allInputs"
                    placeholder="abc@gmail.com"
                    disabled
                  />
                </div>
                <div className="mb-50">
                  <input
                    type="date"
                    className="col-12 allInputs px-2"
                  />
                </div>

                <input
                  type="text"
                  className="col-12 allInputs"
                  placeholder="Ann"
                />
              </div>
              <button className="btn btn-secondary row mx-auto save-btn">
                儲存
              </button>
            </form>
          </div>
        </div>
        <StBgDecorationNormal />
      </div>
    </>
  )
}
