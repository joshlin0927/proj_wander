import React, { useState, useEffect } from 'react'
import { SentenceGame_LIST } from '../../config'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import './style/st_selectlanguage.css'
// import { Link } from 'react-router-dom'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'

export default withRouter(function StSelectLanguage(props) {
  const [selectedOption1, setSelectedOption1] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')
  const [dataArr, setDataArr] = useState([])
  const [stopModalShow, setStopModalShow] = useState(false)
  const handleStopModalClose = () => setStopModalShow(false)
  const handleStopModalShow = () => setStopModalShow(true)

  useEffect(() => {
    let lang = selectedOption1
    let easi = selectedOption2
    sessionStorage.removeItem('category')
    sessionStorage.removeItem('array')
    sessionStorage.removeItem('gameresult')
    ;(async () => {
      let r = await axios.get(
        `${SentenceGame_LIST}?language=${lang}&easiness=${easi}`
      )
      console.log('lang/easi:', lang, '/', easi)
      console.log('rows:', r.data.rows)
      if (r.data.success) {
        setDataArr(r.data.rows)
        sessionStorage.setItem(
          'category',
          JSON.stringify({ lang: lang, easi: easi })
        )
      }
    })()
  }, [selectedOption1, selectedOption2])
  return (
    <>
      <div className="mainContent mhhundred">
        <div className="container ">
          <MultiLevelBreadCrumb />

          <div className="row flex-column">
            <div>
              <select
                className=" mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
                value={selectedOption1}
                onChange={(e) => {
                  setSelectedOption1(e.target.value)
                }}
              >
                <option value="">選擇語言</option>
                <option value="en-US"> 英文 </option>
                <option value="ja-JP"> 日文 </option>
              </select>
            </div>

            <br />

            <div>
              <select
                className="mylanguage col-4 col-md-3 col-lg-2 offset-7 offset-md-9 offset-lg-10"
                value={selectedOption2}
                onChange={(e) => {
                  setSelectedOption2(e.target.value)
                }}
              >
                <option value="">難易度</option>
                <option value="1"> 簡單 </option>
                <option value="2"> 中等 </option>
                <option value="3"> 困難 </option>
              </select>
            </div>

            <div
              className="nextpage  offset-6 offset-md-8 offset-lg-10"
              onClick={() => {
                console.log(dataArr)
                if (dataArr.length === 0) {
                  handleStopModalShow()
                } else {
                  const newArr = [...dataArr]
                  sessionStorage.setItem(
                    'array',
                    JSON.stringify(newArr)
                  )
                  props.history.push('/StIndex/StGameStart')
                }
              }}
            >
              下一步
            </div>
          </div>
        </div>
      </div>

      <div className="dec-side col-md-6 col-lg-6">
        <div className="dec-insideblock col-md-9 col-lg-8"></div>
      </div>
      <div className="bgbeige"></div>
      <Modal
        show={stopModalShow}
        onHide={handleStopModalClose}
        id="alertModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>請先選擇語言或難度</span>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleStopModalClose}
          >
            確認
          </button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  )
})
