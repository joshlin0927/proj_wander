import React from 'react'

import PcCoursePlaylistCard from './PcCoursePlaylistCard'

function PcCoursePlaylist(props) {
  const { active, setActive, videos } = props

  console.log()

  return (
    <>
      <div className="playlist col-3 mo-none">
        {videos.length !== 0
          ? videos.map((Video, i) => {
              return (
                <PcCoursePlaylistCard
                  key={i}
                  sid={Video.sid}
                  video_name={Video.video_name}
                  video_link={Video.video_link}
                  duration1={Video.duration}
                  value={Video.sid}
                  active={active}
                  setActive={setActive}
                />
              )
            })
          : ''}
      </div>
    </>
  )
}
export default PcCoursePlaylist
