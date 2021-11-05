import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

import PcCoursePlaylistCard from './PcCoursePlaylistCard'

function PcCoursePlaylist(props) {
  const { active, setActive, videos } = props

  return (
    <>
      <div className="playlist col-10 col-md-3">
        {videos.length !== 0
          ? videos.map((Video, i) => {
              return (
                <PcCoursePlaylistCard
                  key={i}
                  sid={Video.sid}
                  video_name={Video.video_name}
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
