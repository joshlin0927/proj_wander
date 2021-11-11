import React from 'react'

import MemberCard from './MemberCard'

function MemberList(props) {
  const {
    data,
    handleIsShow,
    setMemberSid,
    handleResumeShow,
    setResumeName,
    selectedOption,
    setShowUp,
    setData,
  } = props

  // console.log('data', data)
  return (
    <>
      {data.map((el, i) => {
        return (
          <MemberCard
            key={i}
            index={i}
            sid={el.sid}
            data={data}
            setData={setData}
            setShowUp={setShowUp}
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
            selectedOption={selectedOption}
          />
        )
      })}
    </>
  )
}

export default MemberList
