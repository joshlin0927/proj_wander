import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Member_FINDONE, IMG_PATH } from '../../config'

function ChatCard(props) {
  const { conversation } = props
  const [receiveUser, setReceiveUser] = useState({})

  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${Member_FINDONE}?memberID=${conversation.receiverID}`
      )
      if (r.data.success) {
        setReceiveUser(r.data.result[0])
      } else {
        console.log('error:', r.data.error)
      }
    })()
  }, [conversation.receiverID])
  return (
    <>
      <div className="chatCardAvatar">
        <img
          src={`${IMG_PATH}/${receiveUser.avatar}`}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="chatCard-info">
        <div className="d-flex align-items-center">
          <div className="chatName">
            {receiveUser.nickname}
          </div>
          <div className="notification"></div>
        </div>
        <div className="LastMessageAndTime">
          <p className="m-0">
            <span>會員ID：{conversation.receiverID}</span>
          </p>
          <div className="d-flex">
            <p className="lastMessage">
              我對第一段影片的某一些地方有疑問，適不適
            </p>
            <span>(15分鐘前)</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatCard
