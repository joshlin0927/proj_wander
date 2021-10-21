import React from 'react'


import TcBgDecorationThreeSteps from '../../components/tc/TcBgDecorationThreeSteps'

function TcCourseVideoEdit() {
  return (
    <>
      {/* TCcourse-TCcourse-process bar  */}
      <nav class="TCcourse-processBar col-10">
        <a href="" class="btn btn-border-only-no-h col-2">
          <i class="fas fa-chevron-left"></i>
          <span>返回列表</span>
        </a>
        <ul class="TCcourse-processBarList">
          <li class="TCcourse-processBar-item">
            <a href="">
              <i class="far fa-check-circle"></i>
              <div>課程細節頁面</div>
            </a>
          </li>
          <li class="TCcourse-processBar-item">
            <a href="">
              <i class="far fa-check-circle"></i>
              <div>課程內容上傳</div>
            </a>
          </li>
          <li class="TCcourse-processBar-item">
            <a href="">
              <i class="far fa-check-circle"></i>
              <div>課程內容管理</div>
            </a>
          </li>
        </ul>
      </nav>
      form
      <form class="TCform col-12 col-md-10 px-4">
        <div class="TCform-head ml-1 p-0">
          <a href="">
            <i class="fas fa-chevron-left TCback-btn"></i>
          </a>
          <div class="TCform-title mr-auto">
            課程內容管理
          </div>
          {/* desktop search bar */}
          <div class="TCsearch ml-0">
            <input
              type="text"
              class="TCsearchbar"
              placeholder="請輸入課程名稱"
            />
            <button type="submit" class="">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn TCbtn-sm-w-switch btn-primary">
              儲存
            </button>
          </div>
        </div>
        {/* mobile search bar */}
        <div class="TCsearch-mobile">
          <input
            type="text"
            class="TCsearchbar"
            placeholder="請輸入課程名稱"
          />
          <button type="submit" class="">
            <i class="fas fa-search"></i>
          </button>
        </div>
        TCcourse card label
        <div class="TCcourseLabel col-12">
          <div class="Labelitem">影片截圖</div>
          <div class="Labelitem">影片名稱</div>
          <div class="TCcourseLabel-right">
            <div class="Labelitem">上傳日期</div>
            <div class="Labelitem">影片長度</div>
            <div class="TCcourse-delete">
              <i class="far fa-times-circle opacity-0"></i>
            </div>
          </div>
        </div>
        {/* course cards */}
        <div class="TCcourse-card col-12">
          <div class="TCcourse-img"></div>
          <div class="TCcourse-info">
            <div class="TCcourse-title">
              Thomas老師：從零開始的日文基礎課程3
            </div>
            <div class="TCcourse-info-right">
              <div class="TCcourse-detail">
                <span>上架日期：</span> 2021/09/08
              </div>
              <div class="TCcourse-detail">
                <span>課程長度：</span> 01:02:30
              </div>
            </div>
          </div>
          <div class="TCcourse-delete">
            <i class="far fa-times-circle"></i>
          </div>
        </div>
        <nav>
          <ul class="Mypagination justify-content-end">
            <li class="Mypage-item">
              <a
                class="Mypage-link"
                href="#"
                aria-label="Previous"
              >
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            <li class="Mypage-item active">
              <a class="Mypage-link" href="#">
                1
              </a>
            </li>
            <li class="Mypage-item">
              <a class="Mypage-link" href="#">
                2
              </a>
            </li>
            <li class="Mypage-item">
              <a
                class="Mypage-link"
                href="#"
                aria-label="Next"
              >
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </form>
    </>
  )
}

export default TcCourseVideoEdit
