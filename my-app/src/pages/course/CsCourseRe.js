import React, { useRef, useState } from 'react'
//推薦課程

// import { devUrl } from '../../config'
// import { Modal } from 'react-bootstrap'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function CsCourseRe() {
  // const [show, setShow] = useState(false)

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  return (
    <>
      <div className="container mainContent">
        {/* breadcrumb */}
        <div className="row">
          <MultiLevelBreadCrumb />
        </div>
        <div class="span-a">
          <span>Recommend</span>
        </div>
        <div class="span-b">
          <span>推薦課程</span>
        </div>
        <div class="row justify-content-center d-flex">
          <div class="coursesection col-md-10 col-lg-10">
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
            <div class="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div class="coursename">
                課程名稱：填上課程名稱
              </div>
              <span class="teachername">Thoms Lillard</span>
              <span class="co-price">2700 TWD</span>
            </div>
          </div>
        </div>
        <button
          class="btn btn-outline-bb row mx-auto one-btn-b btn-b"
          style={{
            width: '235px',
            marginTop: '20px',
            marginBottom: '50px',
          }}
        >
          更多課程
        </button>
        {/* 留言板 */}
        {/* <TcSideBar /> */}
        {/* form */}
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default CsCourseRe
