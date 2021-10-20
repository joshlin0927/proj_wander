import React from 'react'

// components
import TcSideBar from '../../components/tc/TcSideBar'

function TcProfile() {
  return (
    <>
      {/* Main Content */}
      <div className="container mainContent">
        {/* breadcrumb */}
        <div className="row">
          <div className="logo-m">
            <img
              src="../images/logo/log_mobile.png"
              alt=""
            />
          </div>
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText profile">
              Profile
            </span>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* sidebar */}
          <TcSideBar />
          {/* form */}
          <form className="TCform col-12 col-md-8">
            <div className="TCform-content">
              <div className="TCform-head">
                <a href="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </a>
                <div className="TCform-title">個人資料</div>
                <a href="">
                  <i className="TCback-btn"></i>
                </a>
                <button className="btn btn-primary preview-btn-top">
                  個人頁面預覽
                </button>
              </div>

              <div className="d-flex align-items-center">
                <input
                  type="file"
                  id="realFileInput"
                  className="d-none"
                  onChange="previewFile()"
                />
                <div className="profile-pic">
                  <img
                    id="avatarImg"
                    src="../images/teacher/Thomas_Lillard.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="btn btn-border-only"
                  id="loadFile"
                  onClick="realFileInput.click()"
                >
                  <span>請選擇圖片</span>
                </div>
              </div>
              <div className="fullname d-flex">
                <div className="col-6 pl-0">
                  <input
                    type="text"
                    className="nameInputs"
                    placeholder="名字"
                    disabled
                  />
                </div>
                <div className="col-6 pr-0">
                  <input
                    type="text"
                    className="nameInputs"
                    placeholder="姓氏"
                    disabled
                  />
                </div>
              </div>
              <div className="TCmb-50">
                <input
                  type="email"
                  className="col-12 allInputs"
                  placeholder="信箱"
                  disabled
                />
              </div>
              <div className="TCmb-50">
                <input
                  type="date"
                  className="col-12 allInputs px-2"
                  placeholder="生日"
                />
              </div>

              <input
                type="text"
                className="col-12 allInputs"
                placeholder="暱稱"
              />
              <label className="TCnotice" htmlFor="">
                請填寫至少一個字
              </label>
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入擅長的語言"
              />
              <label className="TCnotice" htmlFor="">
                請填寫至少一種擅長語言
              </label>

              <textarea
                name=""
                id=""
                rows="5"
                className="TC-intro w-100 col-12"
                placeholder="自我介紹"
              ></textarea>
            </div>
            <button className="btn btn-secondary mx-auto TCsave-btn">
              儲存
            </button>
            <button className="btn btn-primary preview-btn">
              個人頁面預覽
            </button>
          </form>
        </div>
      </div>
      {/* bg decoration */}
      <div className="TCallwraper">
        <div className="dec-circle"></div>
        <div className="dec-block"></div>
        <div className="earth">
          <img src="../images/elements/earth.png" alt="" />
        </div>
        <div className="dec-low-block"></div>
      </div>
    </>
  )
}

export default TcProfile
