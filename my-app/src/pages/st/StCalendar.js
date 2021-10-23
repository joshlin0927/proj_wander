import React from 'react'
import { Link } from 'react-router-dom'
import './style/st_calendar.css'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'
import CourseItem from '../../components/st/CourseItem'

export default function StCalendar() {
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

        <div className="row ">
          <StSideBar2 />

          <div className="timetable offset-0 offset-md-1 table-responsive  col-8">
            <div className="year_month">
              <p className="month">November</p>
              <p className="year">2021</p>
            </div>
            <table className="table table-responsive table-bordered">
              <tbody>
                <tr>
                  <th className="weekday">SUN</th>
                  <th className="weekday">MON</th>
                  <th className="weekday">TUES</th>
                  <th className="weekday">WED</th>
                  <th className="weekday">THU</th>
                  <th className="weekday">FRI</th>
                  <th className="weekday">SAT</th>
                </tr>
                <tr>
                  <th className="firstweek">31</th>
                  <th className="firstweek">1</th>
                  <th className="firstweek">2</th>
                  <th className="firstweek">3</th>
                  <th className="firstweek">4</th>
                  <th className="firstweek">5</th>
                  <th className="firstweek">6</th>
                </tr>
                <tr>
                  <th className="secweek">7</th>
                  <th className="secweek">8</th>
                  <th className="secweek">9</th>
                  <th className="secweek">10</th>
                  <th className="secweek">11</th>
                  <th className="secweek">12</th>
                  <th className="secweek">13</th>
                </tr>
                <tr>
                  <th className="thirdweek">14</th>
                  <th className="thirdweek">15</th>
                  <th className="thirdweek">16</th>
                  <th className="thirdweek">17</th>
                  <th className="thirdweek">18</th>
                  <th className="thirdweek">19</th>
                  <th className="thirdweek">20</th>
                </tr>
                <tr>
                  <th className="forthweek">21</th>
                  <th className="forthweek">22</th>
                  <th className="forthweek">23</th>
                  <th className="forthweek">24</th>
                  <th className="forthweek">25</th>
                  <th className="forthweek">26</th>
                  <th className="forthweek">27</th>
                </tr>
                <tr>
                  <th className="fifweek">28</th>
                  <th className="fifweek">29</th>
                  <th className="fifweek">30</th>
                  <th className="fifweek"></th>
                  <th className="fifweek"></th>
                  <th className="fifweek"></th>
                  <th className="fifweek"></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="coursesection-m col-12">
          <CourseItem />
        </div>
        <div className="h30"></div>

        <div className="minicalendar col-12">
          <div className="year_month-m">
            <Link href="">
              <i className="fas fa-chevron-left"></i>
            </Link>
            <span> December</span>
            <span>2021 </span>
            <Link href="">
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
          <table className="minitable table table-responsive ">
            <tbody>
              <tr>
                <th className="weekday-m">SUN</th>
                <th className="weekday-m">MON</th>
                <th className="weekday-m">TUES</th>
                <th className="weekday-m">WED</th>
                <th className="weekday-m">THU</th>
                <th className="weekday-m">FRI</th>
                <th className="weekday-m">SAT</th>
              </tr>
              <tr>
                <th className="firstweek-m">31</th>
                <th className="firstweek-m">1</th>
                <th className="firstweek-m">2</th>
                <th className="firstweek-m">3</th>
                <th className="firstweek-m">4</th>
                <th className="firstweek-m">5</th>
                <th className="firstweek-m">6</th>
              </tr>
              <tr>
                <th className="secweek-m">7</th>
                <th className="secweek-m">8</th>
                <th className="secweek-m">9</th>
                <th className="secweek-m">10</th>
                <th className="secweek-m">11</th>
                <th className="secweek-m">12</th>
                <th className="secweek-m">13</th>
              </tr>
              <tr>
                <th className="thirdweek-m">14</th>
                <th className="thirdweek-m">15</th>
                <th className="thirdweek-m">16</th>
                <th className="thirdweek-m">17</th>
                <th className="thirdweek-m">18</th>
                <th className="thirdweek-m">19</th>
                <th className="thirdweek-m">20</th>
              </tr>
              <tr>
                <th className="forthweek-m">21</th>
                <th className="forthweek-m">22</th>
                <th className="forthweek-m">23</th>
                <th className="forthweek-m">24</th>
                <th className="forthweek-m">25</th>
                <th className="forthweek-m">26</th>
                <th className="forthweek-m">27</th>
              </tr>
              <tr>
                <th className="forthweek-m">28</th>
                <th className="forthweek-m">29</th>
                <th className="forthweek-m">30</th>
                <th className="forthweek-m"></th>
                <th className="forthweek-m"></th>
                <th className="forthweek-m"></th>
                <th className="forthweek-m"></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h30"></div>
      </div>

      <div className="STallwraper">
        <div className="calendardec-side col-md-10 col-lg-10">
          <div className="calendardec-insideblock col-md-10 col-lg-10">
            <div className="startmycourse col-md-8 col-lg-8">
              加入排程
            </div>

            <div className="schedulecoursesection col-md-12 col-lg-12">
              <CourseItem />
            </div>
          </div>
        </div>
        {/* <div class="leftarr">
          <Link to="">
            <i class="fal fa-arrow-left"> </i>
          </Link>
        </div>
        <div class="rightarr">
          <Link to="">
            <i class="fal fa-arrow-right"> </i>
          </Link>
        </div> */}
      </div>
    </>
  )
}
