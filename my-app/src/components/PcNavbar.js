import React, { useState, useEffect } from 'react'
import { devUrl } from '../config'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MemberLogout } from '../config'

function scrollHeader() {
  const header = document.getElementById('nav__header')
  if (this.scrollY >= 1) {
    header.classList.add('nav__scroll-header')
  } else {
    header.classList.remove('nav__scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

function PcNavbar(props) {
  const { auth, user } = props

  const menuToggle = () => {
    const memberMenu = document.querySelector('#memberMenu')
    memberMenu.classList.toggle('d-none')
  }

  const logout = async () => {
    const r = await fetch(MemberLogout, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(),
    })
    const j = await r.json()

    console.log(r)
  }

  return (
    <>
      <nav className="nav__header" id="nav__header">
        <div className="nav__singheader container">
          <div className="row flex-nowrap">
            <div className="col-3 p-0">
              <Link to="/" className="logo_desktop">
                <img
                  src={`${devUrl}/images/logo/logo_desktop.png`}
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="nav__pc_menu col-7">
              <li>
                <Link to="/StIndex/StProfile">
                  <span className="nav__en">關於我們</span>
                </Link>
              </li>
              <li>
                <Link to="/StIndex/StPasswordModify">
                  <span className="nav__en">課程總覽</span>
                </Link>
              </li>
              <li>
                <Link to="/StIndex/StCourse">
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
              {auth === false ? (
                <Link to="/Login" className="nav_login">
                  <span className="nav_login_txt">
                    登入
                  </span>
                </Link>
              ) : (
                <div className="NavAvatar">
                  <div
                    className="nav_login"
                    id="memberAvatar"
                    onClick={menuToggle}
                  >
                    <img
                      src={`${devUrl}/images/teacher/Thomas_Lillard.jpg`}
                      alt=""
                    />
                  </div>

                  <div
                    id="memberMenu"
                    className="NavAvatarMenu d-none"
                  >
                    <div className="mb-1">
                      <Link to="/Tcindex">
                        <span className="mx-0">
                          會員中心
                        </span>
                      </Link>
                    </div>
                    <div className="mb-1">
                      <Link to="#">
                        <span>常見問題</span>
                      </Link>
                    </div>
                    <div className="mb-1">
                      <div onClick={logout}>
                        <span>登出</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Link to="/Cart" className="nav_cart">
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
