import React, { useEffect } from 'react'
import axios from 'axios'
import { TcCourse_EDIT } from '../../config'

// component
import TcVideoCard from './TcVideoCard'

function TcVideoList(props) {
  const memberObj = JSON.parse(
    localStorage.getItem('member')
  )
  const courseSid = sessionStorage.getItem('courseSid')

  const { Videos, setRemoveVideo, setStatus, setShowUp } =
    props

  //時間換算
  // console.log('sum', sum)
  // const courseTime = moment
  //   .duration(sum, 'seconds')
  //   .format('hh:mm:ss')

  let sum = 0
  const newVideos = [...Videos].map((v, i) => {
    return v.duration
  })

  for (let i = 0; i < newVideos.length; i++) {
    sum += newVideos[i]
  }
  useEffect(() => {
    ;(async () => {
      let r = await axios.post(TcCourse_EDIT, {
        sid: courseSid,
        teacher_sid: memberObj.sid,
        duration: sum,
      })
      console.log(r)
    })()
  }, [sum])
  console.log('sum', sum)
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
                  return v.video_name !== Video.video_name
                }
              )
              setStatus(newVideos)
            }}
            setShowUp={setShowUp}
          />
        )
      })}
    </>
  )
}

export default TcVideoList
