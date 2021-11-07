import React from 'react'

import PcCoursePlaylistCard from './PcCoursePlaylistCard'

function PcCoursePlaylist(props) {
  const { active, setActive, videos, showStatus } = props

  // console.log('active', active)
  // console.log('videos', videos)

  return (
    <>
      {videos.length !== 0
        ? videos.map((Video, i) => {
            return (
              <PcCoursePlaylistCard
                key={i}
                sid={Video.sid}
                video_name={Video.video_name}
                duration1={Video.duration}
                value={Video.sid}
                order_status={Video.order_status}
                member_sid={Video.member_sid}
                active={active}
                setActive={setActive}
                // showStatus={showStatus}
              />
            )
          })
        : ''}
    </>
  )
}
export default PcCoursePlaylist
