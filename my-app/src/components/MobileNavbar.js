import React from 'react'
import { devUrl } from '../config'
import { Link } from 'react-router-dom'

function MobileNavbar() {
  return (
    <>
      <div className="mobile-nav container-fluid">
        <div className="row justify-content-center flex-nowrap">
          <Link to="#/" className="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-course.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>課程總覽</span>
          </Link>
          <Link to="#/" className="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-cart.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>購物車</span>
          </Link>
          <Link to="#/" className="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-chat.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>聊天室</span>
          </Link>
          <Link to="#/" className="mobile-nav-item col-2">
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-my.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>我的課程</span>
          </Link>
          <Link
            to="#/"
            className="mobile-nav-item active col-2"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-member.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>會員中心</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar
