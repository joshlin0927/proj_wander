import React from 'react'

// component
import TcCourseCard from './TcCourseCard'

function TcCourseList(props) {
  const { Courses, setRemoveCourse } = props
  return (
    <>
      {Courses.map((Course, i) => {
        return (
          <TcCourseCard
            key={Course.sid}
            sid={Course.sid}
            course_img={Course.course_img}
            course_name={Course.course_name}
            course_category={Course.course_category}
            course_data={Course.course_data}
            hours={Course.duration}
            remove={() => {
              const newCourses = [...Courses].filter(
                (v, i) => {
                  return v.sid !== Course.sid
                }
              )
              setRemoveCourse(newCourses)
            }}
          />
        )
      })}
    </>
  )
}

export default TcCourseList
