import React, { useState } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

export default function PcCoursePlaylistCard(props) {
  const { video_name, duration1 } = props
  const [active, setActive] = useState('')

  const time = moment.duration(duration1).format('HH:mm:ss')
  console.log(time)
  console.log(`${duration1}`)
  return (
    <>
      <div
        className={`clip ${active}`}
        onClick={() => {
          setActive('first')
        }}
      >
        <p> {video_name} </p> <p> 02: 33 </p>
      </div>
    </>
  )
}
