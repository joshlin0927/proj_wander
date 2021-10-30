import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TcVideo_LIST } from '../../../config'

// components
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import TcCourseProcessBar from '../../../components/tc/TcCourseProcessBar'
import TcHasNoCourse from '../../../components/tc/TcHasNoCourse'
import TcSearchBar from '../../../components/tc/TcSearchBar'
import TcVideoCard from '../../../components/tc/TcVideoCard'
import TcVideoList from '../../../components/tc/TcVideoList'
import MyPagination from '../../../components/MyPagination'
import TcBgDecorationThreeSteps from '../../../components/tc/TcBgDecorationThreeSteps'
import Footer from '../../../components/Footer'

function TcCourseVideoEdit() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  const courseSid = localStorage.getItem(
    'CourseSidForProcess'
  )

  // 資料庫來的影片資料
  const [TcVideos, setTcVideos] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayVideo, setDisplayVideo] = useState([])

  // 從後端獲取的所有資料資料，包括sql用叫出的totalRows
  const [RemoveVideo, setRemoveVideo] = useState()

  // 修改後的狀態紀錄
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `${TcVideo_LIST}?courseSid=${courseSid}`
        )
        if (r.status === 200) {
          setTcVideos(r.data.rows)
          setDisplayVideo(r.data.rows)
        }
      })()
    }
  }, [RemoveVideo, status])

  //搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 將搜尋吧的字串與得到的資料帶入函式
  const handleSearch = (TcVideos, searchWord) => {
    let newTcVideos = []

    if (searchWord) {
      newTcVideos = TcVideos.filter((TcVideo) => {
        // includes -> String API
        return TcVideo.video_name.includes(searchWord)
      })
    } else {
      // 淺層拷貝
      newTcVideos = [...TcVideos]
    }

    //丟回到外面
    return newTcVideos
  }

  useEffect(() => {
    let newTcVideos = []

    newTcVideos = handleSearch(TcVideos, searchWord)

    setDisplayVideo(newTcVideos)
  }, [searchWord, TcVideos])

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center">
          {/* TCcourse-TCcourse-process bar */}
          <TcCourseProcessBar />
          <form className="TCform col-12 col-md-10 px-4">
            <div className="TCform-head ml-1 p-0">
              <Link to="/TCindex/TcCourseVideoUpload">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                課程內容管理
              </div>
              {/* desktop search bar */}
              <div className="TCsearch ml-0">
                <TcSearchBar
                  placeholder="請輸入影片名稱"
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
              </div>
              <div className="d-flex justify-content-end">
                <div className="TCback-btn mr-4"></div>
              </div>
            </div>
            {/* mobile search bar */}
            <div className="TCsearch-mobile">
              <TcSearchBar
                placeholder="請輸入影片名稱"
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
            {/* TCcourse card label */}
            <div className="TCcourseLabel col-12 mb-3">
              <div className="Labelitem">影片截圖</div>
              <div className="Labelitem">影片名稱</div>
              <div className="TCcourseLabel-right">
                <div className="Labelitem">上傳日期</div>
                <div className="Labelitem">影片長度</div>
              </div>
            </div>
            {/* course cards */}
            {TcVideos.length > 0 ? (
              <TcVideoList
                Videos={displayVideo}
                RemoveVideo={RemoveVideo}
                setRemoveVideo={setRemoveVideo}
                status={status}
                setStatus={setStatus}
              />
            ) : (
              <TcHasNoCourse text={'目前沒有任何影片'} />
            )}
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationThreeSteps />
      <Footer />
    </>
  )
}

export default withRouter(TcCourseVideoEdit)
