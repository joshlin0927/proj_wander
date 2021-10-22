import React from 'react'
import { devUrl } from '../config'
import { Link } from 'react-router-dom'
function scrollHeader() {
  const header = document.getElementById('nav__header')
  if (this.scrollY >= 1) {
    header.classList.add('nav__scroll-header')
  } else {
    header.classList.remove('nav__scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

function PcNavbar() {
  return (
    <>
      <nav className="nav__header" id="nav__header">
        <div className="nav__singheader container">
          <div className="row flex-nowrap">
            <div className="col-3 p-0">
              <Link to="#/" className="logo_desktop">
                <img
                  src={`${devUrl}/images/logo/logo_desktop.png`}
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="nav__pc_menu col-7">
              <li>
                <Link to="#/">
                  <span className="nav__en">關於我們</span>
                </Link>
              </li>
              <li>
                <Link to="#/">
                  <span className="nav__en">課程總覽</span>
                </Link>
              </li>
              <li>
                <Link to="#/">
                  <span className="nav__en">我的課程</span>
                </Link>
              </li>
              <li>
                <Link to="#/">
                  <span className="nav__en">國際角落</span>
                </Link>
              </li>
            </ul>
            <div className="col d-flex align-items-center justify-content-around">
              <Link to="#/" className="nav_login">
                <span className="nav_login_txt">登入</span>
              </Link>
              <Link to="#/" className="nav_cart">
                <img
                  src={`${devUrl}/images/cart/cart_icon.svg`}
                  alt=""
                  className="nav_cart_icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default PcNavbar