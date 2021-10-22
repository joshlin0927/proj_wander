import React from 'react'
import '../../../public/css/st_course(empty).css'
import { Link } from 'react-router-dom'

export default function StCourseEmpty() {
  return (
    <div class="bgc-img">
      <div class="container mainContent">
        {/* <!-- breadcrumb --> */}
        <div class="row">
          <div class="logo-m">
            <img
              src="../public/imgs/logo/log_mobile.png"
              alt=""
            />
          </div>
          <nav class="w-100">
            <ol class="breadcrumb col col-md-10 col-lg-12 m-0">
              <li class="breadcrumb-item">
                <Link to="">首頁</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="">我的課程</Link>
              </li>
            </ol>
          </nav>
          <div class="col-10 ml-auto pageName">
            <span class="pageNameText course">Course</span>
          </div>
        </div>
        <div class="row">
          {/* <!-- sidebar --> */}
          <nav class="sidebar col-2">
            <div class="avatar">
              <img
                src="../images/students/Anne Hathaway.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <ul class="nav-list">
              <li>
                <Link to="" class="nav-item active">
                  <i class="fas fa-user"></i>
                  <div>聊天室</div>
                </Link>
              </li>
              <li>
                <Link to="" class="nav-item">
                  <i class="far fa-play-circle"></i>
                  <div> 我的課程</div>
                </Link>
              </li>
              <li>
                <Link to="" class="nav-item">
                  <i class="fal fa-users-class"></i>
                  <div> 教室上課</div>
                </Link>
              </li>
            </ul>
          </nav>
          <div class="col-12 col-md-8  reminding">
            <p class="remindingtext">您尚未預訂任何課程</p>
            <button class="btn btn-secondary row buy-btn">
              購買課程
            </button>
          </div>
        </div>

        <div class="row mb-5 ">
          <div class="subtitle">推薦教師</div>
        </div>
        <div class="row teacherrow btblock">
          <div class="t_avatar col-12 col-md-3 col-lg-3">
            <img
              src="../public/imgs/老師照片/Tarin Johnson.jpg"
              alt=""
            />
            <p class="nametag">Tarin</p>
          </div>
          <div class="t_avatar  col-md-3 col-lg-3 mo-none">
            <img
              src="../public/imgs/老師照片/Mickey Adames.jpeg"
              alt=""
            />
            <p class="nametag">Carlin</p>
          </div>
          <div class="t_avatar  col-md-3 col-lg-3 mo-none">
            <img
              src="../public/imgs/老師照片/Tarin Johnson.jpg"
              alt=""
            />
            <p class="nametag">Catherine</p>
          </div>
          <div class="t_avatar col-md-3 col-lg-3 mo-none">
            <img
              src="../public/imgs/老師照片/Tarin Johnson.jpg"
              alt=""
            />
            <p class="nametag">Jessica</p>
          </div>
        </div>
      </div>
    </div>
  )
}
