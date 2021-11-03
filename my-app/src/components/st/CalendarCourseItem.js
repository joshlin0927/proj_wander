import React from 'react'
import { IMG_PATH } from '../../config'
import axios from 'axios'
function CalendarCourseItem(props) {
  const { name, teacher, courseimg } = props
  const member = localStorage.getItem('member')
  const studentSid = JSON.parse(member).sid

  const addSchedule = () => {
    axios
      .post('http://localhost:3001/stCalendar/add', {
        member_sid: studentSid,
        course_name: name,
      })
      .then((res) => {
        if (res.success === true) {
          console.log(res)
        } else {
          alert('未修改完成')
        }
      })
  }

  return (
    <>
      <div class="calcourseitem">
        <img
          src={`${IMG_PATH}/course/img/${courseimg}`}
          alt=""
        />
        <div className="mask">
          <button className="addbtn" onClick={addSchedule}>
            加入行事曆
          </button>
        </div>
        <div class="coursename">{name}</div>
        <span class="teachername"> {teacher} </span>
      </div>
    </>
  )
}

export default CalendarCourseItem
