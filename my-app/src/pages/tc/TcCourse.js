import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import dayjs from 'dayjs'
import axios from 'axios'

// 後端檔案路徑
import {
  TcCourse_LIST,
  TcCourse_DELETE,
} from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseList from '../../components/tc/TcCourseList'
import TcHasNoCourse from '../../components/tc/TcHasNoCourse'
import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcCourse() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

  // 資料庫來的資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  const [totalRows, setTotalRows ] = useState('')

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `${TcCourse_LIST}?teacherSid=${teacherSid}`
        )
        if (r.status === 200) {
          setTcCourses(r.data.rows)
          setDisplayCourse(r.data.rows)
          setTotalRows(r.data)
        }
      })()
    }
    // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面
  }, [totalRows])

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  const handleSearch = (TcCourses, searchWord) => {
    let newTcCourses = []

    if (searchWord) {
      newTcCourses = TcCourses.filter((TcCourse) => {
          // includes -> String API
          return TcCourse.course_name.includes(searchWord)
        })
    } else {
      newTcCourses = [...TcCourses]

    }

    return newTcCourses
  }

  useEffect(() => {
    let newTcCourses = []

    newTcCourses = handleSearch(TcCourses, searchWord)

    setDisplayCourse(newTcCourses)
  }, [searchWord, TcCourses, totalRows])

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
                    className="TCbtn-sm btn-primary"
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
                <div className="Labelitem">上傳日期</div>
                <div className="Labelitem">課程長度</div>
              </div>
            </div>
            {/* course cards */}
            {TcCourses ? (
              <TcCourseList TcCourses={displayCourse} />
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
