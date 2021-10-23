import React from 'react'
import { Link } from 'react-router-dom'

function TcVideoEditForm() {
  return (
    <>
      <div className="mx-auto TCform col-12 col-md-6">
        <form className="py-4">
          <div className="TCform-content w-100">
            <div className="TCform-head ml-1">
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title">影片資訊</div>
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn opacity-0"></i>
              </Link>
            </div>
            <div className="resume">
              <input
                className="col-12 allInputs"
                placeholder="請輸入影片標題 "
              />
              <button
                type="submit"
                className="btn btn-secondary browse"
              >
                更改名稱
              </button>
            </div>
            <label className="TCnotice" for="">
              至少填寫一個字
            </label>
          </div>
        </form>
      </div>
    </>
  )
}

export default TcVideoEditForm
