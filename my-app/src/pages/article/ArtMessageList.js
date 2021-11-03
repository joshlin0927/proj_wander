import ArtMessageListCard from './ArtMessageListCard'

function ArtMessageList(props) {
  const { displayCourse, setDisplayCourse } = props
  return (
    <>
      {displayCourse.map((Course, i) => {
        return (
          <ArtMessageListCard
            key={Course.sid}
            sid={Course.sid}
            // ar_sid={Course.ar_sid}
            st_sid={Course.st_sid}
            nickname={Course.nickname}
            st_pictuer={Course.st_pictuer}
            messenger={Course.messenger}
            // great={Course.great}
            // created_date={Course.created_date}
            remove={() => {
              const newDisplayCourse = [...displayCourse]
              newDisplayCourse.splice(i, 1)
              setDisplayCourse(newDisplayCourse)
            }}
            setMess={(newMess) => {
              const newDisplayCourse = [...displayCourse]
              newDisplayCourse[i].messenger = newMess
              setDisplayCourse(newDisplayCourse)
            }}
          />
        )
      })}
    </>
  )
}

export default ArtMessageList
