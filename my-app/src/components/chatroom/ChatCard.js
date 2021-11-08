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
      <div class="chatCardAvatar">
        <img
          src={`${IMG_PATH}/${receiveUser.avatar}`}
          className="img-fluid"
          alt=""
        />
      </div>
      <div class="chatCard-info">
        <div class="d-flex align-items-center">
          <div class="chatName">{receiveUser.nickname}</div>
          <div class="notification"></div>
        </div>
        <div class="LastMessageAndTime">
          <p class="m-0">
            <span>會員ID：{conversation.receiverID}</span>
          </p>
          <div class="d-flex">
            <p class="lastMessage">
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
