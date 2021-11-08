import React from 'react'

function TcHasNoCourse(props) {
  const { text } = props
  return (
    <>
      <div className="TCcourse-card col-12">
        <div className="TcHasNoCourse">{text}</div>
      </div>
    </>
  )
}

export default TcHasNoCourse
