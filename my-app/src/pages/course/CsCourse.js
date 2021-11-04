import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

// 後端檔案路徑
// eslint-disable-next-line no-unused-vars
import { CsCourse_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import TcSearchBar from '../../components/course/CsSearchBar'
import Footer from '../../components/Footer'

import CourseList from './CourseList'

function CsCourse(prop) {
  //  const [searchWord, setSearchWord] = useState('')

  //判斷是否登入並為教師身分
  // const history = useHistory()
  // const token = localStorage.getItem('token')
  // const member = localStorage.getItem('member')
  // const identity = JSON.parse(member).identity
  // const teacherSid = JSON.parse(member).sid

  //  console.log('RemoveCourse', RemoveCourse)

  //  console.log('setRemoveCourse', setRemoveCourse)

  // 課程陣列排出
  // let [data, setData] = useState([])

  // 資料庫來的留言資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()
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

  useEffect(() => {
    // if (!token) {
    //   history.push('/')
    // // } else if (identity !== 0) {
    // //   history.push('/')
    // } else {
    ;(async () => {
      let r = await axios.get(
        // `${ArtMessage_LIST}`
        `${CsCourse_LIST}`
      )
      //下方原本的
      // let r = await axios.get(
      //   // `${ArtMessage_LIST}`
      //   `${CsCourses_LIST}?Sid=${teacherSid}`
      // )

      // let c = await axios.get(
      //   `${ArtMessage_LIST}?Sid=${teacherSid}`
      // )

      // setTcCourses(r.data.rows)

      // setDisplayCourse(r.data.rows)

      if (r.status === 200) {
        setTcCourses(r.data.rows)

        setDisplayCourse(r.data.rows)
      }
      // console.log('r.data.rows', r.data.rows)
    })()
    // }
    // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面
  }, [])

  return (
    <>
      {/* {data.rows
                  ? data.rows.map((v, index) => {
                      return (

                        <tr key={v.sid}>
                          <td>{v.ar_sid}</td>
                          <td>{v.st_sid}</td>
                          <td>{v.st_pictuer}</td>
                          <td>{v.messenger}</td>
                          <td>{v.great}</td>
                          <td>{v.created_date}</td>
                        </tr>
                      )
                    })
                  : null} */}

      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="sh-pageName   mx-auto">
            <div className="sh-search ml-0  ">
              {' '}
              <TcSearchBar
                placeholder="請輸入課程名稱"
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="coursesection col-md-10 col-lg-10">
            {TcCourses.length > 0 ? (
              <CourseList
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
                RemoveCourse={RemoveCourse}
                setRemoveCourse={setRemoveCourse}
              />
            ) : null}
          </div>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default CsCourse
