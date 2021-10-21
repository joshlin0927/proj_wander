import React from 'react'

import ChatCard from './ChatCard'

function ChatList() {
  return (
    <>
      <div class="chatList col-12 col-md-5 col-lg-4">
        <div class="chatList-content">
          <div class="TCform-head ml-1">
            <a href="">
              <i class="fas fa-chevron-left TCback-btn"></i>
            </a>
            <div class="TCform-title">聊天室</div>
            <a href="">
              <i class="fas fa-chevron-left TCback-btn opacity-0"></i>
            </a>
          </div>
          {/* a person */}
          <ChatCard />
        </div>
      </div>
    </>
  )
}

export default ChatList
