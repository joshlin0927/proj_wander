import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import axios from 'axios'
import { IMG_PATH, Member_FINDONE } from '../../config'

function MessageRight(props) {
  const { messages, own, currentChat, member } = props
  const [receiver, setReceiver] = useState('')
  const [sender, setSender] = useState('')
  useEffect(() => {
    ;(async () => {
      const whoReceive =
        currentChat.senderID === member.sid
          ? currentChat.receiverID
          : currentChat.senderID
      let r = await axios.get(
        `${Member_FINDONE}?memberID=${whoReceive}`
      )
      if (r.data.success) {
        if (r.data.result[0].avatar) {
          setReceiver(r.data.result[0].avatar)
        } else {
          setReceiver('presetAvatar.jpeg')
        }
      } else {
        console.log('error:', r.data.error)
      }
      let s = await axios.get(
        `${Member_FINDONE}?memberID=${member.sid}`
      )
      if (s.data.success) {
        if (s.data.result[0].avatar) {
          setSender(s.data.result[0].avatar)
        } else {
          setSender('presetAvatar.jpeg')
        }
      } else {
        console.log('error:', s.data.error)
      }
    })()
  }, [currentChat, member.sid])
  return (
    <>
      {console.log('re:', receiver, sender)}
      <div className={own ? 'messageRight' : 'messageLeft'}>
        <div
          className={own ? 'message right' : 'message left'}
        >
          <span className="messageText">
            {messages.text}
          </span>
          <div className="w-100"></div>
          <span className="messageTimestamp">
            {format(messages.created_at)}
          </span>
        </div>
        <div className="messageAvatar">
          <div className="messageAvatarFilter">
            <div
              className={own ? 'Rtriangle' : 'Ltriangle'}
            >
              <img
                src={
                  own
                    ? `${IMG_PATH}/${sender}`
                    : `${IMG_PATH}/${receiver}`
                }
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MessageRight
