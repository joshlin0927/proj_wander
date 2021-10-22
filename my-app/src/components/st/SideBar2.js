import React from 'react'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'

export default function SideBar2() {
  return (
    <>
      <nav className="sidebar col-2">
        <div className="avatar">
          <img
            src={`${devUrl}/images/pic/學生照片/Anne Hathaway.jpg`}
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav_list">
          <li className="nav-item">
            <Link href="">
              <i className="fas fa-user"></i>
              <div> 聊天室</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="">
              <i className="far fa-play-circle"></i>
              <div> 我的課程</div>
            </Link>
          </li>
          <li className="nav-item  active">
            <Link href="">
              <i className="fal fa-users-className"></i>
              <div> 教室上課</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="">
              <i className="fal fa-table"></i>
              <div> 課程管理</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
