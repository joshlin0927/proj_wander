import React from 'react'
import { Link } from 'react-router-dom'
import { devUrl } from '../../config'

export default function StSideBar() {
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
              <i className="fas fa-user"> </i>
              <div> 個人資料 </div>
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              <i className="fas fa-key"> </i>
              <div>密碼更改</div>
            </Link>
          </li>
          <li>
            <Link to="" className="nav-item">
              <i className="fas fa-shopping-bag"> </i>
              <div>訂單查詢</div>
            </Link>
          </li>
          <li>
            <Link to="" className="nav-item">
              <i className="fas fa-comment-alt"> </i>
              <div> 聊天室 </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
