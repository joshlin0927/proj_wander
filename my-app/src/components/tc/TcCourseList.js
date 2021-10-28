import React from 'react'
import TcCourseCard from './TcCourseCard'

function TcCourseList(props) {
  const { TcCourses } = props

  return (
    <>
      {TcCourses.map((v, i) => {
        return (
          <TcCourseCard
            key={v.sid}
            sid={v.sid}
            course_img={v.course_img}
            course_name={v.course_name}
            course_category={v.course_category}
            course_data={v.course_data}
            hours={v.hours}
          />
        )
      })}
    </>
  )
}

export default TcCourseList
