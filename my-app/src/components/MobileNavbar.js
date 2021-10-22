import React from 'react'
import { devUrl } from '../config'
import { Link } from 'react-router-dom'

function MobileNavbar() {
  return (
    <>
      <div class="mobile-nav container-fluid">
        <div class="row justify-content-center flex-nowrap">
          <Link to="#/" class="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-course.svg`}
              alt=""
              class="mobile-nav-icon"
            />
            <span>課程總覽</span>
          </Link>
          <Link to="#/" class="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-cart.svg`}
              alt=""
              class="mobile-nav-icon"
            />
            <span>購物車</span>
          </Link>
          <Link to="#/" class="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-chat.svg`}
              alt=""
              class="mobile-nav-icon"
            />
            <span>聊天室</span>
          </Link>
          <Link to="#/" class="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-my.svg`}
              alt=""
              class="mobile-nav-icon"
            />
            <span>我的課程</span>
          </Link>
          <Link
            to="#/"
            class="mobile-nav-item active col-2"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-member.svg`}
              alt=""
              class="mobile-nav-icon"
            />
            <span>會員中心</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar
