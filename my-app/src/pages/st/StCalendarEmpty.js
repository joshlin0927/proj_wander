import React from 'react'
import './style/st_calendar(empty).css'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import RemindingText from '../../components/st/RemindingText'
// import CourseItemArrow from '../../components/st/CourseItemArrow'
import CourseItem from '../../components/st/CourseItem'
export default function StCalendarEmpty() {
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

          <div className="remindingarea col-12  offset-0 col-md-8 offset-md-1">
            <RemindingText />
          </div>
        </div>
        <div className="row des-none mo-show">
          <div className="coursesubtitle">推薦課程</div>
          <div className="calendarcoursesection col-12 "></div>
          <CourseItem />
          <div className="btblock"></div>
        </div>
      </div>
    </>
  )
}
