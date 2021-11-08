import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './style/st_calendar.css'
import axios from 'axios'
import Carousel from 'react-grid-carousel'
import dayjs from 'dayjs'
import Swal from 'sweetalert2'
// import { IMG_PATH } from '../../config'
//月曆測試用data
// import { events as eventData } from './event'
//共用元件
import Calendar from '../../components/st/Calendar.component'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import CalendarCourseItem from '../../components/st/CalendarCourseItem'
import Footer from '../../components/Footer'
let selectTimeout
const now = () => new Date()
export default function StCalendar(props) {
  //讓側邊滑出已購買課程供排程選擇
  const [schedule, setSchedule] = useState('')
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const studentSid = JSON.parse(member).sid
  const { auth } = props
  const [imgSrc, setImgSrc] = useState('')
  const [events, setEvents] = useState([{}])
  const [courses, setCourses] = useState([{}])
  const [mytest, setMytest] = useState(0)
  const [scheduledDate, setScheduledDate] = useState({
    start: '',
    end: '',
  })
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

  //要該名學生購買的課程資料要出現在黃色色塊給學生選
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
          setCourses(Data.data.rows)
          console.log('coursedata:', Data.data.rows)
        }
      })()
    }
  }, [])

  //抓已經加入行事曆的資料出現在行事曆上
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        const j = await axios.get(
          `http://localhost:3001/stCalendar/list?member_sid=${studentSid}`
        )
        if (j.data.success) {
          console.log('schedule:', j)
          setEvents(
            j.data.result.map((e) => {
              e.start = new Date(e.start)
              e.end = new Date(e.end)
              return e
            })
          )
        }
      })()
    }
  }, [mytest])

  // //carousel設定
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // }

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

      setScheduledDate({
        start: dayjs(start).format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(end).format('YYYY-MM-DD HH:mm:ss'),
      })
      console.log('onSelectSlot: ', {
        start,
        end,
        action,
      })
    }, 100)
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

    Swal.fire({
      title: '確定要刪除這個行程？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'delete',
    }).then(async (r) => {
      if (r.isConfirmed) {
        Swal.fire('行程已確定刪除')
        let result = await axios.delete(
          'http://localhost:3001/stCalendar/delete',
          {
            data: {
              member_sid: studentSid,
              course_name: event.title,
            },
          }
        )
        console.log('result:', result)
        if (result.status === 200) {
          setMytest(Math.random())
          if (events.length <= 1) {
            setEvents([{}])
          }
        }
      }
    })
  }

  const moveEvent = async ({
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
        (it) => it.sid !== event.sid
      )
      return [...filtered, updatedEvent]
    })

    console.log(
      `${event.title} was dropped onto ${updatedEvent.start}`
    )

    const start_time = dayjs(start).format(
      'YYYY-MM-DD HH:mm:ss'
    )

    const end_time = dayjs(end).format(
      'YYYY-MM-DD HH:mm:ss'
    )

    let r = await axios.put(
      'http://localhost:3001/stCalendar/edit',
      {
        start: start_time,
        end: end_time,
        course_name: event.title,
        member_sid: studentSid,
      }
    )
    if (r.data) {
      console.log('outcome:', r.data)
    }
  }

  const resizeEvent = async ({ event, start, end }) => {
    setEvents((prevEvents) => {
      const filtered = prevEvents.filter(
        (it) => it.sid !== event.sid
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

    console.log(
      `${event.title} was resized to ${start}-${end}`
    )

    let r = await axios.put(
      'http://localhost:3001/stCalendar/edit',
      {
        start: dayjs(start).format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(end).format('YYYY-MM-DD HH:mm:ss'),
        course_name: event.title,
        member_sid: studentSid,
      }
    )
    if (r.data) {
      console.log('outcome:', r.data)
    }
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

        {/* <div className="coursesection-m col-12">
          <CalendarCourseItem />
        </div> */}
        <div className="h30"></div>
        <div className="h30"></div>
      </div>

      <div className={`allwraper  ${schedule}`}>
        <div className="calendardec-side col-md-10 col-12">
          <div className="calendardec-insideblock col-md-10 col-12">
            <div
              className="closeicon"
              onClick={() => {
                setSchedule('none')
              }}
            >
              close
            </div>

            <div className="schedulecoursesection col-md-10 col-12">
              <Carousel cols={1} rows={1} gap={10} loop>
                {courses.length !== 0 ? (
                  courses.map((course, i) => {
                    return (
                      <Carousel.Item>
                        <CalendarCourseItem
                          key={course.sid}
                          name={course.course_name}
                          courseimg={course.course_img}
                          teacher={course.firstname}
                          setMytest={setMytest}
                          scheduledDate={scheduledDate}
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
