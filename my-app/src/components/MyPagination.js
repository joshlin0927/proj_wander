import React from 'react'
import { Link } from 'react-router-dom'

function MyPagination() {
  return (
    <>
      <nav className="">
        <ul className="Mypagination justify-content-end">
          <li>
            <Link
              className="Mypage-link"
              to="#"
              aria-label="Previous"
            >
              <div className="Mypage-item">
                <i className="fas fa-chevron-left"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link className="Mypage-link" to="#">
              <div className="Mypage-item active">1</div>
            </Link>
          </li>
          <li>
            <Link className="Mypage-link" to="#">
              <div className="Mypage-item">2</div>
            </Link>
          </li>
          <li>
            <Link
              to="Mypage-link"
              href="#"
              aria-label="Next"
            >
              <div className="Mypage-item">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default MyPagination
