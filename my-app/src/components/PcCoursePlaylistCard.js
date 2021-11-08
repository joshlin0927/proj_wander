import React from 'react'
import moment from 'moment'
// import momentDurationFormatSetup from 'moment-duration-format'

function PcCoursePlaylistCard(props) {
  let {
    sid,
    video_name,
    duration1,
    order_status,
    active,
    setActive,
    value,
    // showStatus,
  } = props

  // const member = JSON.parse(localStorage.getItem('member'))

  // const [hide, setHide] = useState('')
  // const [ishide, setISHide] = useState('')

  // useEffect(() => {
  //   if (member_sid !== member.sid) {
  //     setHide('d-none')
  //   } else {
  //     setISHide('d-none')
  //   }
  // }, [member.sid])

  const time = moment
    .duration(duration1, 'seconds')
    .format('HH:mm:ss')

  // console.log('active', active)
  // console.log('value', value)
  return (
    <>
      {order_status === null ||
      order_status === 0 ||
      {
        /* showStatus === false  */
      } ? (
        <div
          className={
            active === value ? `clip first` : `clip `
          }
        >
          <input
            type="radio"
            name="videoRadio"
            className="d-none"
            value={value}
            id={sid}
          />
          <div className="mr-auto">{video_name}</div>
          <div className="ml-auto">{time}</div>
          <div className="px-1">
            <i className="fas fa-lock"></i>
          </div>
        </div>
      ) : (
        <div
          className={
            active === value ? 'clip first' : 'clip'
          }
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
          <div className="mr-auto">{video_name}</div>
          <div className="ml-auto">{time}</div>
        </div>
      )}
    </>
  )
}
export default PcCoursePlaylistCard
