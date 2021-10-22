import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcAvatarSelector from '../../components/tc/TcAvatarSelector'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcProfile() {
  const [TcFirstName, setTcFirstName] = useState('')
  const [TcLastName, setTcLastName] = useState('')
  const [TcEmail, setTcEmail] = useState('')
  const [TcBirthday, setTcBirthday] = useState('')
  const [TcNickName, setTcNickName] = useState('')
  const [TcLanguage, setTcLanguage] = useState('')
  const [TcIntro, setTcIntro] = useState('')

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText profile">
              Profile
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <form className="TCform col-12 offset-0 col-md-8 offset-md-1">
            <div className="TCform-content">
              <div className="TCform-head">
                <Link to="">
                  <i className="fas fa-chevron-left TCback-btn"></i>
                </Link>
                <div className="TCform-title">個人資料</div>
                <i className="TCback-btn"></i>
                <button className="TCbtn btn-primary preview-btn-top">
                  <span>個人頁面預覽</span>
                </button>
              </div>
              {/* HeadImgSelector */}
              <TcAvatarSelector />
              <div className="fullname d-flex">
                <div className="col-6 pl-0">
                  <input
                    name="TcFirstName"
                    type="text"
                    className="nameInputs"
                    placeholder="名字"
                    value={TcLastName}
                    onChange={(e) => {
                      setTcFirstName(e.target.value)
                    }}
                    disabled
                  />
                </div>
                <div className="col-6 pr-0">
                  <input
                    name="TcLastName"
                    type="text"
                    className="nameInputs"
                    placeholder="姓氏"
                    value={TcFirstName}
                    onChange={(e) => {
                      setTcLastName(e.target.value)
                    }}
                    disabled
                  />
                </div>
              </div>
              <div className="TCmb-50">
                <input
                  name="TcEmail"
                  type="email"
                  className="col-12 allInputs"
                  placeholder="信箱"
                  value={TcEmail}
                  onChange={(e) => {
                    setTcEmail(e.target.value)
                  }}
                  disabled
                />
              </div>
              <div className="TCmb-50">
                <input
                  name="TcBirthday"
                  type="date"
                  className="col-12 allInputs px-2"
                  placeholder="生日"
                  value={TcBirthday}
                  onChange={(e) => {
                    setTcBirthday(e.target.value)
                  }}
                />
              </div>
              <input
                name="TcNickName"
                type="text"
                className="col-12 allInputs"
                placeholder="暱稱"
                value={TcNickName}
                onChange={(e) => {
                  setTcNickName(e.target.value)
                }}
              />
              <label className="TCnotice" htmlFor="">
                請填寫至少一個字
              </label>
              <input
                name="TcLanguage"
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入擅長的語言"
                value={TcLanguage}
                onChange={(e) => {
                  setTcLanguage(e.target.value)
                }}
              />
              <label className="TCnotice" htmlFor="">
                請填寫至少一種擅長語言
              </label>

              <textarea
                name="TcIntro"
                rows="5"
                className="TC-intro w-100 col-12"
                placeholder="自我介紹"
                value={TcIntro}
                onChange={(e) => {
                  setTcIntro(e.target.value)
                }}
              ></textarea>
            </div>
            <button
              id="TcSaveBtn"
              className="TCbtn btn-secondary mx-auto TCsave-btn"
            >
              <span>儲存</span>
            </button>
            <button
              id="TcPreviewBtn"
              className="TCbtn btn-primary preview-btn"
            >
              <span>個人頁面預覽</span>
            </button>
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default TcProfile
