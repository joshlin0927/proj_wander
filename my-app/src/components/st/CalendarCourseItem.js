import React from 'react'
import { IMG_PATH, devUrl } from '../../config'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CalendarCourseItem(props) {
  const MySwal = withReactContent(Swal)
  const {
    name,
    teacher,
    courseimg,
    setMytest,
    scheduledDate,
  } = props

  const member = localStorage.getItem('member')
  const studentSid = JSON.parse(member).sid

  const addSchedule = () => {
    console.log(scheduledDate.start)
    console.log(scheduledDate.end)
    axios
      .post('http://localhost:3001/stCalendar/add', {
        member_sid: studentSid,
        course_name: name,
        start: scheduledDate.start,
        end: scheduledDate.end,
      })
      .then((res) => {
        setMytest(Math.random())
        if (res.data.success === true) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '已成功加入行事曆',
            showConfirmButton: false,
            timer: 1500,
          })
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
        <div
          className="mask"
          onClick={() => {
            addSchedule()
          }}
        >
          <img
            src={`${devUrl}/images/elements/addhover.png`}
            alt=""
          />
        </div>
        <div class="stcoursename">{name}</div>
        <span class="stteachername"> {teacher} </span>
      </div>
    </>
  )
}

export default CalendarCourseItem
