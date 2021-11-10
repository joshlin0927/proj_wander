import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Chat_API } from '../../config'
import ChatCard from './ChatCard'
import ChatWindow from './ChatWindow'

function ChatList(props) {
  const { chat, setChat, isActive, isOpen } = props

  // 取得該會員資料
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])

  // 對話列表資料
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `${Chat_API}/conversation/${member.sid}`
      )
      if (r.data) {
        setConversation(r.data)
      }
    })()
  }, [member.sid])
  // 點擊到的chatroom資料
  useEffect(() => {
    ;(async () => {
      try {
        let r = await axios.get(
          `${Chat_API}/message/${currentChat?.sid}`
        )
        setMessages(r.data)
      } catch (error) {
        console.log('error', error)
      }
    })()
  }, [currentChat])
  console.log('current:', currentChat, conversation)
  useEffect(() => {
    if (isActive === '' || isOpen === false) {
      setCurrentChat(null)
    }
  }, [isActive, isOpen])
  return (
    <>
      <div className={`chatList ${chat}`}>
        <div className="chatList-content">
          <div className="TCform-head ml-1">
            <div
              onClick={() => {
                props.history.goBack()
              }}
            >
              <i className="fas fa-chevron-left TCback-btn"></i>
            </div>
            <div className="TCform-title m-0">聊天室</div>
            <div
              onClick={() => {
                props.history.goBack()
              }}
            >
              <i className="fas fa-chevron-left TCback-btn opacity-0"></i>
            </div>
          </div>
          {/* a person */}
          {conversation.length === 0 ? (
            <div className="chatCard">
              <span className="noChatExist">
                目前沒有聯繫對象，如要發起聊天，請至教室上課中點選【聯繫老師】
              </span>
            </div>
          ) : (
            conversation.map((v) => {
              return (
                <div
                  className={
                    currentChat
                      ? currentChat.sid === v.sid
                        ? 'chatCard isClick'
                        : 'chatCard'
                      : 'chatCard'
                  }
                  onClick={() => {
                    setCurrentChat(v)
                  }}
                >
                  <ChatCard
                    conversation={v}
                    member={member}
                  />
                </div>
              )
            })
          )}
        </div>
      </div>
      {currentChat ? (
        <>
          {messages ? (
            <ChatWindow
              messages={messages}
              setMessages={setMessages}
              member={member}
              currentChat={currentChat}
              setCurrentChat={setCurrentChat}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default ChatList
