import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Modal } from 'react-bootstrap'
import { devUrl, IMG_PATH } from '../../config'
import { Link } from 'react-router-dom'

import {
  ArtMessage_DELETE,
  ArtMessage_EDIT,
} from '../../config'
import { useHistory } from 'react-router'

function ArtMessage(props) {
  // const member = localStorage.getItem('member')

  // const memberObj = JSON.parse(member)

  // const token = localStorage.getItem('token')

  // const history = useHistory()

  // console.log('memberObj', memberObj)

  // console.log('member', member)

  // useEffect(() => {
  //   let r = axios.delete(TcCourse_DELETE)

  //   console.log(r)
  // }, [])

  // 使用物件值作為狀態值，儲存所有欄位的值

  // useEffect(() => {
  //   if (!token) {
  //     history.push('/')
  //   }
  //   // else if (identity !== 0) {
  //   //   history.push('/')}
  //   else {
  //     ;(async () => {
  //       let r = await axios.get(
  //         `http://localhost:3001/stprofile/list?studentSid=${studentSid}`
  //       )
  //       // setFields(r.data[0][0])
  //       if (r.status === 200) {
  //         setImgSrc(r.data[0][0].avatar)
  //       }
  //       //  console.log('r.data[0][0]', r.data[0][0])
  //     })()
  //   }
  // })

  const { imgSrc } = props

  const [imgSrcA, imgSrcAA] = useState('')


  const {
    sid,
    artical_category,
    artical_title,
    artical_image,
  } = props

  return (
    <>
      <Link
        // to={`/ArtIndex/ArticleMessage/`}  imgSrcAA={sid}

        to={`/ArtIndex/ArticleMessage?articleSid=${sid}`}
      >
        <div className="articleitem">
          <img
            src={`${IMG_PATH}/pop-articles/${artical_image}`}
            alt=""
            className="img-fluid"
          />
          {/* <Link to={`/ArtIndex/ArticleMessage/`}> */}
          <div className="Art-coursename">{artical_title}</div>
          {/* </Link> */}

          <span className="teachername">
            #{artical_category}
          </span>
        </div>
      </Link>
    </>
  )
}

export default ArtMessage
