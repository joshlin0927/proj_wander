import React from 'react'

import { IMG_PATH } from '../../config'

function ArticleMessageListCard(props) {
  const { messenger, nickname, st_pictuer } = props

  return (
    <>
      <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
        <div className="TCcourse-img-sing">
          {st_pictuer === null ? (
            <img
              src={`${IMG_PATH}/presetAvatar.jpeg`}
              alt=""
              className="img-fluid"
            />
          ) : (
            <img
              src={`${IMG_PATH}/${st_pictuer}`}
              alt=""
              className="img-fluid"
            />
          )}
          {/* <img
            src={`${IMG_PATH}/${st_pictuer}`}
            alt=""
            className="img-fluid"
          /> */}
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
