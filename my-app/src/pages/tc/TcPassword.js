import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import TcSideBar from '../../components/tc/TcSideBar'

function TcPassword() {
  return (
    <>
      <form class="TCform col-12 offset-0 col-md-8 offset-md-1">
        <div class="TCform-content w-100 col-md-10 col-lg-8">
          <div class="TCform-head p-0">
            <a href="">
              <i class="fas fa-chevron-left TCback-btn"></i>
            </a>
            <div class="TCform-title">密碼更改</div>
            <a href="">
              <i class="TCback-btn"></i>
            </a>
          </div>
          <input
            type="password"
            class="col-12 allInputs"
            placeholder="請輸入原密碼"
          />
          <label class="TCnotice" for="">
            請填寫正確密碼
          </label>
          <input
            type="text"
            class="col-12 allInputs"
            placeholder="請輸入新密碼"
          />
          <label class="TCnotice" for="">
            請填寫至少6位數密碼
          </label>
          <input
            type="text"
            class="col-12 allInputs"
            placeholder="請再次輸入新密碼"
          />
          <label class="TCnotice" for="">
            與上列密碼不符
          </label>
          <button class="btn btn-secondary mx-auto one-btn">
            <span>更改</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default TcPassword
