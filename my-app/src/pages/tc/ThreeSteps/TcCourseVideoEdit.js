import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcSearchBar from '../../../components/tc/TcSearchBar'
import TcCourseCard from '../../../components/tc/TcCourseCard'
import MyPagination from '../../../components/MyPagination'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseVideoEdit() {
  const [searchWord, setSearchWord] = useState('')
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      history.push('/')
    } else {
      return
    }
  })

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form className="TCform col-12 col-md-10 px-4">
            <div className="TCform-head ml-1 p-0">
              <Link to="/TCindex/TcCourseVideoUpload">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                課程內容管理
              </div>
              {/* desktop search bar */}
              <div className="TCsearch ml-0">
                <TcSearchBar
                  placeholder="請輸入課程名稱"
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
              </div>
              <div className="d-flex justify-content-end">
                <div className="TCback-btn mr-4"></div>
              </div>
            </div>
            {/* mobile search bar */}
            <div className="TCsearch-mobile">
              <TcSearchBar
                placeholder="請輸入課程名稱"
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
            {/* TCcourse card label */}
            <div className="TCcourseLabel col-12">
              <div className="Labelitem">影片截圖</div>
              <div className="Labelitem">影片名稱</div>
              <div className="TCcourseLabel-right">
                <div className="Labelitem">上傳日期</div>
                <div className="Labelitem">影片長度</div>
                <div className="TCcourse-delete">
                  <i className="far fa-times-circle opacity-0"></i>
                </div>
              </div>
            </div>
            {/* course cards */}
            <TcCourseCard />
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default TcCourseVideoEdit
