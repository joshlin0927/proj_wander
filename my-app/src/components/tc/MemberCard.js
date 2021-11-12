import React, { useState } from 'react'

import axios from 'axios'
import { Modal } from 'react-bootstrap'

function MemberCard(props) {
  //修改會員狀態
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)

  // 更改會員狀態
  const [selectedOption, setSelectedOption] = useState('')
  const {
    sid,
    setMemberSid,
    setShowUp,
    lastname,
    firstname,
    language,
    email,
    verification,
    resume,
    handleResumeShow,
    setResumeName,
    data,
    setData,
    index,
  } = props
  // 會員狀態修改後送出
  const FormSubmit = async (e) => {
    e.preventDefault()
    ;(async () => {
      let r = await axios.post(
        `http://localhost:3001/member/edit`,
        {
          sid: sid,
          verification: selectedOption,
        }
      )
      // console.log(r)
      handleIsClose()
      if (r.data.success === true) {
        setShowUp('showup')
        setTimeout(() => {
          setShowUp('none')
        }, 3000)
      }
    })()

    const newData = [...data]
    newData[index].verification = selectedOption
    setData(newData)
  }
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
            className="TcCursorP"
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
            value={verification}
            onClick={handleIsShow}
          >
            <option value="0">未申請</option>
            <option value="1">未審核</option>
            <option value="2">通過</option>
            <option value="3">未通過</option>
          </select>
        </td>
      </tr>
      <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>審核狀態</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={FormSubmit}>
            <input
              name="sid"
              defaultValue={sid}
              className="d-none"
            />
            <select
              name="verification"
              className="custom-select"
              value={
                selectedOption
                  ? selectedOption
                  : verification
              }
              onChange={(e) => {
                setSelectedOption(e.target.value)
              }}
            >
              <option value="0">未申請</option>
              <option value="1">未審核</option>
              <option value="2">通過</option>
              <option value="3">未通過</option>
            </select>
            <button
              type="submit"
              className="btn btn-secondary mx-auto mt-5"
            >
              送出變更
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MemberCard
