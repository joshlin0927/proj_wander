import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './style/st_calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // dayClick功能使用
import axios from 'axios'
import Slider from 'react-slick' //for carousel
//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import CourseItem from '../../components/st/CourseItem'
import Footer from '../../components/Footer'

export default function StCalendar() {
  const [events, setEvents] = useState([])
  const [schedule, setSchedule] = useState('')
  const handleDateClick = (e) => {
    setSchedule('showup')
  } //按日期觸發事件

  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const studentSid = JSON.parse(member).sid

  const [courses, setCourses] = useState('')
  //要該名學生購買的課程資料
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        const Data = await axios.get(
          `http://localhost:3001/stcourse/api/coursedata?studentSid=${studentSid}`
        )
        if (Data) {
          setCourses(Data.data)
          console.log('coursedata', Data.data)
        }
      })()
    }
  }, [])

  //carousel設定
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText calendar">
              Calendar
            </span>
          </div>
        </div>

        <div className="row">
          <StSideBar2 />
          <div
            className="col-md-8 col-12 offset-0 offset-md-1 p-2"
            style={{ backgroundColor: 'white' }}
          >
            <FullCalendar
              events={events} // 設定行事曆事件
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
              headerToolbar={{
                left: '',
                center: 'title',
                right: 'prev,next',
              }} // 載入樣式外掛
              dateClick={handleDateClick}
            />
          </div>
        </div>

        <div className="coursesection-m col-12">
          <CourseItem />
        </div>
        <div className="h30"></div>
        <div className="h30"></div>
      </div>

      <div className={`allwraper  ${schedule}`}>
        <div className="calendardec-side col-md-10 col-lg-10">
          <div className="calendardec-insideblock col-md-10 col-lg-10">
            <button className="startmycourse col-md-8 col-lg-8">
              加入排程
            </button>

            <div className="schedulecoursesection col-md-12 col-lg-12">
              <CourseItem />
            </div>
          </div>
        </div>
      </div>
      <div className="bgicalendar"></div>
      <Footer />
    </>
  )
}
