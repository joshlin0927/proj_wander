import React from 'react'
import { IMG_PATH, devUrl } from '../../config'
import axios from 'axios'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

function CalendarCourseItem(props) {
  // const MySwal = withReactContent(Swal)
  const {
    name,
    teacher,
    courseimg,
    setMytest,
    scheduledDate,
  } = props

  const member = localStorage.getItem('member')
    ? localStorage.getItem('member')
    : ''
  const studentSid = member ? JSON.parse(member).sid : ''

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
            position: 'center',
            icon: 'success',
            title: '已成功加入行事曆',
            showConfirmButton: false,
            timer: 1500,
          })
        }
        if (res.data.error === '訂單已存在') {
          Swal.fire({
            title: '登愣！',
            text: '該課程已出現在行事曆上',
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'warning',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      })
  }

  return (
    <>
      <div className="calcourseitem">
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
        <div className="stcoursename">{name}</div>
        <span className="stteachername"> {teacher} </span>
      </div>
    </>
  )
}

export default CalendarCourseItem
