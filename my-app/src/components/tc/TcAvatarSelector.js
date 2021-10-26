import React, { useRef, useState } from 'react'

import { devUrl } from '../../config'

function TcAvatarSelector(props) {
  //預覽大頭貼的地方
  const imgRef = useRef(null)
  //實際擁有預覽功能的input因為太醜藏起來
  const inputRef = useRef(null)

  const previewFile = () => {
    var preview = imgRef.current
    var file = inputRef.current.files[0]
    var reader = new FileReader()

    reader.addEventListener(
      'load',
      function () {
        preview.src = reader.result
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="d-none"
          ref={inputRef}
          onChange={previewFile}
        />
        <div className="profile-pic">
          <img
            src={`${devUrl}/images/pic/presetAvatar.jpeg`}
            className="img-fluid"
            alt=""
            name="avatar"
            ref={imgRef}
          />
        </div>
        <button
          className="TCbtn btn-border-only"
          id="loadFile"
          onClick={(e) => {
            e.preventDefault()
            inputRef.current.click()
          }}
        >
          <span>請選擇圖片</span>
        </button>
      </div>
    </>
  )
}

export default TcAvatarSelector
