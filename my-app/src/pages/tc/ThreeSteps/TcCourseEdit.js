import React from 'react'

function TcCourseEdit() {
  return (
    <>
      {/* form  */}
      <form class="TCform col-12 col-md-10">
        <div class="TCform-content">
          <div class="TCform-head">
            <a href="">
              <i class="fas fa-chevron-left TCback-btn"></i>
            </a>
            <div class="TCform-title">課程細節頁面</div>
            <div class="d-flex justify-content-end">
              <button class="btn TCbtn-sm-w-switch btn-primary">
                <span>儲存</span>
              </button>
            </div>
          </div>

          <div class="TCcourse-img-selector">
            <div class="TCcourse-pic-square">
              <img
                src="../images/course/商用英文.jpeg"
                class="img-fluid"
                alt=""
              />
            </div>
            <button class="btn btn-border-only">
              <span>請選擇圖片</span>
            </button>
          </div>
          <input
            type="text"
            class="col-12 allInputs"
            placeholder="請輸入課程標題"
          />
          <label class="TCnotice" for="">
            請填寫至少一個字
          </label>
          <select
            type="text"
            class="col-12 allInputs"
            placeholder="課程種類"
          >
            <option value="0" selected disabled>
              請選擇
            </option>
            <option value="Japanese">日文</option>
            <option value="English">英文</option>
            <option value="Chinese">中文</option>
          </select>
          <label class="TCnotice" for="">
            請選擇相對應的種類
          </label>
          <div class="TCmb-50">
            <input
              type="number"
              class="col-12 allInputs"
              placeholder="課程定價"
            />
          </div>
          <textarea
            name=""
            id=""
            rows="5"
            class="TC-intro w-100 col-12"
            placeholder="課程介紹與說明"
          ></textarea>
        </div>
        <div class="onebtn-switch">
          <button class="btn btn-secondary mx-auto one-btn">
            <span>儲存</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default TcCourseEdit
