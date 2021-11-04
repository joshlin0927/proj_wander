import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PcCoursePlaylistCard from './PcCoursePlaylistCard'

function PcCoursePlaylist(props) {
  const { active, setActive } = props
  const [videos, setVideos] = useState('')
  const [chose, setChose] = useState('')
  const takeClass = sessionStorage.getItem('takeClass')
  useEffect(() => {
    ;(async () => {
      let r = await axios.get(
        `http://localhost:3001/stcourse/classroom/?courseSid=24`
      )

      //TODO: courseSid set to variable
      setVideos(r.data)
    })()
  }, [])

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
                  duration1={Video.duration}
                  value={Video.sid}
                  checkedValue={chose}
                  setCheckedValue={setChose}
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
