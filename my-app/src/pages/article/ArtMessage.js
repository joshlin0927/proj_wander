import React, { useRef, useState, useEffect } from 'react'
import { devUrl } from '../../config'
import { useHistory } from 'react-router'
import axios from 'axios'

// 後端檔案路徑
import { ArtMessage_LIST, MemberEdit } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ArBgDecorationNormal from '../../components/articles/ArBgDecorationNormal.js'
import Footer from '../../components/Footer'

import ArtCard from './ArtCard'

import ArtList from './ArtList'

function ArtMessage() {
  //  const [searchWord, setSearchWord] = useState('')

  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

  //  console.log('RemoveCourse', RemoveCourse)

  //  console.log('setRemoveCourse', setRemoveCourse)

  // 課程陣列排出
  // let [data, setData] = useState([])

  let [totalRows, setTotalRows] = useState(0)

  // 資料庫來的影片資料
  const [TcVideos, setTcVideos] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayVideo, setDisplayVideo] = useState([])

  // 資料庫來的課程資料
  const [TcCourses, setTcCourses] = useState([])

  const [displayCourse, setDisplayCourse] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          // `${ArtMessage_LIST}`
          `${ArtMessage_LIST}?Sid=${teacherSid}`
        )

        // let c = await axios.get(
        //   `${ArtMessage_LIST}?Sid=${teacherSid}`
        // )

        // setTcCourses(r.data.rows)

        // setDisplayCourse(r.data.rows)

        if (r.status === 200) {
          setTcCourses(r.data.rows)

          setDisplayCourse(r.data.rows)
        }
        console.log('r.data.rows', r.data.rows)
      })()
    }
    // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面
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
        <div className="row">
          <MultiLevelBreadCrumb />
        </div>
        <div className="row justify-content-center col-12">
          <div className="p-page-info col-12 col-md-8">
            <div className="art-type-sin">#熱門影集</div>
            <br />
            <div className="art-title-sin">
              黑道律師文森佐
            </div>
            <br />
            <br />
            <br />
            <div className="TCp-intro-sin">
              <p>
                {/* 此劇講述因組織內部糾紛而從義大利逃到韓國的黑手黨顧問文森佐·卡薩諾（宋仲基飾），在遇上律師洪車瑛（全汝彬飾）後，兩人以黑道的方式實現正義的故事。 */}
              </p>
            </div>
            <br />
            <div className="p-page-avatar-sin">
              <img
                src={`${devUrl}/images/article/熱門文章/06.jpg`}
                alt=""
                className="img-fluid-sin"
              />
            </div>
            <div className="p-page-avatar-sin">
              <button className="btn-sin btn-outline-y-sin row mx-auto one-btn-sin btn-b-sin ">
                我要留言
              </button>
            </div>
            <div className="opp-sin">
              <div className="row justify-content-center col-12 ">
                <div className="p-page-info col-13 col-md-0 ">
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
                        <ArtList
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

                      {/* <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
                        <div className="TCcourse-img-sing">
                          <img
                            src={`${devUrl}/images/article/message/avatar/01.png`}
                            alt=""
                          />
                          <span className="TCcourse-img-selector-sin">
                            Ann
                          </span>
                        </div>
                        <div className="TCcourse-info-sing">
                          <div className="TCcourse-title-sin">
                            <p>
                            {data.messenger}
                              Lorem ipsum dolor, sit amet
                              consectetur adipisicing elit.
                              Rem nostrum repudiandae nobis
                              sunt ratione! Nihil.
                            </p>
                          </div>
                          <div className="TCcourse-info-right-sin">
                            <div className="TCcourse-detail-sin">
                              <a href="#">
                                <img
                                  src={`${devUrl}/images/article/message/thumb_up.png`}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="TCcourse-delete-sing"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <div className="opp-icon-sing">
                            <i className="fas fa-edit"></i>
                          </div>
                          <div className="opp-icon-sing">
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </li> */}
                      {/* <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
                        <div className="TCcourse-img-sing">
                          <img
                            src={`${devUrl}/images/article/message/avatar/01.png`}
                            alt=""
                          />
                          <span className="TCcourse-img-selector-sin">
                            Ann
                          </span>
                        </div>
                        <div className="TCcourse-info-sing">
                          <div className="TCcourse-title-sin">
                            <p>
                              Lorem ipsum dolor, sit amet
                              consectetur adipisicing elit.
                              Rem nostrum repudiandae nobis
                              sunt ratione! Nihil.
                            </p>
                          </div>
                          <div className="TCcourse-info-right-sin">
                            <div className="TCcourse-detail-sin">
                              <a href="#">
                                <img
                                  src={`${devUrl}/images/article/message/thumb_up.png`}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="TCcourse-delete-sing"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <div className="opp-icon-sing">
                            <i className="fas fa-edit"></i>
                          </div>
                          <div className="opp-icon-sing">
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </li> */}
                      {/* <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
                        <div className="TCcourse-img-sing">
                          <img
                            src={`${devUrl}/images/article/message/avatar/01.png`}
                            alt=""
                          />
                          <span className="TCcourse-img-selector-sin">
                            Ann
                          </span>
                        </div>
                        <div className="TCcourse-info-sing">
                          <div className="TCcourse-title-sin">
                            <p>
                              Lorem ipsum dolor, sit amet
                              consectetur adipisicing elit.
                              Rem nostrum repudiandae nobis
                              sunt ratione! Nihil.
                            </p>
                          </div>
                          <div className="TCcourse-info-right-sin">
                            <div className="TCcourse-detail-sin">
                              <a href="#">
                                <img
                                  src={`${devUrl}/images/article/message/thumb_up.png`}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="TCcourse-delete-sing"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <div className="opp-icon-sing">
                            <i className="fas fa-edit"></i>
                          </div>
                          <div className="opp-icon-sing">
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </nav>
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
              熱門文章
            </div>
          </div>
        </div>
      </div>
      <div className="sns-sing">
        <div className="nav_footer-sing">
          <img
            src="../images/index/icon/Facebook.svg"
            alt=""
            className="Facebook-sing"
          />
        </div>
        <div className="nav_footera-sing">
          <img
            src="../images/index/icon/twitter.svg"
            alt=""
            className="Facebook-sing"
          />
        </div>
      </div>
      <ArBgDecorationNormal />
      <Footer />
    </>
  )
}

export default ArtMessage
