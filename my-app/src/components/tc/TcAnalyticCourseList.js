import React from 'react'

// component
import TcAnalayticsCourseCard from './TcAnalayticCourseCard'

function TcAnalyticCourseList(props) {
  const { Courses, setClick } = props

  return (
    <>
      {Courses.map((Course, i) => {
        return (
          <TcAnalayticsCourseCard
            key={Course.sid}
            sid={Course.sid}
            course_img={Course.course_img}
            course_name={Course.course_name}
            course_data={Course.course_data}
            views={Course.views}
            setClick={setClick}
          />
        )
      })}
    </>
  )
}

export default TcAnalyticCourseList
