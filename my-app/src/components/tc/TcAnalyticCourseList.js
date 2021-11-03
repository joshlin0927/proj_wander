import React from 'react'

// component
import TcAnalayticsCourseCard from './TcAnalayticCourseCard'

function TcAnalyticCourseList(props) {
  const { Courses } = props

  let all = []
  for (let i = 0; i < Courses.length; i++) {
    all[i] = {
      Jan: Courses[i].Jan,
      Feb: Courses[i].Feb,
      Mar: Courses[i].Mar,
      Apr: Courses[i].Apr,
      May: Courses[i].May,
      Jun: Courses[i].Jun,
    }
  }
  console.log('clicked sid', Courses)
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
            all={Course.all}
          />
        )
      })}
    </>
  )
}

export default TcAnalyticCourseList
