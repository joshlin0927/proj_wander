import React from 'react'
import { Link } from 'react-router-dom'
export default function RemindingText() {
  return (
    <>
      <div>
        <p className="remindingtext">您尚未預訂任何課程 </p>
        <button className="btn btn-secondary row buy-btn">
          <Link to="/Course/CsCourse">
            <span>購買課程</span>{' '}
          </Link>
        </button>
      </div>
    </>
  )
}
