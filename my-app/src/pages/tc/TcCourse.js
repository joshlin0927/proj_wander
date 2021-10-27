import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import dayjs from 'dayjs'
import axios from 'axios'

// 後端檔案路徑
import { TcCourse_LIST } from '../../config'

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
  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  //判斷是否登入並為教師身分
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    const member = localStorage.getItem('member')

    if (!token) {
      history.push('/')
    } else if (member.identity !== 1) {
      history.push('/')
    } else {
      return
    }
  })

  // 課程陣列排出
  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(TcCourse_LIST)
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
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCcourse">
              Course
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <div className="TCform col-12 col-md-10">
            <div className="TCform-head ml-1 p-0">
              <Link to="/">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                我的課程
              </div>
              {/* desktop search bar */}
              <div className="TCsearch mr-auto col-6">
                <TcSearchBar
                  placeholder="請輸入課程名稱"
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/TCindex/TcCourseEdit/:id?">
                  <button
                    type="submit"
                    className="TCbtn TCbtn-sm btn-primary"
                  >
                    <span>新增</span>
                  </button>
                </Link>
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
            <div className="TCcourseLabel col-12 mb-3">
              <div className="Labelitem">課程封面</div>
              <div className="Labelitem">課程名稱</div>
              <div className="TCcourseLabel-right">
                <div className="Labelitem">課程種類</div>
                <div className="Labelitem">上架日期</div>
                <div className="Labelitem">課程長度</div>
              </div>
            </div>
            {/* course cards */}
            {data.rows ? (
              data.rows.map((v, i) => {
                return (
                  <TcCourseCard
                    key={v.sid}
                    course_img={v.course_img}
                    course_name={v.course_name}
                    course_category={v.course_category}
                    course_data={dayjs(
                      v.course_data
                    ).format('YYYY-MM-DD')}
                    hours={v.hours}
                  />
                )
              })
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
