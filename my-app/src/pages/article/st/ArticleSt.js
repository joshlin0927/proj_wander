import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

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

function Article(prop) {
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
                placeholder="請輸入想搜尋的課程名稱"
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="coursesection col-md-10 col-lg-10">
            {TcCourses.length > 0 ? (
              <ArticleListSt
                displayCourse={displayCourse}
                setDisplayCourse={setDisplayCourse}
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="TCallwrapera-sing">
        <div className="TCallwraperw">
          <div className="white-block">
            <div className="yellow-area-but-1 ">
              國際角落
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

export default Article
