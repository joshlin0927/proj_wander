import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

// 後端檔案路徑
import {
  ArtMessage_LIST,
  Art_inter_LIST,
  devUrl,
  IMG_PATH,
} from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ArBgDecorationNormal from '../../components/articles/ArBgDecorationNormal.js'
import Footer from '../../components/Footer'

import ArtMessageList from './ArtMessageList'

function ArtMessage(prop) {
  //  const [searchWord, setSearchWord] = useState('')

  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid
  const queryParams = new URLSearchParams(
    window.location.search
  )

  const id = queryParams.get('articleSid')

  //  console.log('RemoveCourse', RemoveCourse)

  //  console.log('setRemoveCourse', setRemoveCourse)

  // 課程陣列排出
  // let [data, setData] = useState([])

  // 資料庫來的留言資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [ArtdisplayCourse, setArtDisplayCourse] = useState([
    {},
  ])

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        let a = await axios.get(`${Art_inter_LIST}/${id}`)
        let r = await axios.get(
          // `${ArtMessage_LIST}`
          `${ArtMessage_LIST}?Sid=${teacherSid}`
        )
        if (r.status === 200) {
          setArtDisplayCourse(a.data.result[0])

          setTcCourses(r.data.rows)

          setDisplayCourse(r.data.rows)
        }
      })()
    }
  }, [])

  return (
    <>
      {/* {data.rows
                  ? data.rows.map((v, index) => {
                      return (

                        <tr key={v.sid}>
                          <td>{v.ar_sid}</td>
                          <td>{v.st_sid}</td>
                          <td>{v.st_pictuer}</td>
                          <td>{v.messenger}</td>
                          <td>{v.great}</td>
                          <td>{v.created_date}</td>
                        </tr>
                      )
                    })
                  : null} */}

      <div className="container mainContent">
        {/* breadcrumb */}
        {/* <div className="row"> */}
        <MultiLevelBreadCrumb />
        {/* </div> */}
        <div className="row justify-content-center col-12">
          <div className="art-p-page-info col-12 col-md-8">
            <div className="art-type-sin">
              {/* #熱門影集 */}#
              {ArtdisplayCourse.artical_category}
            </div>
            <br />
            <div className="art-title-sin">
              {ArtdisplayCourse.artical_title}
            </div>
            <br />
            <br />
            <br />
            <div className="TCp-intro-sin">
              <p>{ArtdisplayCourse.artical_content}</p>
            </div>
            <br />
            <div className="p-page-avatar-sin">
              <img
                src={`${IMG_PATH}/inter-articles/${ArtdisplayCourse.artical_image}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="p-page-avatar-sin">
              <Link to={`/ArtIndex/ArtMessageADD?articleSid=${id}`}>
                <button className="btn ar-btn-secondary mx-auto  one-btn-sin btn-b-sin">
                  我要留言
                </button>
              </Link>
            </div>
            <div className="opp-sin">
              <div className="row justify-content-center col-12 ">
                <div className="art-p-page-info col-13 col-md-0 ">
                  <div className="subtitle-sin">留言板</div>
                  <nav className="sidebars-sing ">
                    <ul className="nav-list-sing  mx-auto ul-opp ">
                      {/* {data.rows
                  ? data.rows.map((v, index) => {
                      return (
                        <TcCourseCard

                    key={v.sid}
                    ar_sid={v.ar_sid}
                    st_sid={v.st_sid}
                    st_pictuer={v.st_pictuer}
                    messenger={v.messenger}
                    great={v.great}
                    created_date={v.created_date}
                        />
                      )
                    })
                  : null} */}
                      {TcCourses.length > 0 ? (
                        <ArtMessageList
                          displayCourse={displayCourse}
                          setDisplayCourse={
                            setDisplayCourse
                          }
                          RemoveCourse={RemoveCourse}
                          setRemoveCourse={setRemoveCourse}
                        />
                      ) : null}
                      {/* {data.rows.map((v, i) => {
                return (
                  <TcCourseCard
                    key={v.sid}
                    sid={v.ar_sid}
                    course_img={v.st_pictuer}
                    messenger={v.messenger}
                    course_category={v.great}
                    course_data={v.created_date}
                  />
                )
              })} */}
                    </ul>
                  </nav>
                  <Link to={`/ArtIndex/ArticleSt/`}>
                    <button className="btn Article-ar-btn-secondary mx-auto  one-btn-sin btn-b-sin">
                      回到國際角落
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TCallwrapera-sing">
        <div className="TCallwraperw">
          <div className="white-block">
            <div className="yellow-area-but-1 ">
              文章內容
            </div>
          </div>
        </div>
      </div>
      <div className="sns-sing">
        <div className="nav_footer-sing">
          <img
            src={`${devUrl}/images/index/icon/Facebook.svg`}
            alt=""
            className="Facebook-sing"
          />
        </div>
        <div className="nav_footera-sing">
          <img
            src={`${devUrl}/images/index/icon/twitter.svg`}
            alt=""
            className="Facebook-sing"
          />
        </div>
      </div>
      <ArBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default ArtMessage
