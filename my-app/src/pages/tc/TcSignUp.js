import '../st/style/signUp.css'
import React from 'react'
import { devUrl } from '../../config'

function TcSignUp() {
  return (
    <>
      <div className="stbg-img">
        <div className="container">
          <div className="m-wrap row justify-content-center">
            <div className="logo-m-login">
              <img
                src={`${devUrl}/images/logo/log_mobile.png`}
                alt=""
              />
            </div>
          </div>
          <div className="row m-wrap">
            <div className="back">Back</div>
          </div>
          <div className="row m-wrap justify-content-end col-11">
            <label className="toggle">
              <input
                type="checkbox"
                id="mySwitch"
                onclick="identity()"
              />
              <span className="slider round switch">
                學生 教師
              </span>
            </label>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="signUp col-12 col-md-6 col-lg-6">
              <div className="tab_css">
                {/* <!--TAB1--> */}
                <input
                  id="tab1"
                  type="radio"
                  name="tab"
                  checked="checked"
                />
                <label for="tab1" id="asTeacher">
                  成為教師
                </label>
                <div className="tab_content">
                  <div className="title">
                    Wander With Us!
                  </div>
                </div>
                {/* <!-- TAB2 --> */}
                <input id="tab2" type="radio" name="tab" />
                <label for="tab2" id="asStudent">
                  成為學生
                </label>
                <div className="tab_content">
                  <div className="title">
                    Wander With Us!
                  </div>
                </div>
              </div>
              <form className="form-sm">
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="shortInputs col-5"
                    placeholder="名字*"
                  />
                  <input
                    type="text"
                    className="shortInputs col-5 lastName"
                    placeholder="姓氏*"
                  />
                </div>
                <div className="d-flex justify-content-start">
                  <label
                    className="notice col-5 ml-3 ml-md-2 ml-lg-4"
                    for=""
                  >
                    請填寫名字
                  </label>
                  <label
                    className="notice col-5 ml-2 labelName"
                    for=""
                  >
                    請填寫姓氏
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <input
                    type="password"
                    className="allInputs col-10"
                    placeholder="請填寫電子信箱"
                  />
                </div>
                <label
                  className="notice col-10 ml-3 ml-md-2 ml-lg-4"
                  for=""
                >
                  信箱格式不符
                </label>
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="allInputs col-10"
                    placeholder="密碼*"
                  />
                </div>
                <label
                  className="notice col-10 ml-3 ml-md-2 ml-lg-4"
                  for=""
                >
                  請填寫至少6位數密碼
                </label>
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="allInputs col-10"
                    placeholder="暱稱"
                  />
                </div>
                <div className="separator col-10 mx-auto">
                  <div className="or">OR</div>
                </div>
                <div className="d-flex d-md-block">
                  <button
                    type="button"
                    className="socialBtn btn btn-lg btn-block col-md-10 col-4 mt-0 mx-auto"
                  >
                    facebook 快速註冊
                  </button>
                  <button
                    type="button"
                    className="socialBtn btn btn-lg btn-block col-md-10 col-4 mt-0 mx-auto"
                    id="google"
                  >
                    Google 快速註冊
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="signUpBtn-m mx-auto col-10"
                  >
                    教師註冊
                  </button>
                  <button
                    type="button"
                    className="signUpBtn"
                  >
                    註冊
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TcSignUp