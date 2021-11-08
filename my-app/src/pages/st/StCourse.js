import React, { useEffect, useState } from 'react'
import './style/st_course.css'
// import { devUrl } from '../../config'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import { IMG_PATH } from '../../config'
//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import StBgDecoration from '../../components/st/StBgDecoration'
// import MyPagination from '../../components/MyPagination'
import CourseItem from '../../components/st/CourseItem'
import RecommandedTC from '../../components/st/RecommandedTC'
import RemindingText from '../../components/st/RemindingText'
import Spinner from '../../components/Spinner'
import Footer from '../../components/Footer'

export default withRouter(function StCourse(props) {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const identity = member ? JSON.parse(member).identity : ''
  const studentSid = member ? JSON.parse(member).sid : ''
  const [courses, setCourses] = useState([{}])
  const [RecommandedTeacher, setRecommandedTeacher] =
    useState({})
  const { auth } = props
  const [imgSrc, setImgSrc] = useState('')
  // 設定Loading Spinner狀態
  const [isLoading, setIsLoading] = useState(true)

  //要呈現的課程資料
  const courseData = (
    <>
      {courses.length !== 0 ? (
        courses.map((course, i) => {
          return (
            <CourseItem
              key={course.sid + '_' + i}
              sid={course.product_sid}
              name={course.course_name}
              courseimg={course.course_img}
              teacher={course.firstname}
            />
          )
        })
      ) : (
        <RemindingText />
      )}
    </>
  )
  useEffect(() => {
    if (token && identity === 0) {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/stprofile/list?studentSid=${studentSid}`
        )

        setImgSrc(r.data[0][0].avatar)
      })()
    }
  }, [imgSrc, auth])

  //畫面掛載元件就向後端要已購買的課程資料
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      setTimeout(() => {
        ;(async () => {
          const Data = await axios.get(
            `http://localhost:3001/stcourse/api/coursedata?studentSid=${studentSid}`
          )
          if (Data) {
            setCourses(Data.data.rows)
            console.log('coursedata', Data.data.rows)
          }
        })()
      }, 1000)

      //把spinner關起來
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [])
  //這裡要記得掛上空格讓他有相依可以判斷，不然會fetch完會再次render，等於狀態又改變，又fetch造成無限迴圈

  useEffect(() => {
    ;(async () => {
      const RecommandedTeacher = await axios.get(
        'http://localhost:3001/api/teacherdata'
      )
      if (RecommandedTeacher) {
        setRecommandedTeacher(RecommandedTeacher.data)
        console.log('teachersdata', RecommandedTeacher.data)
      }
    })()
  }, [])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText course">
              Course
            </span>
          </div>
        </div>

        <div className="row justify-content-center d-flex">
          <StSideBar2 imgSrc={imgSrc} />
          <div className="stcoursesection  col-12 col-md-10">
            {isLoading ? <Spinner /> : courseData}
          </div>
        </div>

        <div className="row">
          <div className="coursesubtitle">推薦教師</div>
        </div>

        <div className="row teacherrow">
          {RecommandedTeacher.rows ? (
            RecommandedTeacher.rows.map((teacher, i) => {
              return (
                <RecommandedTC
                  key={teacher.sid + '_' + i}
                  teacherimg={
                    IMG_PATH + '/' + teacher.avatar
                  }
                  teachersname={teacher.firstname}
                />
              )
            })
          ) : (
            <h1>Hello, world!</h1>
          )}
        </div>
      </div>
      <StBgDecoration />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
})
