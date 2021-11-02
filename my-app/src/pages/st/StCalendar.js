import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './style/st_calendar.css'
import axios from 'axios'
import Carousel from 'react-grid-carousel'
import { IMG_PATH } from '../../config'
//月曆測試data
import { events as eventData } from './event'
//共用元件
import Calendar from '../../components/st/Calendar.component'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import CalendarCourseItem from '../../components/st/CalendarCourseItem'
import Footer from '../../components/Footer'
let selectTimeout
const now = () => new Date()
export default function StCalendar(props) {
  const [events, setEvents] = useState(
    eventData.map((event) => {
      event.start = new Date(event.start)
      event.end = new Date(event.end)
      return event
    })
  )
  const [schedule, setSchedule] = useState('')

  // const handleDateClick = (e) => {
  //   setSchedule('showup')
  // } //按日期觸發事件

  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const studentSid = JSON.parse(member).sid
  const { auth, setAuth } = props
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    if (token && identity === 0) {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/stprofile/list?studentSid=${studentSid}`
        )

        setImgSrc(r.data[0][0].avatar)
      })()
    }
  }, [imgSrc, auth])

  const [courses, setCourses] = useState('')
  //要該名學生購買的課程資料
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      // ;(async () => {
      //   const Data = await axios.get(
      //     `http://localhost:3001/stcourse/api/coursedata?studentSid=${studentSid}`
      //   )
      //   if (Data) {
      //     setCourses(Data.data)
      //     console.log('coursedata', Data.data)
      //   }
      // })()

      ;(async () => {
        const r = await axios.get(
          'http://localhost:3001/stcourse/list'
        )
        if (r.data) {
          setCourses(r.data[0])
          console.log(r.data[0])
        }
      })()
    }
  }, [])

  //carousel設定
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  //日曆設定

  const [date, setDate] = useState(now())
  const [view, setView] = useState('month')

  const onNavigate = (newDate) => setDate(newDate)
  const onView = (newView) => setView(newView)

  const accessors = {
    draggableAccessor: (event) => !event.blocked,
    resizableAccessor: (event) => !event.blocked,
  }

  const onSelectSlot = ({ start, end, action }) => {
    selectTimeout && window.clearTimeout(selectTimeout)

    selectTimeout = setTimeout(() => {
      setSchedule('showup')
      console.log('onSelectSlot: ', {
        start,
        end,
        action,
      })
    }, 250)
  }

  const onSelectEvent = (event) => {
    selectTimeout && window.clearTimeout(selectTimeout)

    selectTimeout = setTimeout(() => {
      console.log('onSelectEvent: ', event)
    }, 250)
  }

  const onDoubleClickEvent = (event) => {
    selectTimeout && window.clearTimeout(selectTimeout)

    selectTimeout = setTimeout(() => {
      console.log('onDoubleClickEvent: ', event)
    }, 250)
  }

  const moveEvent = ({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot,
  }) => {
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = {
      ...event,
      start,
      end,
      allDay,
    }

    setEvents((prevEvents) => {
      const filtered = prevEvents.filter(
        (it) => it.id !== event.id
      )
      return [...filtered, updatedEvent]
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  const resizeEvent = ({ event, start, end }) => {
    setEvents((prevEvents) => {
      const filtered = prevEvents.filter(
        (it) => it.id !== event.id
      )
      return [
        ...filtered,
        {
          ...event,
          start,
          end,
        },
      ]
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  const onKeyPressEvent = ({ event, ...other }) => {
    console.log('[onKeyPressEvent] - event', event)
    console.log('[onKeyPressEvent] - other', other)
  }

  // const onDragStart = ({ event, action }) => {
  //   const { id } = event
  //   if (id === 5) {
  //     return false
  //   }
  //   //console.log(`onDragStart: ${action}`, event);
  // }

  const onSelecting = (range) => {
    console.log('[onSelecting] range: ', range)
  }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText calendar">
              Calendar
            </span>
          </div>
        </div>

        <div className="row">
          <StSideBar2 imgSrc={imgSrc} />
          <div
            className="col-md-8 col-12 offset-0 offset-md-1 p-2 big_calendar"
            style={{ backgroundColor: 'white' }}
          >
            <Calendar
              {...{
                events,
                date,
                onNavigate,
                view,
                onView,
                onSelectSlot,
                onSelectEvent,
                onSelecting,
                onDoubleClickEvent,
                onKeyPressEvent,
              }}
              onEventDrop={moveEvent}
              onEventResize={resizeEvent}
              {...accessors}
              selectable="ignoreEvents"
            />
          </div>
        </div>

        <div className="coursesection-m col-12">
          <CalendarCourseItem />
        </div>
        <div className="h30"></div>
        <div className="h30"></div>
      </div>

      <div className={`allwraper  ${schedule}`}>
        <div className="calendardec-side col-md-10 col-lg-10 col-12">
          <div className="calendardec-insideblock col-md-8 col-lg-7 col-12">
            <div
              className="closeicon"
              onClick={() => {
                setSchedule('none')
              }}
            >
              close
            </div>

            <div className="schedulecoursesection col-md-10 col-lg-8">
              <Carousel cols={1} rows={1} gap={10} loop>
                {courses ? (
                  courses.map((course, i) => {
                    return (
                      <Carousel.Item>
                        <CalendarCourseItem
                          key={course.sid}
                          name={course.course_name}
                          courseimg={course.course_img}
                          teacher={course.firstname}
                        />
                      </Carousel.Item>
                    )
                  })
                ) : (
                  <></>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="bgicalendar"></div>
      <Footer />
    </>
  )
}
