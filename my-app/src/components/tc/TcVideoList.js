import React, { useState } from 'react'
import TcVideoCard from './TcVideoCard'

function TcVideoList(props) {
  const { Videos, RemoveVideo, setRemoveVideo } = props

  return (
    <>
      {Videos.map((Video, i) => {
        return (
          <TcVideoCard
            key={Video.sid}
            sid={Video.sid}
            course_sid={Video.course_sid}
            video_name={Video.video_name}
            created_at={Video.created_at}
            duration={Video.duration}
            remove={() => {
              const newVideos = [...Videos].filter(
                (v, i) => {
                  return v.sid !== Video.sid
                }
              )
              setRemoveVideo(newVideos)
            }}
          />
        )
      })}
    </>
  )
}

export default TcVideoList
