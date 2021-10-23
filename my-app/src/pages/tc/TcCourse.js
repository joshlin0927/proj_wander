import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import asiox from 'axios'

// 後端檔案路徑
import { Course_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseCard from '../../components/tc/TcCourseCard'
import TcHasNoCourse from '../../components/tc/TcHasNoCourse'
import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcCourse() {
  const [searchWord, setSearchWord] = useState('')
  const [hasCourse, setHasCourse] = useState('')
  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)

  useEffect(() => {
    ;(async () => {
      let r = await asiox.get(Course_LIST)
      console.log(r)
      if (r.status === 200) {
        setTotalRows(r.data.totalRows)
        setData(r.data)
      }
    })()
  }, [])

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="logo-m">
            <img
              src="../images/logo/log_mobile.png"
              alt=""
            />
          </div>
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText course">
              Course
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <div class="TCform col-12 col-md-10">
            <div class="TCform-head ml-1 p-0">
              <Link to="/">
                <i class="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div class="TCform-title mr-auto">
                我的課程
              </div>
              {/* desktop search bar */}
              <div class="TCsearch mr-auto col-6">
                <TcSearchBar
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
              </div>
              <div class="d-flex justify-content-end">
                <Link to="/TCindex/TcCourseEdit">
                  <button
                    type="submit"
                    class="TCbtn TCbtn-sm btn-primary"
                  >
                    <span>新增</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* mobile search bar */}
            <div class="TCsearch-mobile">
              <TcSearchBar
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
            {/* TCcourse card label */}
            <div class="TCcourseLabel col-12">
              <div class="Labelitem">課程封面</div>
              <div class="Labelitem">課程名稱</div>
              <div class="TCcourseLabel-right">
                <div class="Labelitem">課程種類</div>
                <div class="Labelitem">上架日期</div>
                <div class="Labelitem">課程長度</div>
                <div class="TCcourse-delete">
                  <i class="far fa-times-circle opacity-0"></i>
                </div>
              </div>
            </div>
            {/* course cards */}
            {hasCourse ? (
              <TcCourseCard />
            ) : (
              <TcHasNoCourse />
            )}

            {/* Pagination */}
            <MyPagination />
          </div>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default TcCourse
