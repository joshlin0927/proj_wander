import React from 'react'

function ChatCard() {
  return (
    <>
      <div class="chatCard">
        <div class="chatCardAvatar">
          <img
            src="../images/students/Sagehashi Harue.jpeg"
            class="img-fluid"
          />
        </div>
        <div class="chatCard-info">
          <div class="d-flex align-items-center">
            <div class="chatName">Harue</div>
            <div class="notification"></div>
          </div>
          <div class="LastMessageAndTime">
            <p class="m-0">
              課程名稱：<span>123</span>
            </p>
            <div class="d-flex">
              <p class="lastMessage">
                我對第一段影片的某一些地方有疑問，適不適
              </p>
              <span>(15分鐘前)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatCard
