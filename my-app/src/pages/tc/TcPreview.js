import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import {
  IMG_PATH,
  TcCourse_LIST,
  MemberEdit,
} from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import BuyCourseItem from '../../components/BuyCourseItem'
// import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'
import axios from 'axios'

function TcPreview(props) {
  const [teacher, setTeacher] = useState('')
  const [course, setCourse] = useState('')

  console.log('ssss', props.location.search)
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${MemberEdit}/${props.location.search}`
      )
      let c = await axios.get(
        `${TcCourse_LIST}/${props.location.search}`
      )
      setCourse(c.data.rows)
      setTeacher(r.data[0])
      console.log('member', teacher.intro)
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
                  {teacher.nationality !== '台灣' &&
                  teacher.nationality !== '日本'
                    ? `${teacher.firstname} ${teacher.lastname}`
                    : `${teacher.lastname}${teacher.firstname}`}
                </div>
                <div className="TCp-intro">
                  <div className="TCp-intro-title">
                    自我介紹
                  </div>
                  <p>
                    {teacher.intro
                      .split('\n')
                      .map((item) => {
                        return (
                          <>
                            {item}
                            <br />
                          </>
                        )
                      })}
                  </p>
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
          <div className="BuyCourseSection  col-12 col-md-10">
            {course.length > 0
              ? course.map((c, i) => {
                  return (
                    <BuyCourseItem
                      courseSid={c.sid}
                      CourseCover={c.course_img}
                      CourseName={c.course_name}
                      course_category={c.course_category}
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
