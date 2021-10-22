import React from 'react'
import { Link } from 'react-router-dom'


function MyPagination() {
  return (
    <>
      <nav class="">
        <ul class="Mypagination justify-content-end">
          <li class="Mypage-item">
            <Link
              class="Mypage-link"
              to="#"
              aria-label="Previous"
            >
              <i class="fas fa-chevron-left"></i>
            </Link>
          </li>
          <li class="Mypage-item active">
            <Link class="Mypage-link" to="#">
              1
            </Link>
          </li>
          <li class="Mypage-item">
            <Link class="Mypage-link" to="#">
              2
            </Link>
          </li>
          <li class="Mypage-item">
            <Link
              to="Mypage-link"
              href="#"
              aria-label="Next"
            >
              <i class="fas fa-chevron-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default MyPagination
