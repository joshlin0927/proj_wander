import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { Member_LIST } from '../config'

import MyPdf from '../components/MyPdf'
import MemberList from '../components/tc/MemberList'
import ConfirmMsg from '../components/ConfirmMsg'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'
import TcSearchBar from '../components/tc/TcSearchBar'
import TcBgDecorationNormal from '../components/tc/TcBgDecorationNormal'
import { withRouter } from 'react-router'

function CompanyBackend() {
  // const token = localStorage.getItem('token')
  // const memberObj = JSON.parse(
  //   localStorage.getItem('member')
  // )
  //   ? JSON.parse(localStorage.getItem('member'))
  //   : ''

  // 更改會員狀態
  const [selectedOption, setSelectedOption] = useState('')

  // 成功修改的提示
  const [showUp, setShowUp] = useState('')

  // 會員sid
  const [memberSid, setMemberSid] = useState('')

  // 取得的會員資料
  const [data, setData] = useState([])

  // 拿去做map排列的，取的是r.data.rows，或是其它處理
  const [displayData, setDisplayData] = useState([])

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(Member_LIST)

      if (r.status === 200) {
        setData(r.data.rows)
        setDisplayData(r.data.rows)
      }
    })()
  }, [])

  //修改會員狀態
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)

  // 搜尋列
  const [searchWord, setSearchWord] = useState('')

  // 將搜尋吧的字串與得到的資料帶入函式
  const handleSearch = (data, searchWord) => {
    let newData = []
    if (searchWord) {
      newData = data.filter((member) => {
        // includes -> String API
        return member.firstname.includes(searchWord)
      })
    } else {
      // 淺層拷貝
      newData = [...data]
    }
    //丟回到外面
    return newData
  }

  useEffect(() => {
    let newData = []

    newData = handleSearch(data, searchWord)

    setDisplayData(newData)
  }, [searchWord, data])

  //查看履歷
  const [resumeShow, setResumeShow] = useState(false)
  const [resumeName, setResumeName] = useState('')
  const handleResumeClose = () => setResumeShow(false)
  const handleResumeShow = () => {
    setResumeShow(true)
  }

  return (
    <>
      <div className="container mainContent">
        <div className="row">
          <MultiLevelBreadCrumb />
          <ConfirmMsg showUp={showUp} />
          {/* content */}
          <form className="col-12">
            <div className="TCform-head ml-1 p-0">
              <i className=" TCback-btn"></i>
              <div className="TCform-title mr-auto">
                教師會員管理
              </div>
              {/* desktop search bar */}
              <div className="col-6 d-flex">
                <TcSearchBar
                  placeholder="請輸入姓名"
                  searchWord={searchWord}
                  setSearchWord={setSearchWord}
                />
              </div>
            </div>

            <div className="table-responsive company-table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">標號</th>
                    <th scope="col">姓氏</th>
                    <th scope="col">名字</th>
                    <th scope="col">擅長語言</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">履歷</th>
                    <th scope="col">審核資格</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <MemberList
                      data={displayData}
                      setData={setData}
                      isShow={isShow}
                      setShowUp={setShowUp}
                      handleIsShow={handleIsShow}
                      handleIsClose={handleIsClose}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      handleResumeShow={handleResumeShow}
                      setMemberSid={setMemberSid}
                      setResumeName={setResumeName}
                    />
                  ) : (
                    <tr>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* <MyPagination /> */}
          </form>
        </div>
      </div>
      <TcBgDecorationNormal />

      <Modal
        size="lg"
        show={resumeShow}
        onHide={handleResumeClose}
        centered
      >
        <Modal.Header>
          <Modal.Title>履歷表</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyPdf resumeName={resumeName} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default withRouter(CompanyBackend)
