import { logDOM } from '@testing-library/dom'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

// component
import TcVideoCard from './TcVideoCard'

function TcVideoList(props) {
  const {
    Videos,
    RemoveVideo,
    setRemoveVideo,
    status,
    setStatus,
  } = props

  return (
    <>
      {Videos.map((Video, i) => {
        return (
          <TcVideoCard
            key={Video.sid}
            sid={Video.sid}
            course_sid={Video.course_sid}
            video_cover={Video.video_cover}
            video_name={Video.video_name}
            created_at={Video.created_at}
            duration1={Video.duration}
            remove={() => {
              const newVideos = [...Videos].filter(
                (v, i) => {
                  return v.sid !== Video.sid
                }
              )
              setRemoveVideo(newVideos)
            }}
            status={() => {
              const newVideos = [...Videos].filter(
                (v, i) => {
                  return v.video_name !== Video.videoname
                }
              )
              setStatus(newVideos)
            }}
          />
        )
      })}
    </>
  )
}

export default TcVideoList
