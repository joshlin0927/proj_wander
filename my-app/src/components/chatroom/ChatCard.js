import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Member_FINDONE, IMG_PATH } from '../../config'

function ChatCard(props) {
  const { conversation, member, currentChat } = props
  const [receiveUser, setReceiveUser] = useState({})

  useEffect(() => {
    ;(async () => {
      const whoReceive =
        conversation.receiverID === member.sid
          ? conversation.senderID
          : conversation.receiverID
      let r = await axios.get(
        `${Member_FINDONE}?memberID=${whoReceive}`
      )
      if (r.data.success) {
        setReceiveUser(r.data.result[0])
      } else {
        console.log('error:', r.data.error)
      }
    })()
  }, [conversation, member])
  return (
    <>
      <div className="col-3 px-2">
        <div className="chatCardAvatar">
          <img
            src={
              receiveUser.avatar
                ? `${IMG_PATH}/${receiveUser.avatar}`
                : `${IMG_PATH}/presetAvatar.jpeg`
            }
            className="chatCardAvatarImg"
            alt=""
          />
        </div>
      </div>
      <div className="chatCard-info col-9">
        <div className="d-flex align-items-center">
          <div className="chatName">
            {receiveUser.nickname}
          </div>
          {/* <div className="notification"></div> */}
        </div>
      </div>
    </>
  )
}

export default ChatCard
