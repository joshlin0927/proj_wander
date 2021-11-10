import React from 'react'

function MemberCard(props) {
  const {
    sid,
    setMemberSid,
    lastname,
    firstname,
    language,
    email,
    verification,
    resume,
    handleIsShow,
    handleResumeShow,
    setResumeName,
  } = props
  return (
    <>
      <tr
        key={sid}
        onClick={() => {
          setMemberSid(sid)
        }}
      >
        <td>{sid}</td>
        <td>{lastname}</td>
        <td>{firstname}</td>
        <td>{language}</td>
        <td>{email}</td>
        <td>
          <div
            onClick={() => {
              handleResumeShow()
              setResumeName(resume)
            }}
          >
            <i className="far fa-file-alt"></i>
          </div>
        </td>
        <td>
          <select
            name="verification"
            className="custom-select"
            defaultValue={verification}
            onClick={handleIsShow}
          >
            <option value="0">未申請</option>
            <option value="1">未審核</option>
            <option value="2">通過</option>
            <option value="3">未通過</option>
          </select>
        </td>
      </tr>
    </>
  )
}

export default MemberCard
