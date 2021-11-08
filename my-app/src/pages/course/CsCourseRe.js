import React from 'react'
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
        <div className="span-a">
          <span>Recommend</span>
        </div>
        <div className="span-b">
          <span>推薦課程</span>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="coursesection col-md-10 col-lg-10">
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
            <div className="sh-courseitem">
              <img
                src="../images/img/成為專業筆譯必備：商務日文翻譯力.png"
                alt=""
              />
              <div className="sh-coursename">
                課程名稱：填上課程名稱
              </div>
              <span className="teachername">
                Thoms Lillard
              </span>
              <span className="co-price">2700 TWD</span>
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-bb row mx-auto one-btn-b btn-b"
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
