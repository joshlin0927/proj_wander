import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Chat_API, Member_FINDONE } from '../../config'
import { io } from 'socket.io-client'

import MessageRight from './MessageRight'

function ChatWindow(props) {
  const {
    messages,
    setMessages,
    member,
    currentChat,
    setCurrentChat,
  } = props

  const [newMessage, setNewMessage] = useState('')
  const [arrivalMessage, setArrivalMessage] = useState({})
  const [receiver, setReceiver] = useState({})
  const [sender, setSender] = useState({})
  const scrollRef = useRef()
  const socket = useRef()

  const whoReceive =
    currentChat.senderID === member.sid
      ? currentChat.receiverID
      : currentChat.senderID

  // socket.io
  useEffect(() => {
    socket.current = io('http://localhost:8900')
    socket.current.on('getMessage', (data) => {
      console.log('觸發SET')
      setArrivalMessage({
        senderID: data.senderID,
        text: data.text,
        created_at: Date.now(),
      })
    })
  }, [])

  // 讀取傳來的訊息
  useEffect(() => {
    const whoSend =
      currentChat.senderID === member.sid
        ? currentChat.receiverID
        : currentChat.senderID
    if (
      arrivalMessage &&
      whoSend === arrivalMessage.senderID
    ) {
      setMessages((prev) => [...prev, arrivalMessage])
      console.log('改變畫面了')
    }
  }, [arrivalMessage, currentChat, setMessages, member.sid])

  useEffect(() => {
    // socket.io
    socket.current.emit('addUser', member.sid)
    socket.current.on('getUsers', (users) => {
      console.log('連線中用戶:', users)
    })
    // 取得sender跟receiver會員資料
    ;(async () => {
      let r = await axios.get(
        `${Member_FINDONE}?memberID=${whoReceive}`
      )
      if (r.data.success) {
        setReceiver(r.data.result[0])
      } else {
        console.log('error:', r.data.error)
      }
      let s = await axios.get(
        `${Member_FINDONE}?memberID=${member.sid}`
      )
      if (s.data.success) {
        setSender(s.data.result[0])
      } else {
        console.log('error:', s.data.error)
      }
    })()
  }, [member.sid, whoReceive])

  const handleSubmitMessage = async (e) => {
    e.preventDefault()
    const message = {
      senderID: member.sid,
      text: newMessage,
      conversationID: currentChat.sid,
    }
    try {
      let r = await axios.post(
        `${Chat_API}/message`,
        message
      )
      setMessages([...messages, r.data.result[0]])
      setNewMessage('')
      // socket.io
      socket.current.emit('sendMessage', {
        senderID: member.sid,
        receiverID: whoReceive,
        text: newMessage,
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  // Enter觸發
  const pressEnter = (e) => {
    if (e.key === 'Enter' && newMessage !== '') {
      handleSubmitMessage(e)
    }
  }

  // 輸入或讀取視窗自動滾動到最下面訊息
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }, [messages])

  return (
    <>
      <div className="chatWindow">
        <div className="chatWindowHead">
          <div className="talkTo">
            <div className="talkToName">
              {receiver.nickname}
            </div>
          </div>
          <div
            className="closeWindow"
            onClick={() => {
              setCurrentChat(null)
            }}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="chatWindowBody">
          {messages.map((v, i) => {
            return (
              <div ref={scrollRef}>
                <MessageRight
                  key={i}
                  messages={v}
                  own={v.senderID === member.sid}
                  currentChat={currentChat}
                  member={member}
                />
              </div>
            )
          })}
        </div>
        <div className="chatWindowFoot">
          <input
            type="text"
            id="chatInsert"
            className=" chatInsert allInputs m-0 col-12"
            placeholder="請輸入"
            value={newMessage}
            onKeyPress={pressEnter}
            onChange={(e) => {
              setNewMessage(e.target.value)
            }}
          />
          <button
            type="button"
            className="chatInsertButton"
            onClick={handleSubmitMessage}
          >
            <span>送出</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatWindow
