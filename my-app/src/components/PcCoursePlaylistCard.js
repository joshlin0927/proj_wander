import React, { useState, useEffect } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import axios from 'axios'

function PcCoursePlaylistCard(props) {
  const {
    sid,
    video_name,
    duration1,
    setActive,
    value,
    checkedValue,
    setCheckedValue,
  } = props
  const [select, setSelect] = useState('')

  if (document.querySelector('input')) {
    console.log(1)
  }

  const time = moment
    .duration(duration1, 'seconds')
    .format('HH:mm:ss')

  return (
    <>
      {/* className={active ? 'clip first' : 'clip'} */}

      <div
        className={
          checkedValue === true ? 'clip first' : 'clip'
        }
        onClick={() => {
          setActive(value)
          setSelect(value)
        }}
      >
        <input
          type="radio"
          name="videoRadio"
          //   className="d-none"
          id={sid}
          onChange={(e) => {
            setCheckedValue(e.target.value)
          }}
        />
        <label htmlFor={sid}>
          <span>{video_name}</span> <span>{time}</span>
        </label>
      </div>
    </>
  )
}
export default PcCoursePlaylistCard
