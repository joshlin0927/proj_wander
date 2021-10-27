import React from 'react'

export default function ConfirmMsg(props) {
  const { text } = props
  const { showUp } = props
  return (
    <>
      <div className="confirmmsg-m">
        <i className="far fa-check-circle"> </i>
        {text}
      </div>
    </>
  )
}
