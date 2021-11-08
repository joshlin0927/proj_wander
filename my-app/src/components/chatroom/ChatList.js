import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Chat_API } from '../../config'
import ChatCard from './ChatCard'
import ChatWindow from './ChatWindow'

function ChatList() {
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
      setConversation(r.data)
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
  console.log('current:', currentChat)
  return (
    <>
      <div className="chatList col-12 col-md-5 col-lg-4">
        <div className="chatList-content">
          <div className="TCform-head ml-1">
            <div>
              <i className="fas fa-chevron-left TCback-btn"></i>
            </div>
            <div className="TCform-title">聊天室</div>
            <div>
              <i className="fas fa-chevron-left TCback-btn opacity-0"></i>
            </div>
          </div>
          {/* a person */}
          {conversation.length === 0
            ? ''
            : conversation.map((v) => {
                return (
                  <div
                    className="chatCard"
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
              })}
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
            />
          ) : (
            ''
          )}
        </>
      ) : (
        <span>點擊任意對話以查看</span>
      )}
    </>
  )
}

export default ChatList
