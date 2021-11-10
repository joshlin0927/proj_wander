import React from 'react'
import { withRouter } from 'react-router-dom'
import './style/membercenterformobile.css'
//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'

import StBgDecoration from '../../components/st/StBgDecoration'
import ChatList from '../../components/chatroom/ChatList'
import Footer from '../../components/Footer'

function ChatroomMobile(props) {
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row">
          <form className="form col-12 offset-0 col-md-8 offset-md-1 mobileChatForm">
            <ChatList />
          </form>
        </div>
      </div>
      <StBgDecoration />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default withRouter(ChatroomMobile)
