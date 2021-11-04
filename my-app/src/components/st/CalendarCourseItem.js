import React from 'react'
import { IMG_PATH } from '../../config'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CalendarCourseItem(props) {
  const MySwal = withReactContent(Swal)
  const { name, teacher, courseimg, setMytest } = props
  const member = localStorage.getItem('member')
  const studentSid = JSON.parse(member).sid

  const addSchedule = () => {
    axios
      .post('http://localhost:3001/stCalendar/add', {
        member_sid: studentSid,
        course_name: name,
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
        <div className="mask">
          <button className="addbtn" onClick={addSchedule}>
            加入行事曆
          </button>
        </div>
        <div class="stcoursename">{name}</div>
        <span class="stteachername"> {teacher} </span>
      </div>
    </>
  )
}

export default CalendarCourseItem
