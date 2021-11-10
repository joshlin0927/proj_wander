import React from 'react'

import MemberCard from './MemberCard'

function MemberList(props) {
  const {
    data,
    handleIsShow,
    setMemberSid,
    handleResumeShow,
    setResumeName,
  } = props

  console.log('data', data)
  return (
    <>
      {data.map((el, i) => {
        return (
          <MemberCard
            key={i}
            sid={el.sid}
            lastname={el.lastname}
            firstname={el.firstname}
            language={el.language}
            email={el.email}
            verification={el.verification}
            resume={el.resume}
            handleIsShow={handleIsShow}
            handleResumeShow={handleResumeShow}
            setMemberSid={setMemberSid}
            setResumeName={setResumeName}
          />
        )
      })}
    </>
  )
}

export default MemberList
