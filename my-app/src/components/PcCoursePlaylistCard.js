import React from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

function PcCoursePlaylistCard(props) {
  const {
    sid,
    video_name,
    duration1,
    active,
    setActive,
    value,
  } = props

  const time = moment
    .duration(duration1, 'seconds')
    .format('HH:mm:ss')

  return (
    <>
      <div
        className={active === value ? 'clip first' : 'clip'}
        onClick={() => {
          setActive(value)
        }}
      >
        <input
          type="radio"
          name="videoRadio"
          className="d-none"
          value={value}
          id={sid}
        />
        <label
          htmlFor={sid}
          className="d-flex align-items-center"
        >
          <span>{video_name}</span> <span>{time}</span>
        </label>
      </div>
    </>
  )
}
export default PcCoursePlaylistCard
