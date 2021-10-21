import React from 'react'

import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'

function ChatWindow() {
  return (
    <>
      <div class="chatWindow col-12 col-md-6  col-lg-5">
        <div class="chatWindowHead">
          <div class="talkTo">
            <div class="talkToAvatar">
              <img
                src="../images/students/Sagehashi Harue.jpeg"
                class="img-fluid"
              />
            </div>
            <div class="talkToName">Harue</div>
          </div>
          <div class="closeWindow">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div class="chatWindowBody">
          <MessageLeft />
          <MessageRight />
        </div>
        <div class="chatWindowFoot">
          <input
            type="text"
            id="chatInsert"
            class=" chatInsert allInputs col-12"
            placeholder="請輸入"
          />
          <button
            type="button"
            class="btn chatInsertButton"
          >
            <span>送出</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatWindow
