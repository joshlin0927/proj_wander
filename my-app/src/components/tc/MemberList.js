import React from 'react'

import MemberCard from './MemberCard'

function MemberList(props) {
  const { data, handleIsShow, setMemberSid } = props

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
            handleIsShow={handleIsShow}
            setMemberSid={setMemberSid}
          />
        )
      })}
    </>
  )
}

export default MemberList
