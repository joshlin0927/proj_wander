import React from 'react'
import { format } from 'timeago.js'

function MessageRight(props) {
  const { messages, own } = props
  return (
    <>
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
            <div className="Rtriangle">
              <img
                src="../images/teacher/Thomas_Lillard.jpg"
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
