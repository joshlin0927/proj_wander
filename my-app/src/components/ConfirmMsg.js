import React from 'react'

export default function ConfirmMsg(props) {
  const { showUp } = props

  return (
    <>
      <div className={`confirmmsg-m ${showUp}`}>
        <i className="far fa-check-circle"></i>
        資料已修改完成
      </div>
    </>
  )
}
