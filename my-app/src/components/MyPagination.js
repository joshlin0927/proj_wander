import React from 'react'

function MyPagination() {
  return (
    <>
      <nav class="">
        <ul class="Mypagination justify-content-end">
          <li class="Mypage-item">
            <a
              class="Mypage-link"
              href="#"
              aria-label="Previous"
            >
              <i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <li class="Mypage-item active">
            <a class="Mypage-link" href="#">
              1
            </a>
          </li>
          <li class="Mypage-item">
            <a class="Mypage-link" href="#">
              2
            </a>
          </li>
          <li class="Mypage-item">
            <a
              class="Mypage-link"
              href="#"
              aria-label="Next"
            >
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default MyPagination
