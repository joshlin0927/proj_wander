import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, withRouter } from 'react-router'
import axios from 'axios'

// 後端檔案路徑
import {
  MemberEdit,
  TcCourse_LIST,
  TcCourse_ADD,
} from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseList from '../../components/tc/TcCourseList'
import TcHasNoCourse from '../../components/tc/TcHasNoCourse'
// import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcCourse(props) {
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

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()

  // 取得頭圖
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      ;(async () => {
        let M = await axios.get(
          `${MemberEdit}/?teacherSid=${teacherSid}`
        )
        if (M.status === 200) {
          setImgSrc(M.data[0].avatar)
        }
      })()
      ;(async () => {
        let r = await axios.get(
          `${TcCourse_LIST}/?teacherSid=${teacherSid}`
        )
        if (r.status === 200) {
          setTcCourses(r.data.rows)
          setDisplayCourse(r.data.rows)
          // setImgSrc(r.data.rows[0].avatar)
        }
        console.log(r.data.rows)
      })()
    }
    // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面
  }, [RemoveCourse, imgSrc])

  //RemoveCourse裡面是在前端被刪除過後的課程陣列
  // console.log(RemoveCourse)

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

  const addCourse = async () => {
    const r = await axios.post(
      `${TcCourse_ADD}?teacherSid=${teacherSid}`,

      { teacher_sid: teacherSid }
    )
    // console.log(r.data.result.insertId)
  }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCcourse">
              Course
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar imgSrc={imgSrc} />
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
                <Link to={`/TcIndex/TcCourseAdd/`}>
                  <button
                    type="submit"
                    className="TCbtn-sm btn-primary"
                    onClick={addCourse}
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
                <div className="Labelitem">創建日期</div>
                <div className="Labelitem">課程長度</div>
              </div>
            </div>
            {/* course cards */}
            {TcCourses.length > 0 ? (
              <TcCourseList
                Courses={displayCourse}
                RemoveCourse={RemoveCourse}
                setRemoveCourse={setRemoveCourse}
              />
            ) : (
              <TcHasNoCourse
                text={'請點擊右上角的按鈕以新增課程'}
              />
            )}

            {/* Pagination */}
            {/* <MyPagination /> */}
          </div>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(TcCourse)
