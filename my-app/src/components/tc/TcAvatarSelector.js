import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { devUrl } from '../../config'

function TcAvatarSelector(props) {
  const { avatar } = props

  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState('')

  const fileInputRef = useRef(null)

  // 當檔案有變化時，更新preview網址
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // component unmounted時，清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])
  }

  return (
    <>
      <div className="d-flex align-items-center">
        {preview ? (
          <div className="profile-pic">
            <img
              className="img-fluid"
              src={preview}
              alt=""
            />
          </div>
        ) : (
          <div className="profile-pic">
            <img
              className="img-fluid"
              src={`${devUrl}/images/pic/presetAvatar.jpeg`}
              alt=""
            />
          </div>
        )}
        <label className="TCbtn btn-border-only">
          <input
            id="upload_img"
            type="file"
            className="d-none"
            value=""
            name={avatar}
            onChange={onSelectFile}
            ref={fileInputRef}
          />
          <span>請選擇圖片</span>
        </label>
      </div>
    </>
  )
}

TcAvatarSelector.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TcAvatarSelector
