import React from 'react'

export default function ConfirmMsg(props) {
  const { text, show } = props

  return (
    <>
      <div className={`confirmmsg-m ${show}`}>
        <i className="far fa-check-circle"> </i>
        {text}
        資料已修改完成
      </div>
    </>
  )
}
