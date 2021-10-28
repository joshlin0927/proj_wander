import React from 'react'
import { Link } from 'react-router-dom'

function TcApplyForm() {
  const realFileInput = document.querySelector(
    '#realFileInput'
  )

  return (
    <>
      <div className="TCform col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
        <form className="p-4">
          <div className="TCform-content w-100">
            <div className="TCform-head ml-1">
              <Link href="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title">審核資料</div>
              <i className="TCback-btn"></i>
            </div>
            <input
              type="text"
              className="col-12 allInputs"
              placeholder="國籍"
            />
            <label className="TCnotice" htmlFor="">
              請填寫國籍
            </label>
            <div className="TCmb-50">
              <input
                type="text"
                className="col-12 allInputs"
                placeholder="請輸入擅長的語言"
              />
            </div>
            <input
              type="file"
              id="realFileInput"
              className="d-none"
            />
            <div
              className="resume"
              onclick={() => {
                realFileInput.click()
              }}
            >
              <input
                disabled
                id="fakeFileInput"
                className="col-12 allInputs"
                placeholder="請選擇要上傳的履歷 "
              />
              <button
                type="button"
                id="brwosing"
                className="btn btn-secondary browse"
              >
                <span>瀏覽</span>
              </button>
            </div>
            <label className="TCnotice" htmlFor="">
              請選擇檔案
            </label>
          </div>
          <button className="btn btn-secondary mx-auto one-btn">
            <span>送出</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default TcApplyForm
