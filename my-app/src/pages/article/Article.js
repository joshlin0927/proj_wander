import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import axios from 'axios'
import { Link } from 'react-router-dom'

// 後端檔案路徑
import { Art_Article_POP_LIST } from '../../config'

// components
import TcSearchBar from './TcSearchBar'

import ArticleList from './ArticleList'

import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import ArBgDecorationNormal from '../../components/articles/ArBgDecorationNormal.js'
import Footer from '../../components/Footer'

import Spinner from '../../components/Spinner'

function Article(props) {
  //判斷是否登入並為教師身分
  // const history = useHistory()
  // const token = localStorage.getItem('token')
  // const member = localStorage.getItem('member')
  // const identity = JSON.parse(member).identity
  //  const teacherSid = JSON.parse(member).sid

  // spinner
  const [isLoading, setIsLoading] = useState(true)

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 資料庫來的課程資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 取得頭圖
  // const [imgSrc, setImgSrc] = useState('')

  // useEffect(() => {

  //     let r =  axios.get(
  //       // `${Art_LIST}?Sid=${teacherSid}`
  //        `${Art_LIST}`

  //     )
  //     if (r.status === 200) {
  //       setTcCourses(r.data.rows)
  //       setDisplayCourse(r.data.rows)
  //       // setImgSrc(r.data.rows[0].avatar)
  //     }
  //      console.log('r.data[0][0]', r.data[0][0])

  
  // 將搜尋吧的字串與得到的資料帶入函式
  const handleSearch = (TcCourses, searchWord) => {
    let newTcCourses = []

    if (searchWord) {
      newTcCourses = TcCourses.filter((TcCourse) => {
        // includes -> String API
        return TcCourse.artical_title.includes(searchWord)
      })
    } else {
      // 淺層拷貝
      newTcCourses = [...TcCourses]
    }

    //丟回到外面
    return newTcCourses
  }

  useEffect(() => {
    let newTcCourses = []

    newTcCourses = handleSearch(TcCourses, searchWord)

    setDisplayCourse(newTcCourses)
  }, [searchWord, TcCourses])


  useEffect(() => {
    ;(async () => {
      const r = await axios.get(
        `${Art_Article_POP_LIST}`
        //        `${Art_LIST}``
        // 'http://localhost:3001/api/art_list'
      )
      if (r.status === 200) {
        setTcCourses(r.data.rows)
        setDisplayCourse(r.data.rows)
        // setImgSrc(r.data.rows[0].artical_image)

        console.log('r.data.rows', r.data.rows)
        // setImgSrc(r.data.rows[0].avatar)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    })()
  }, [])


  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="sh-pageName   mx-auto">
            <div className="sh-search ml-0  ">
              <TcSearchBar
                placeholder="請輸入想搜尋的文章名稱"
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
              {/* <input
                type="text"
                className="sh-searchbar"
                placeholder="請輸入想搜尋的課程名稱"
                onkeyup="coursename()"
                 type="text"
              />
              <button type="submit" className="">
                <i className="fas fa-search"></i>
              </button> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div
            className={
              isLoading
                ? 'courseSpinner'
                : 'courseSpinner d-none'
            }
          >
            <Spinner />
          </div>
          <div
            className={
              isLoading
              ? 'coursesection col-md-10 col-lg-10 opacity0-CourseSection art-CsCourseMH'
                : 'coursesection col-md-10 col-lg-10 opacity1-CourseSection art-CsCourseMH'
            }
          >
            {TcCourses.length > 0 ? (
              <ArticleList
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
                // setImgSrc={
                //   setImgSrc
                // }
                // RemoveCourse={RemoveCourse}
                // setRemoveCourse={setRemoveCourse}
              />
            ) : null}
          </div>
          {/* <div className="coursesection   col-md-10 col-lg-10">
            {TcCourses.length > 0 ? (
              <ArticleList
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
                // setImgSrc={
                //   setImgSrc
                // }
                // RemoveCourse={RemoveCourse}
                // setRemoveCourse={setRemoveCourse}
              />
            ) : null}
          </div> */}
        </div>
      </div>
      {isLoading ? null : (
        <div className="TCallwrapera-sing-out">
          <div className="TCallwraperw-out">
            <div className="TCallwraperw-white-block">
              <div className="col-12">
                <div className="post-sidebar-area">
                  <div className="TCallwraperw-out-sidebar-widget-area">
                    <h5 className="title">Advertisement</h5>
                    <a href="#">
                      <img
                        src={`${devUrl}/images/article/out/add.gif`}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="TCallwraperw-out-sidebar-widget-area">
                  <h5 className="title">Latest Posts</h5>

                  <div className="widget-content">
                    <div className="single-blog-post d-flex align-items-center widget-post">
                      <div className="post-thumbnail">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=101`}
                        >
                          <img
                            src={`${devUrl}/images/index/06.png`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=101`}
                          className="post-tag"
                        >
                          #熱門影集
                        </Link>
                        <h4>
                          <Link
                            to={`/ArtIndex/ArticleMessage?articleSid=101`}
                            className="post-headline"
                          >
                            后翼棄兵
                          </Link>
                        </h4>
                        <div className="post-meta">
                          <p>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=101`}
                            >
                              13 November
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="single-blog-post d-flex align-items-center widget-post">
                      <div className="post-thumbnail">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=96`}
                        >
                          <img
                            src={`${devUrl}/images/index/07.png`}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=96`}
                          className="post-tag"
                        >
                          #異國節慶
                        </Link>

                        <h4>
                          <Link
                            to={`/ArtIndex/ArticleMessage?articleSid=96`}
                            className="post-headline"
                          >
                            燃燒自我的限時烏托邦
                          </Link>
                        </h4>
                        <div className="post-meta">
                          <p>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=96`}
                            >
                              13 November
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="single-blog-post d-flex align-items-center widget-post">
                      <div className="post-thumbnail">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=103`}
                        >
                          <img
                            src={`${devUrl}/images/index/08.png`}
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="post-content">
                        <Link
                          to={`/ArtIndex/ArticleMessage?articleSid=103`}
                          lass="post-tag"
                        >
                          #熱門影集
                        </Link>

                        <h4>
                          <Link
                            to={`/ArtIndex/ArticleMessage?articleSid=103`}
                            className="post-headline"
                          >
                            黑道律師文森佐
                          </Link>
                        </h4>
                        <div className="post-meta">
                          <p>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=103`}
                            >
                              13 November
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading ? null : (
        <div className="TCallwrapera-sing">
          <div className="TCallwraperw">
            <div className="white-block">
              <div className="yellow-area-but-1 ">
                熱門文章
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading ? null : (
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
      )}
      <ArBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default Article
