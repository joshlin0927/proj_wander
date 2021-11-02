import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import axios from 'axios'

// 後端檔案路徑
import { TcCourse_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcAnalayticCourseList from '../../components/tc/TcAnalyticCourseList'
import TcHasNoCourse from '../../components/tc/TcHasNoCourse'
import TcChart from '../../components/tc/TcChart'
import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcAnalytic() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

  // 資料庫來的課程資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 取得頭圖
  const [imgSrc, setImgSrc] = useState('')

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
          setDisplayCourse(r.data.rows)
          setTcCourses(r.data.rows)
          setImgSrc(r.data.rows[0].avatar)
        } else {
          alert('連線出現問題')
        }
        // console.log(r)
      })()
    }
  }, [])

  console.log(displayCourse)

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 將搜尋吧的字串與得到的資料帶入函式
  const handleSearch = (TcCourses, searchWord) => {
    let newTcCourses = []

    if (searchWord) {
      newTcCourses = TcCourses.filter((TcCourse) => {
        // includes -> String API
        return TcCourse.course_name.includes(searchWord)
      })
    } else {
      // 淺層拷貝
      newTcCourses = [...TcCourses]
    }

    //丟回到外面
    return newTcCourses
  }

  useEffect(() => {
    let newTcCourses = []

    newTcCourses = handleSearch(TcCourses, searchWord)

    setDisplayCourse(newTcCourses)
  }, [searchWord, TcCourses])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCanalytics">
              Analytics
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar imgSrc={imgSrc} />
          {/* content */}
          <form className="TCform col-12 col-md-10 px-4">
            <div className="TCform-head ml-1 p-0">
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                數據分析
              </div>
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn opacity-0"></i>
              </Link>
              {/* desktop search bar */}
              <div className="TCsearch ml-0">
                <TcSearchBar
                  placeholder="請輸入課程名稱"
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
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
            {/* chart */}
            <div className="mb-5">
              <TcChart />
            </div>
            {/* TCcourse card label */}
            <div className="TCcourseLabel col-12 mb-3">
              <div className="Labelitem">課程封面</div>
              <div className="Labelitem">課程名稱</div>
              <div className="TCcourseLabel-right p-0">
                <div className="Labelitem pr-2">
                  上傳日期
                </div>
                <div className="Labelitem">觀看次數</div>
              </div>
            </div>
            {/* course cards */}
            {TcCourses.length > 0 ? (
              <TcAnalayticCourseList
                Courses={displayCourse}
              />
            ) : (
              <TcHasNoCourse
                text={'請點擊右上角的按鈕以新增課程'}
              />
            )}
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(TcAnalytic)
