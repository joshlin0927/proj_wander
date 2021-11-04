import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Modal } from 'react-bootstrap'

import {
  ArtMessage_DELETE,
  ArtMessage_EDIT,
} from '../../config'
import { useHistory } from 'react-router'
import { IMG_PATH } from '../../config'

function ArticleMessageListCard(props) {
  const { sid, messenger, nickname, st_pictuer } = props

  return (
    <>
      <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
        <div className="TCcourse-img-sing">
          <img
            src={`${IMG_PATH}/${st_pictuer}`}
            alt=""
            className="img-fluid"
          />
          <span className="TCcourse-img-selector-sin ">
            {nickname}
          </span>
        </div>
        <div className="TCcourse-info-sing">
          <div className="TCcourse-title-sin ">
            <p>{messenger}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default ArticleMessageListCard
