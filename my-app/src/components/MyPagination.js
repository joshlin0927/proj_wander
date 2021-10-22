import React from 'react'
import { Link } from 'react-router-dom'

function MyPagination() {
  return (
    <>
      <nav class="">
        <ul class="Mypagination justify-content-end">
          <li>
            <Link
              class="Mypage-link"
              to="#"
              aria-label="Previous"
            >
              <div class="Mypage-item">
                <i class="fas fa-chevron-left"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link class="Mypage-link" to="#">
              <div class="Mypage-item active">1</div>
            </Link>
          </li>
          <li>
            <Link class="Mypage-link" to="#">
              <div class="Mypage-item">2</div>
            </Link>
          </li>
          <li>
            <Link
              to="Mypage-link"
              href="#"
              aria-label="Next"
            >
              <div class="Mypage-item">
                <i class="fas fa-chevron-right"></i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default MyPagination
