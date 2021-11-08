import ArticleListCardSt from './ArticleListCardSt'

function ArtMessageList(prop) {
  const { displayCourse } = prop
  return (
    <>
      {displayCourse.map((Course, i) => {
        return (
          <ArticleListCardSt
            key={Course.sid}
            sid={Course.sid}
            artical_category={Course.artical_category}
            artical_title={Course.artical_title}
            artical_image={Course.artical_image}
            // messenger={Course.messenger}
            // // great={Course.great}
            // // created_date={Course.created_date}
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

export default ArtMessageList
