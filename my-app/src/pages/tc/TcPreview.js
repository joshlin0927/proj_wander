import React, { useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router'

import { IMG_PATH, TcCourse_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import BuyCourseItem from '../../components/BuyCourseItem'
// import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'
import axios from 'axios'

function TcPreview() {
  const [teacher, setTeacher] = useState('')
  const [course, setCourse] = useState('')

  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const identity = member ? JSON.parse(member).identity : ''
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${TcCourse_LIST}/?teacherSid=1`
      )
      setCourse(r.data.rows)
      setTeacher(r.data.rows[0])
      // console.log(r.data.rows)
    })()
  }, [])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="">
          <div className="row p-page-info-bg">
            {/* personal info */}
            <div className="p-info-wrapper col-12">
              <div className="p-page-info">
                <div className="TCname">
                  {teacher.firstname}
                </div>
                <div className="TCp-intro">
                  <div className="TCp-intro-title">
                    自我介紹
                  </div>
                  <p>{teacher.intro}</p>
                </div>
              </div>
              <div className="p-page-avatar">
                <img
                  src={`${IMG_PATH}/${teacher.avatar}`}
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-page-myCourse">
          <div className="p-page-title ml-0 w-100">
            我的課程
          </div>
          <div className="BuyCourseSection">
            {course.length > 0
              ? course.map((c, i) => {
                  return (
                    <BuyCourseItem
                      CourseCover={c.course_img}
                      CourseName={c.course_name}
                      TeacherName={c.firstname}
                      Price={c.course_price}
                    />
                  )
                })
              : ''}
          </div>
          {/* Pagination */}
          {/* <MyPagination /> */}
        </div>
      </div>

      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default withRouter(TcPreview)
