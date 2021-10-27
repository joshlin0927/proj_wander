import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'

// 後端檔案路徑
import { TcCourse_LIST } from '../../config'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import TcSideBar from '../../components/tc/TcSideBar'
import TcSearchBar from '../../components/tc/TcSearchBar'
import TcCourseCard from '../../components/tc/TcCourseCard'
import TcChart from '../../components/tc/TcChart'
import MyPagination from '../../components/MyPagination'
import TcBgDecorationNormal from '../../components/tc/TcBgDecorationNormal'
import Footer from '../../components/Footer'

function TcAnalytic() {
  //判斷是否登入並為教師身分
  const history = useHistory()
  const token = localStorage.getItem('token')
  const member = localStorage.getItem('member')
  const identity = JSON.parse(member).identity
  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 1) {
      history.push('/')
    } else {
      return
    }
  }, [])

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 課程陣列排出
  let [data, setData] = useState({})
  let [totalRows, setTotalRows] = useState(0)

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(TcCourse_LIST)
      console.log(r)
      if (r.status === 200) {
        setTotalRows(r.data.totalRows)
        setData(r.data)
      }
    })()
  }, [])
  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <div className="col-10 ml-auto pageName">
            <span className="pageNameText TCanalytics">
              Analytics
            </span>
          </div>
        </div>
        <div className="row">
          <TcSideBar />
          {/* form */}
          <form className="TCform col-12 col-md-10 px-4">
            <div className="TCform-head ml-1 p-0">
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title mr-auto">
                數據分析
              </div>
              <Link to="">
                <i className="fas fa-chevron-left TCback-btn opacity-0"></i>
              </Link>
              {/* desktop search bar */}
              <div className="TCsearch ml-0">
                <TcSearchBar placeholder="請輸入課程名稱" />
              </div>
            </div>
            {/* mobile search bar */}
            <div className="TCsearch-mobile">
              <TcSearchBar placeholder="請輸入課程名稱" />
            </div>
            {/* chart */}
            <div className="mb-5">
              <TcChart />
            </div>
            {/* TCcourse card label */}
            <div className="TCcourseLabel col-12">
              <div className="Labelitem">課程封面</div>
              <div className="Labelitem">課程名稱</div>
              <div className="TCcourseLabel-right">
                <div className="Labelitem">上架日期</div>
                <div className="Labelitem">觀看次數</div>
                <div className="TCcourse-delete">
                  <i className="far fa-times-circle opacity-0"></i>
                </div>
              </div>
            </div>
            {/* course cards */}
            <TcCourseCard />
            <MyPagination />
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />
      <Footer />
    </>
  )
}

export default TcAnalytic
