import React from 'react'

import PcCoursePlaylistCard from './PcCoursePlaylistCard'

export default function PcCoursePlaylist(props) {
  const { videos } = props

  console.log('videos', videos)

  return (
    <>
      <div className="playlist col-3 mo-none">
        {/* {videos.map((v, i) => {
          return (
            <PcCoursePlaylistCard
              // key={v.sid}
              video_name={v.video_name}
              duration1={v.duration}
            />
          )
        })} */}
      </div>
    </>
  )
}
