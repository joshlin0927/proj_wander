import React from 'react'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'

export default function StSideBar2() {
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
        <ul className="nav-list">
          <li>
            <Link href="" className="nav-item active">
              <i class="fas fa-user"> </i>
              <div> 聊天室 </div>
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              <i class="far fa-play-circle"> </i>
              <div> 我的課程 </div>
            </Link>
          </li>
          <li>
            <Link to="" className="nav-item">
              <i class="fal fa-users-class"> </i>
              <div> 教室上課 </div>
            </Link>
          </li>
          <li>
            <Link to="" className="nav-item">
              <i class="fal fa-table"> </i>
              <div> 課程管理 </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
