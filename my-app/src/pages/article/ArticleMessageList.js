import ArticleMessageListCard from './ArticleMessageListCard'

function ArticleMessageList(props) {
  const { displayMessage } = props
  return (
    <>
      {displayMessage.map((Course, i) => {
        return (
          <ArticleMessageListCard
            key={Course.sid}
            sid={Course.sid}
            // ar_sid={Course.ar_sid}
            nickname={Course.nickname}
            messenger={Course.messenger}
            st_pictuer={Course.st_pictuer}
            // great={Course.great}
            // created_date={Course.created_date}
            // remove={() => {
            //   const newDisplayCourse = [...displayCourse]
            //   newDisplayCourse.splice(i, 1)
            //   setDisplayCourse(newDisplayCourse)
            // }}
            // setMess={(newMess) => {
            //   const newDisplayCourse = [...displayCourse]
            //   newDisplayCourse[i].messenger = newMess
            //   setDisplayCourse(newDisplayCourse)
            // }}
          />
        )
      })}
    </>
  )
}

export default ArticleMessageList
