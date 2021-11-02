import React from 'react'

export default function ConfirmMsg(props) {
  const { showUp, text } = props

  return (
    <>
      <div className={`confirmmsg-m ${showUp}`}>
        <i className="far fa-check-circle"></i>
        {text ? text : '資料已修改完成'}
      </div>
    </>
  )
}
