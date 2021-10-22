import React, { useState } from 'react'

function TcAvatarSelector(props) {
  const { avatar } = props

  
  const realFileInput = document.querySelector(
    '#realFileInput'
  )
  const loadFile = document.querySelector('#loadFile')

  function previewFile() {
    const avatarImg = document.querySelector('#avatarImg')
    const file = realFileInput
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        avatarImg.src = reader.result
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
          id="realFileInput"
          className="d-none"
          name={avatar}
          onChange={() => {
            previewFile()
          }}
        />
        <div className="profile-pic">
          <img
            id="avatarImg"
            src="../images/teacher/Thomas_Lillard.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div
          className="TCbtn btn-border-only"
          id="loadFile"
          onClick={() => {
            realFileInput.click()
          }}
        >
          <span>請選擇圖片</span>
        </div>
      </div>
    </>
  )
}

export default TcAvatarSelector
