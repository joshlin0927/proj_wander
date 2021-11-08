import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Chat_API } from '../../config'
import { io } from 'socket.io-client'

import MessageRight from './MessageRight'

function ChatWindow(props) {
  const { messages, setMessages, member, currentChat } =
    props
  const [newMessage, setNewMessage] = useState('')
  const [arrivalMessage, setArrivalMessage] = useState({})
  const scrollRef = useRef()
  const socket = useRef()

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
    socket.current.emit('addUser', member.sid)
    socket.current.on('getUsers', (users) => {
      console.log('連線中用戶:', users)
    })
  }, [member.sid])

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
      console.log('回傳:', r.data.result[0])
      setMessages([...messages, r.data.result[0]])
      setNewMessage('')
      // socket.io
      const RID =
        currentChat.senderID === member.sid
          ? currentChat.receiverID
          : currentChat.senderID
      socket.current.emit('sendMessage', {
        senderID: member.sid,
        receiverID: RID,
        text: newMessage,
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  // 輸入或讀取視窗自動滾動到最下面訊息
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  return (
    <>
      <div className="chatWindow col-12 col-md-6  col-lg-5">
        <div className="chatWindowHead">
          <div className="talkTo">
            <div className="talkToAvatar">
              <img
                src="../images/students/Sagehashi Harue.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="talkToName">Harue</div>
          </div>
          <div className="closeWindow">
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
                />
              </div>
            )
          })}
        </div>
        <div className="chatWindowFoot">
          <input
            type="text"
            id="chatInsert"
            className=" chatInsert allInputs col-9"
            placeholder="請輸入"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value)
            }}
          />
          <button
            type="button"
            className="btn chatInsertButton col-3"
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
