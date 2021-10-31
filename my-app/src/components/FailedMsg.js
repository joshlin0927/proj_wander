import React from 'react'

export default function FailedMsg(props) {
  const { isShowUp } = props

  return (
    <>
      <div className={`confirmmsg-m ${isShowUp}`}>
        <i className="far fa-check-circle"></i>
        資料修改失敗
      </div>
    </>
  )
}
