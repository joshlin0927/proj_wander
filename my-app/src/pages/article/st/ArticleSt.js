import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

// 後端檔案路徑
import {
  devUrl,
  Art_Article_inter_LIST,
} from '../../../config'

// components
import TcSearchBar from '../TcSearchBar'

import ArticleListSt from './ArticleListSt'

import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import ArBgDecorationNormal from '../../../components/articles/ArBgDecorationNormal'
import Footer from '../../../components/Footer'
import Spinner from '../../../components/Spinner'


function Article(prop) {

  // spinner
  const [isLoading, setIsLoading] = useState(true)

  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const teacherSid = JSON.parse(member).sid

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 資料庫來的課程資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 取得頭圖
  // const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          // `${ArtMessage_LIST}`
          `${Art_Article_inter_LIST}?Sid=${teacherSid}`
        )

        if (r.status === 200) {
          setTcCourses(r.data.rows)
          setDisplayCourse(r.data.rows)
          console.log('r.data.rows', r.data.rows)
        }
      })()
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

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
              <ArticleListSt
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
              />
            ) : null}
          </div>
          {/* <div className="coursesection col-md-10 col-lg-10">
            {TcCourses.length > 0 ? (
              <ArticleListSt
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
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
                              to={`/ArtIndex/ArtMessage?articleSid=101`}
                            >
                        <img
                        src={`${devUrl}/images/index/12.png`}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link  to={`/ArtIndex/ArtMessage?articleSid=101`} className="post-tag">
                        #熱門影集
                      </Link>
                      <h4>
                        <Link
                           to={`/ArtIndex/ArtMessage?articleSid=101`}
                          className="post-headline"
                        >
                          太陽召喚
                        </Link>
                      </h4>
                      <div className="post-meta">
                        <p>
                          <Link  to={`/ArtIndex/ArtMessage?articleSid=101`}>19 November</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-blog-post d-flex align-items-center widget-post">
                    <div className="post-thumbnail">
                    <Link
                              to={`/ArtIndex/ArtMessage?articleSid=96`}
                            >
                        <img
                        src={`${devUrl}/images/index/13.png`}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link to={`/ArtIndex/ArtMessage?articleSid=96`} className="post-tag">
                        #異國節慶
                      </Link>

                      <h4>
                        <Link
                          to={`/ArtIndex/ArtMessage?articleSid=96`}
                          className="post-headline"
                        >
                          不朽者
                        </Link>
                      </h4>
                      <div className="post-meta">
                        <p>
                          <Link to={`/ArtIndex/ArtMessage?articleSid=96`}>19 November</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-blog-post d-flex align-items-center widget-post">
                    <div className="post-thumbnail">
                    <Link
                              to={`/ArtIndex/ArtMessage?articleSid=99`}
                            >
                        <img
                        src={`${devUrl}/images/index/14.png`}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="post-content">
                      <Link to={`/ArtIndex/ArtMessage?articleSid=99`} className="post-tag">
                        #熱門影集
                      </Link>

                      <h4>
                        <Link
                          to={`/ArtIndex/ArtMessage?articleSid=99`}
                          className="post-headline"
                        >
                         末日列車
                        </Link>
                      </h4>
                      <div className="post-meta">
                        <p>
                          <Link to={`/ArtIndex/ArtMessage?articleSid=99`}>19 November</Link>
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
              國際角落
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
