import React from 'react'
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
import Footer from '../../components/Footer'

//取得後端課程資料
const getData = async () => {
  const Data = await axios.get(
    'http://localhost:3001/stcourse//api/coursedata'
  )
  const courses = Data.data.rows
  console.log(courses)
}
//

export default function StCourse() {
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
        <button onClick={getData}> Get </button>

        <div className="row justify-content-center d-flex">
          <StSideBar2 />

          <div className="coursesection col-md-8 col-lg-8 col-12">
            <CourseItem />
          </div>
        </div>

        <div className="mo-none">
          <MyPagination />
        </div>

        <div className="row">
          <div className="coursesubtitle">推薦教師</div>
        </div>

        <div className="row teacherrow">
          <RecommandedTC />
        </div>
        <div className="btblock"></div>
      </div>
      <StBgDecoration />
      <Footer />
    </>
  )
}
