import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { devUrl } from '../config'
import { Link, withRouter } from 'react-router-dom'

function MobileNavbar(props) {
  const { auth, setAuth } = props

  //判斷是否登入
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const memberObj = JSON.parse(member)
  console.log('memberObj', memberObj)
  useEffect(() => {
    if (token) {
      setAuth(true)
    }
  }, [])

  useEffect(() => {
    const path = props.location.pathname.toString()
    const navItem = document.getElementsByClassName(
      'mobile-nav-item'
    )
    for (let i = 0; i < 5; i++) {
      navItem[i].classList.remove('active')
      if (path.includes('Cart')) {
        navItem[1].classList.add('active')
      }
      if (path.includes('TC')) {
        navItem[4].classList.add('active')
      }
    }
  }, [props.location.pathname])
  return (
    <>
      <div className="mobile-nav container-fluid">
        <div className="row justify-content-center flex-nowrap">
          <Link
            to="#/"
            className="mobile-nav-item col-2"
            id="mNavCourse"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-course.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>課程總覽</span>
          </Link>
          <Link
            to="/Cart"
            className="mobile-nav-item col-2"
            id="mNavCart"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-cart.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>購物車</span>
          </Link>
          <Link
            to="#/"
            className="mobile-nav-item col-2"
            id="mNavChat"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-chat.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>聊天室</span>
          </Link>
          <Link
            to="/StIndex/StCourse"
            className="mobile-nav-item col-2"
            id="mNavMy"
          >
            <img
              src={`${devUrl}/images/mobile-nav-alter/nav-icon-my.svg`}
              alt=""
              className="mobile-nav-icon"
            />
            <span>我的課程</span>
          </Link>

          {!auth ? (
            <Link
              to="/Login"
              className="mobile-nav-item active col-2"
              id="mNavTC"
            >
              <img
                src={`${devUrl}/images/mobile-nav-alter/nav-icon-member.svg`}
                alt=""
                className="mobile-nav-icon"
              />
              <span>會員中心</span>
            </Link>
          ) : (
            <Link
              to={
                memberObj.identity === 1
                  ? '/Tcindex'
                  : '/StIndex/StProfile'
              }
              className="mobile-nav-item active col-2"
              id="mNavTC"
            >
              <img
                src={`${devUrl}/images/mobile-nav-alter/nav-icon-member.svg`}
                alt=""
                className="mobile-nav-icon"
              />
              <span>會員中心</span>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default withRouter(MobileNavbar)
