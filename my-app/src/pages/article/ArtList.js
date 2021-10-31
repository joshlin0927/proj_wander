import React, { useState } from 'react'
import ArtCard from './ArtCard'

function TcCourseList(props) {
  const {
    Courses,
    RemoveVideo,
    setRemoveCourse,
    status,
    setStatus,
  } = props
  return (
    <>
      {/* {Courses.map((Course, i) => {
        return (
          <TcCourseCard
            key={Course.sid}
            sid={Course.sid}
            course_img={Course.course_img}
            course_name={Course.course_name}
            course_category={Course.course_category}
            course_data={Course.course_data}
            hours={Course.hours}
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
      })} */}
      {Courses.map((Course, i) => {
        return (
          <ArtCard
            key={Course.sid}
            sid={Course.sid}
            ar_sid={Course.ar_sid}
            st_sid={Course.st_sid}
            st_pictuer={Course.st_pictuer}
            messenger={Course.messenger}
            great={Course.great}
            created_date={Course.created_date}
            remove={() => {
              const newCourses = [...Courses].filter(
                (v, i) => {
                  return v.sid !== Course.sid
                }
              )
              setRemoveCourse(newCourses)
            }}
            status={() => {
              const newCourses = [...Courses].filter(
                (v, i) => {
                  return v.messenger !== Course.messenger
                }
              )
              setStatus(newCourses)
            }}
          />
        )
      })}
    </>
  )
}

export default TcCourseList
