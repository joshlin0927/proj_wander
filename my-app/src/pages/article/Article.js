import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import { useHistory } from 'react-router'
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
import MyPagination from '../../components/MyPagination'

function Article(props) {
  //判斷是否登入並為教師身分
  // const history = useHistory()
  // const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  // const identity = JSON.parse(member).identity
  //  const teacherSid = JSON.parse(member).sid

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 資料庫來的課程資料
  const [TcCourses, setTcCourses] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayCourse, setDisplayCourse] = useState([])

  // 取得頭圖
  const [imgSrc, setImgSrc] = useState('')

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

  // // }
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
    })()
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
              {/* <input
                type="text"
                className="sh-searchbar"
                placeholder="請輸入想搜尋的課程名稱"
                onkeyup="coursename()"
                 type="text"
              />
              <button type="submit" className="">
                <i class="fas fa-search"></i>
              </button> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="coursesection col-md-10 col-lg-10">
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
            {/* <MyPagination /> */}

            {/* <div class="articleitem">
              <img
                src="../images/article/01-1.jpg"
                alt=""
              />
              <a href="">
                <div class="coursename">
                  柏捷頓家族名門韻事
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem">
              <img src="../images/article/02.jpeg" alt="" />
              <a href="">
                <div class="coursename ">紐約新醫革命</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem">
              <img src="../images/article/03.jpeg" alt="" />
              <a href="">
                <div class="coursename ">誰殺了莎拉？</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem">
              <img src="../images/article/04.jpeg" alt="" />
              <a href="">
                <div class="coursename ">亞森羅蘋</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/05.jpeg" alt="" />
              <a href="">
                <div class="coursename">亞森羅蘋</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/06.jpg" alt="" />
              <a href="">
                <div class="coursename">黑道律師文森佐</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/21.jpg" alt="" />
              <a href="">
                <div class="coursename">
                  藏著「上頭」不願被人記得的事
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/22.jpg" alt="" />
              <a href="">
                <div class="coursename">
                  英文二十六個字母的起源
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/26.jpg" alt="" />
              <a href="">
                <div class="coursename">
                  為失語者開啟一扇溝通的窗
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem ">
              <img src="../images/article/23.jpg" alt="" />
              <a href="">
                <div class="coursename">
                  外來語所組成的語言
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem img-fluid ">
              <img src="../images/article/24.jpeg" alt="" />
              <a href="">
                <div class="coursename">
                  職場中的專業精神、善意
                </div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div>
            <div class="articleitem img-fluid ">
              <img src="../images/article/25.jpeg" alt="" />
              <a href="">
                <div class="coursename">寬容的公司文化</div>
              </a>
              <span class="teachername">#熱門文章</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="TCallwrapera-sing">
        <div className="Article-TCallwraperw ">
        <div className="row col-4 offset-8 p-0">
          <div className="col-10 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/01.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/02.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/03.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/04.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/05.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/06.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/07.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/08.png`}
                alt=""
              />
            </Link>
          </div>
        </div>

        </div>
      </div> */}

      {/* <div className="TCallwraperb">
        <div className="row col-4 offset-8 p-0">
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/01.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/02.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/03.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/04.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/05.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/06.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="col-11 offset-0 p-0 ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/07.png`}
                alt=""
              />
            </Link>

            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/s/08.png`}
                alt=""
              />
            </Link>
          </div>
        </div>
        </div> */}

      {/* <div className="row col-12 offset-0 p-0">

        <div className="artar-coursesectiona col-4  col-md-2 offset-md-9">
          <div className="ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/01-1.jpg`}
                alt=""
              />
            </Link>
          </div>

          <div className="ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/02.jpeg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/03.jpeg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/04.jpeg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/05.jpeg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/06.jpg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/21.jpg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/22.jpg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/26.jpg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/23.jpg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture img-fluid ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/24.jpeg`}
                alt=""
              />
            </Link>
          </div>
          <div className="ar-artpicture img-fluid ">
            <Link to={`#`}>
              <img
                src={`${devUrl}/images/article/25.jpeg`}
                alt=""
              />
            </Link>
          </div>
        </div>
        </div> */}

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
