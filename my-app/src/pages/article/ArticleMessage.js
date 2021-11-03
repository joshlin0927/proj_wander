import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

// 後端檔案路徑
import { Art_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ArBgDecorationNormal from '../../components/articles/ArBgDecorationNormal.js'
import Footer from '../../components/Footer'

import ArtMessageList from './ArtMessageList'

function ArticleMessage(props) {
  // const member = localStorage.getItem('member')
  // const teacherSid = JSON.parse(member).sid

  //  const [searchWord, setSearchWord] = useState('')

  const {
    sid,
    imgSrcAA,
    imgSrcA,
    artical_category,
    artical_title,
    artical_image,
  } = props

  console.log('sid', sid)
  console.log('imgSrcAA', imgSrcAA)
  console.log('imgSrcA', imgSrcA)

  //  console.log('setRemoveCourse', setRemoveCourse)

  // 課程陣列排出
  // let [data, setData] = useState([])

  // 資料庫來的留言資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([{}])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveCourse, setRemoveCourse] = useState()

  useEffect(() => {
    let usp = new URLSearchParams(props.location.search)
    ;(async () => {
      let r = await axios.get(
        `${Art_LIST}/${usp.get('articleSid')}`
      )
      if (r.status === 200) {
        setDisplayCourse(r.data.result[0])
        // setImgSrc(r.data.rows[0].artical_image)

        console.log('r.data.result', r.data.result[0])
        // setImgSrc(r.data.rows[0].avatar)
      }
    })()
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
              #{displayCourse.artical_category}
            </div>
            <br />
            <div className="art-title-sin">
              {displayCourse.artical_title}
            </div>
            <br />
            <br />
            <br />
            <div className="TCp-intro-sin">
              <p>
                此劇講述因組織內部糾紛而從義大利逃到韓國的黑手黨顧問文森佐·卡薩諾（宋仲基飾），在遇上律師洪車瑛（全汝彬飾）後，兩人以黑道的方式實現正義的故事。
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
              <Link to={`/ArtIndex/ArtMessageADD/`}>
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
                      {/* {TcCourses.length > 0 ? (
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

export default withRouter(ArticleMessage)
