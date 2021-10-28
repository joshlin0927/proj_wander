import React, { useEffect, useState } from 'react'
import './style/st_course.css'
// import { devUrl } from '../../config'
import axios from 'axios'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import StBgDecoration from '../../components/st/StBgDecoration'
import MyPagination from '../../components/MyPagination'
import CourseItem from '../../components/st/CourseItem'
import RecommandedTC from '../../components/st/RecommandedTC'
import RemindingText from '../../components/st/RemindingText'
import Footer from '../../components/Footer'

export default function StCourse() {
  //畫面掛載元件就向後端要課程資料
  useEffect(() => {
    ;(async () => {
      const Data = await axios.get(
        'http://localhost:3001/stcourse/api/coursedata'
      )
      if (Data) {
        setCourses(Data.data)
        console.log(Data.data)
      } else {
        return
      }
    })()
  }, [])
  //這裡要記得掛上空格讓他有相依可以判斷，不然會fetch完會再次render，等於狀態又改變，又fetch造成無限迴圈

  useEffect(() => {
    ;(async () => {
      const RecommandedTeacher = await axios.get(
        'http://localhost:3001/api/teacherdata'
      )
      if (RecommandedTeacher) {
        setRecommandedTeacher(RecommandedTeacher.data)
        console.log(RecommandedTeacher.data)
      }
    })()
  }, [])
  const [courses, setCourses] = useState({})
  const [RecommandedTeacher, setRecommandedTeacher] =
    useState({})
  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText course">
              Course
            </span>
          </div>
        </div>

        <div className="row justify-content-center d-flex">
          <StSideBar2 />
          <div className="coursesection col-md-8 col-lg-8 col-12">
            {courses.rows ? (
              courses.rows.map((course, i) => {
                return (
                  <CourseItem
                    key={course.sid + '_' + i}
                    name={course.course_name}
                    courseimg={course.course_img}
                    teacher={course.firstname}
                  />
                )
              })
            ) : (
              <RemindingText />
            )}
          </div>
        </div>

        <div className="mo-none">
          <MyPagination />
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
                  teacherimg={teacher.avatar}
                  teachersname={teacher.firstname}
                />
              )
            })
          ) : (
            <h1>Hello, world!</h1>
          )}
        </div>
        <div className="btblock"></div>
      </div>
      <StBgDecoration />
      <Footer />
    </>
  )
}
