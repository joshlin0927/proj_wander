import React, { useEffect } from 'react'

import './course1.css'
// import { ArtMessage_DELETE } from '../../config'
import { IMG_PATH } from '../../config'

function ArtMessageListCard(props) {
  // const member = localStorage.getItem('member')

  // const memberObj = JSON.parse(member)

  // const token = localStorage.getItem('token')

  //大頭貼狀態
  // let [imgSrc, setImgSrc] = useState('')

  // console.log('memberObj', memberObj)

  // console.log('member', member)

  // useEffect(() => {
  //   let r = axios.delete(TcCourse_DELETE)

  //   console.log(r)
  // }, [])

  // 使用物件值作為狀態值，儲存所有欄位的值

  // useEffect(() => {
  //   if (!token) {
  //     history.push('/')
  //   } else {
  //     ;(async () => {
  //       let r = await axios.get(
  //         `http://localhost:3001/stprofile/list?studentSid=${studentSid}`
  //       )
  //       // setFields(r.data[0][0])
  //       if (r.status === 200) {
  //         setImgSrc(r.data[0][0].avatar)
  //       }
  //     })()
  //   }
  // }, [imgSrc])

  const { index, messenger, nickname, st_pictuer, score } =
    props

  // // 刪除留言
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  // //TODO: 怎麼將sid傳上去
  // const deleteCourse = () => {
  //   ;(async () => {
  //     let r = await axios.delete(ArtMessage_DELETE + sid)
  //     if (r.status === 200) {
  //       remove()
  //       handleClose()
  //       alert('刪除成功')
  //       history.push('/ArtIndex/ArtMessage')
  //     }
  //   })()
  // }

  //修改留言
  // const [isShow, setIsShow] = useState(false)
  // const handleIsClose = () => setIsShow(false)
  // const handleIsShow = () => setIsShow(true)

  // 留言欄位
  // const [nameChange, setNameChange] = useState(messenger)

  // console.log(nameChange)
  // console.log(setNameChange)
  // const studentSid = JSON.parse(member).sid

  // const FormSubmit = async (e) => {
  //   e.preventDefault()
  //   const mess = new FormData(e.target).get('messenger')
  //   // console.log('message:', mess)
  //   ;(async () => {
  //     let r = await axios.post(
  //       // `${ArtMessage_EDIT}${sid}`,
  //       `${ArtMessage_EDIT}?Sid=${sid}`,

  //       {
  //         messenger: mess,
  //       }
  //     )
  //     // console.log(r)
  //     if (r.status === 200) {
  //       setMess(mess)
  //       handleIsClose()
  //       // alert('修改完成')
  //       // history.push('/ArtIndex/ArtMessage')
  //     }
  //   })()
  // }

  useEffect(() => {
    let spans = document.getElementById(`scoreStar${index}`)
    for (let i = 0; i < score; i++) {
      spans.innerHTML += `<span class="fas fa-star"></span>`
    }
  }, [score, index])

  return (
    <>
      {/* <li className="sing-TCcourse-card active  shadow-sm p-3 mb-2 bg-body rounded">
        <div className="TCcourse-img-sing">
          <img
            src={`${IMG_PATH}/${st_pictuer}`}
            alt=""
            className="img-fluid"
          />
          <span className="TCcourse-img-selector-sin ">
            {nickname}
          </span>
        </div>
        <div className="TCcourse-info-sing">
          <div className="TCcourse-title-sin ">
            <p>{messenger}</p>
          </div>
        </div>
      </li> */}

      <li className="sh-nav-item mx-auto   active  shadow-sm p-3 mb-3 bg-body rounded">
        <span className="" style={{ marginRight: '10px' }}>
          <div
            className="fsdfds"
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '10px',
            }}
          >
            <span>{nickname}</span>
            <img
              src={
                st_pictuer
                  ? `${IMG_PATH}/${st_pictuer}`
                  : `${IMG_PATH}/presetAvatar.jpeg`
              }
              alt=""
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
              }}
            />
          </div>
        </span>
        <span
          className="item flex"
          style={{ marginRight: '10px' }}
        >
          {messenger}
        </span>
        <div
          id={`scoreStar${index}`}
          className="scoreStar"
        ></div>
        {/* <span
          className="fas fa-star"
          style={{
            marginRight: '10px',
            color: '#BCC831',
          }}
        >
          {score}
        </span> */}
        <span className="">
          {/* <span> 1分鐘</span> */}
        </span>
      </li>

      {/* <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>修改留言</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="" onSubmit={FormSubmit}>
            <textarea
              type="text"
              className="TC-intro w-100 col-12"
              placeholder=""
              name="messenger"
              id="course_introduction"
              rows="5"
              value={nameChange}
              onChange={(e) => {
                setNameChange(e.target.value)
              }}
            ></textarea>
            <button
              type="submit"
              className="btn btn-secondary mx-auto"
            >
              送出
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>刪除留言</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5
            className="modal-title text-center my-4"
            id="exampleModalLabel"
          >
            確定要刪除留言?
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={deleteCourse}
          >
            <span>是</span>
          </button>
          <button
            type="button"
            className="btn confirmBtn"
            onClick={handleClose}
          >
            <span>否</span>
          </button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}

export default ArtMessageListCard
