import React, { useEffect, useState, useRef } from 'react'
import { Nav, Modal } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router'

import {
  IMG_PATH,
  MemberEdit,
  ApplyForm,
} from '../../config'

// 引用元件
import ChatList from '../chatroom/ChatList'
import ChatWindow from '../chatroom/ChatWindow'
import ConfirmMsg from '../ConfirmMsg'

function TcSideBar(props) {
  const { imgSrc } = props

  const history = useHistory()

  // 聊天室開關
  let [chat, setChat] = useState('d-none')

  console.log('chat', chat)

  //設定確認表單送出訊息框的狀態
  const [showUp, setShowUp] = useState('')

  const memberObj = JSON.parse(
    localStorage.getItem('member')
  )
    ? JSON.parse(localStorage.getItem('member'))
    : ''

  // 辨別會員的申請狀態
  const [verify, setVerify] = useState('')

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${MemberEdit}/?teacherSid=${memberObj.sid}`
      )
      memberObj
        ? setVerify(r.data[0].verification)
        : history.push('/')
    })()
  }, [showUp])
  const [isActive, setIsActive] = useState('')

  // 申請表
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // 通知
  const [NoticeShow, setNoticeShow] = useState(false)
  const handleNoticeShow = () => {
    setNoticeShow(true)
    handleClose()
  }

  useEffect(() => {
    if (verify === 0) {
      handleShow()
    } else if (verify === 1) {
      handleNoticeShow()
      setTimeout(() => {
        history.push('/')
      }, 5000)
    }
  })

  const formRef = useRef(null)
  // 使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    language: '',
    resume: '',
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    language: '',
    resume: '',
  })

  // 專門用來處理每個欄位的輸入用
  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件拷貝新物件
    // 2. 在拷貝的新物件上處理
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }
    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

  // 在 表單完成驗証 之後，才會觸發
  const FormSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const TcFormData = new FormData(e.target)
    console.log(TcFormData.get('language'))
    console.log(TcFormData.get('resume'))

    // 利用狀態來得到輸入的值

    // ex. 用fetch api/axios送到伺服器
    // const r =
    fetch(`${ApplyForm}/?teacherSid=${memberObj.sid}`, {
      method: 'POST',
      body: TcFormData,
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(JSON.stringify(obj, null, 4))
        if (obj.success) {
          setShowUp('showup')
          setTimeout(() => {
            setShowUp('none')
          }, 1000)
          handleClose()
        } else {
          alert(obj.error || '資料送出失敗')
        }
      })
    // console.log(r)
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const FormChange = (e) => {
    // console.log('更動欄位：', e.target.name)

    // 該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  // 有錯誤的訊息會觸發在這裡
  const FormInvalid = (e) => {
    e.preventDefault()

    // 表單實體的物件參照
    const form = formRef.current

    let errorMsg = {}

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i]

      if (
        element.tagName !== 'button' &&
        element.willValidate &&
        !element.validity.valid
      ) {
        // 必填用預設訊息，但錯誤格式驗証用title中的字串
        if (element.validity.valueMissing) {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.validationMessage,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <Nav className="TCsidebar col-2">
        <div className="avatar">
          <img
            src={
              imgSrc
                ? `${IMG_PATH}/${imgSrc}`
                : `${IMG_PATH}/presetAvatar.jpeg`
            }
            alt=""
            className="img-fluid"
          />
        </div>
        <ul className="nav-list">
          <li>
            <Nav.Link
              as={NavLink}
              to="/TcIndex/TcProfile"
              className="nav-item"
              activeclassname="active"
              onClick={() => {
                setIsActive('個人資料')
              }}
            >
              <i className="fas fa-user"></i>
              <div className="nav-item-text">個人資料</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TcIndex/TcPassword"
              className="nav-item"
              activeclassname="active"
              onClick={() => {
                setIsActive('密碼更改')
              }}
            >
              <i className="fas fa-key"></i>
              <div className="nav-item-text">密碼更改</div>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TcIndex/TcCourse"
              className="nav-item"
              activeclassname="active"
              onClick={() => {
                setIsActive('課程列表')
              }}
            >
              <i className="fas fa-th-list"></i>
              <div className="nav-item-text">課程列表</div>
            </Nav.Link>
          </li>
          <li>
            <div
              className={
                isActive === '聊天室'
                  ? 'nav-item active'
                  : 'nav-item'
              }
              activeclassname="active"
              onClick={() => {
                setIsActive('聊天室')
                setChat('d-block')
              }}
            >
              <i className="fas fa-comment-alt"></i>
              <div className="nav-item-text">聊天室</div>
            </div>
          </li>
          <li>
            <Nav.Link
              as={NavLink}
              to="/TcIndex/TcAnalytic"
              className="nav-item"
              activeclassname="active"
              onClick={() => {
                setIsActive('數據分析')
              }}
            >
              <i className="fas fa-chart-line"></i>
              <div className="nav-item-text">數據分析</div>
            </Nav.Link>
          </li>
        </ul>
      </Nav>
      <div className="row position-absolute w-100">
        <ChatList setChat={setChat} chat={chat} />
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <form
          name="applyForm"
          className="p-4"
          ref={formRef}
          onSubmit={FormSubmit}
          onChange={FormChange}
          onInvalid={FormInvalid}
        >
          <ConfirmMsg showUp={showUp} text={'資料已送出'} />
          <div className="TCform-content w-100">
            <div className="TCform-head ml-1">
              <Link to="/">
                <i className="fas fa-chevron-left TCback-btn"></i>
              </Link>
              <div className="TCform-title">審核資料</div>
              <i className="TCback-btn"></i>
            </div>
            <input
              name="verification"
              className="d-none"
              defaultValue="1"
            />
            <input
              name="language"
              type="text"
              className="col-12 allInputs"
              placeholder="請輸入擅長的語言"
              title="請填寫至少一種語言"
              value={fields.language}
              onChange={handleFieldChange}
              required
              minLength="2"
            />
            {fieldErrors.language === '' ? (
              <label className="TCnotice" htmlFor="">
                &nbsp;
              </label>
            ) : (
              <label className="TCnotice" htmlFor="">
                {fieldErrors.language}
              </label>
            )}
            <div
              className="resume"
              onClick={() => {
                document
                  .querySelector('#realFileInput')
                  .click()
              }}
            >
              <input
                disabled
                id="fakeFileInput"
                className="col-12 allInputs"
                placeholder="請選擇要上傳的履歷"
                value={fields.resume.slice(12)}
              />
              <input
                type="file"
                accept="application/pdf"
                id="realFileInput"
                name="resume"
                className="d-none"
                required
                value={fields.resume}
                onChange={handleFieldChange}
              />
              <input
                name="sid"
                defaultValue={memberObj.sid}
                className="d-none"
              />
              <label id="browsing" className="btn browse">
                <span>瀏覽</span>
              </label>
            </div>
            {fieldErrors.resume === '' ? (
              <label className="TCnotice" htmlFor="">
                &nbsp;
              </label>
            ) : (
              <label className="TCnotice" htmlFor="">
                {fieldErrors.resume}
              </label>
            )}
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-secondary mx-auto one-btn"
            >
              <span>送出申請</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-auto one-btn"
              onClick={() => {
                history.push('/')
              }}
            >
              <span>返回首頁</span>
            </button>
          </div>
        </form>
      </Modal>
      <Modal show={NoticeShow} centered>
        <div className="p-5 text-center">
          <div className="TCnotify-text">
            <span>
              資料審核中，大約會在一至三天內通知審核結果，請耐心等待
            </span>
          </div>
          <small className="systemCall">
            <span>系統將在五秒後將您移至首頁</span>
          </small>
        </div>
      </Modal>
    </>
  )
}

export default TcSideBar
