import '../st/style/signUp.css'
import React, { useState, useRef, useEffect } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router'
import ArBgDecorationNormal from '../../components/articles/ArBgDecorationNormal'
import { IMG_PATH } from '../../config'
import { CsCourse_EDIT } from '../../config'
import { withRouter } from 'react-router'

// components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function CsMessageADD(props) {
  //  const [searchWord, setSearchWord] = useState('')

  const member = localStorage.getItem('member')

  const memberObj = JSON.parse(member)
  const token = localStorage.getItem('token')
  const studentSid = JSON.parse(member).sid
  const identity = JSON.parse(member).identity
  // const [show, setShow] = useState(false)
  // const token = localStorage.getItem('token')
  // const member = localStorage.getItem('member')

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  //判斷是否登入並為教師身分
  const history = useHistory()

  //大頭貼狀態
  let [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    if (!token) {
      history.push('/')
    } else if (identity !== 0) {
      history.push('/')
    } else {
      ;(async () => {
        let r = await axios.get(
          `http://localhost:3001/stprofile/list?studentSid=${studentSid}`
        )
        // setFields(r.data[0][0])
        if (r.status === 200) {
          setImgSrc(r.data[0][0].avatar)
        }
      })()
    }
  }, [imgSrc])

  useEffect(() => {
    // if (!token) {
    //   history.push('/')
    // } else if (identity !== 1) {
    //   history.push('/')
    // } else {
    ;(async () => {
      let r = await axios.get(
        CsCourse_EDIT + props.location.search
      )
      setFields(r.data[0])
      setImgSrc(r.data[0].course_img)
      localStorage.setItem(
        'CourseSidForProcess',
        r.data[0].sid
      )
      console.log('edit', r.data[0])
    })()
    // }
  }, [])
  // useEffect(() => {
  //   // if (!token) {
  //   //   history.push('/')
  //   // } else if (identity !== 0) {
  //   //   history.push('/')
  //   // } else {
  //   ;(async () => {
  //     let r = await axios.get(
  //       CsCourse_EDIT + props.location.search
  //     )
  //     setFields(r.data[0])
  //     setImgSrc(r.data[0].course_img)
  //     localStorage.setItem(
  //       'CourseSidForProcess',
  //       r.data[0].sid
  //     )
  //     console.log('edit', r.data[0])
  //   })()
  //   // }
  // },[imgSrc])

  // console.log('imgSrc', imgSrc)

  // 為什麼沒有寫[]就會無限fetch，ANS: []與useEffect有相依性，當[]內設定的東西被改變時，useEffect會執行裡面的程式並將值設定回去，，進而render頁面，沒有加[]的話就不會有這個限制，所以會不斷的render頁面

  // const memberObj = JSON.parse(member)

  // const [asTeacherOrStudent, setasTeacherOrStudent] =
  //   useState(3)

  // const [asTeacherOrStudent, setasTeacherOrStudent] =
  // useState(3)

  //將所有欄位的值以物件形式存在一個狀態
  const [fields, setFields] = useState({
    st_sid: '',
    cs_sid: '',
    nickname: '',
    st_pictuer: '',
    messenger: '',
    score: '',
    great: '',
    teacher_sid: '',
    course_name: '',
    course_category: '',
    course_price: '',
    course_introduction: '',
  })

  const [fieldsErrors, setFieldsErrors] = useState({
    messenger: '',
    score: '',
  })

  //將使用者在欄位輸入的值進行更新
  const handleFieldChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let newValue = value
    const updatedFields = {
      ...fields,
      [name]: newValue,
    }
    setFields(updatedFields)
  }

  //使用者輸入表單時錯誤訊息會自動更新
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldsErrors(updatedFieldErrors)
  }

  //表單的ref
  const formRef = useRef(null)
  //自訂欄位檢查訊息提示
  const handleFormInvalid = (e) => {
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
            [element.name]: element.title,
          }
        }
      }
    }
    const updatedFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldsErrors(updatedFieldErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //阻止表單預設送出行為

    // const fd = new FormData(e.target)
    // console.log(fd.get('lastname'))
    // 測試有得到表單欄位的輸入值
    // if (account) {
    //   for (let i of account.data.rows) {
    //     if (i.email === fields.email) {
    //       alert('帳號重複了')
    //       return
    //     }
    //   }
    // }

    // if (asTeacherOrStudent === 3) {
    //   alert('請選擇註冊身份')
    //   return
    // }
    // 用axios把表單送出
    if (
      // fields.lastname !== '' &&
      // fields.firstname !== '' &&
      // fields.email !== '' &&
      fields.messenger !== ''
    ) {
      axios
        .post('http://localhost:3001/cs_messengerADD', {
          st_sid: memberObj.sid,
          cs_sid: fields.cs_sid,
          // nickname: fields.nickname,
          nickname: memberObj.nickname,
          st_pictuer: imgSrc,
          // st_pictuer: memberObj.identity,
          messenger: fields.messenger,
          score: fields.score,
          great: fields.great,
          // identity: asTeacherOrStudent,
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.success === true) {
            alert('留言成功')
            history.push(
              `/Course/CsCoursedesOpen/?courseSid=${fields.sid}`
            )
          } else {
            alert('留言失敗')
            return
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  //  // 資料庫來的留言資料
  //  const [TcCourses, setTcCourses] = useState([])

  return (
    <>
      <div className="container mainContent">
        {/* breadcrumb */}
        <MultiLevelBreadCrumb />
        <Nav.Link
          as={NavLink}
          to={`/Course/CsCoursedesOpen/?courseSid=${fields.sid}`}
          className="btn btn-border-only-no-h col-2"
        >
          <i className="fas fa-chevron-left"></i>
          <span>返回</span>
        </Nav.Link>
        <div className="row justify-content-center col-12">
          <div className="art-p-page-info col-12 col-md-8">
            {/* <div className="art-type-sin">#熱門影集</div> */}
            <br />
            <div className="art-title-sin mx-auto">
              Comment
            </div>
            <br />
            <br />
            <br />
            {/* <div className="TCp-intro-sin">
              <p>
                此劇講述因組織內部糾紛而從義大利逃到韓國的黑手黨顧問文森佐·卡薩諾（宋仲基飾），在遇上律師洪車瑛（全汝彬飾）後，兩人以黑道的方式實現正義的故事。
              </p>
            </div>
            <br /> */}
            {/* <div className="p-page-avatar-sin">
              <img
                src={`${devUrl}/images/article/熱門文章/06.jpg`}
                alt=""
                className="img-fluid-sin"
              />
            </div> */}
            <form
              className="ar-TCform "
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
            >
              <div className="p-page-avatar-sin">
                <div className="ar-TCform-content one-btn-sin ">
                  <div className="ar-ar-all">
                    <div className="d-flex align-items-center col-12">
                      <div className="TCcourse-img-sing">
                        <img
                          src={
                            imgSrc
                              ? IMG_PATH + '/' + imgSrc
                              : IMG_PATH +
                                '/' +
                                'presetAvatar.jpeg'
                          }
                          className="img-fluid"
                          alt=""
                          name="st_pictuer"
                        />
                      </div>
                      <input
                        type="text"
                        className="Stbtn "
                        placeholder="暱稱"
                        name="nickname"
                        value={memberObj.nickname}
                        onChange={handleFieldChange}
                        disabled
                      ></input>
                    </div>
                  </div>
                  <select
                    type="text"
                    className="col-12 allInputs"
                    placeholder="評分1~5"
                    name="score"
                    value={fields.score}
                    onChange={handleFieldChange}
                    title="請選擇課程種類"
                    required
                  >
                    <option value="" disabled>
                      請評分1~5星
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {fieldsErrors.score === '' ? (
                    <label className="TCnotice" htmlFor="">
                      &nbsp;
                    </label>
                  ) : (
                    <label className="TCnotice" htmlFor="">
                      {fieldsErrors.score}
                    </label>
                  )}

                  <textarea
                    type="text"
                    className="ar-TC-intro w-100 col-12"
                    placeholder="請輸入要留言的內容"
                    name="messenger"
                    id="messenger"
                    rows="5"
                    value={fields.messenger}
                    onChange={handleFieldChange}
                    required
                  ></textarea>
                  {fieldsErrors.messenger === '' ? (
                    <label className="TCnotice" htmlFor="">
                      &nbsp;
                    </label>
                  ) : (
                    <label className="TCnotice" htmlFor="">
                      {fieldsErrors.messenger}
                    </label>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary mx-auto"
              >
                送出
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="TCallwrapera-sing">
        <div className="TCallwraperw">
          <div className="white-block">
            <div className="yellow-area-but-1 ">
              我要留言
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="sns-sing">
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
      </div> */}
      <ArBgDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default withRouter(CsMessageADD)
