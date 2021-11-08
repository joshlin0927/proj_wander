import React from 'react'
import { Link } from 'react-router-dom'
export default function RemindingText() {
  return (
    <>
      <div className="col-12 col-md-10 remindingarea">
        <p className="remindingtext">您尚未預訂任何課程 </p>
        <button className="btn  row buy-btn">
          <Link to="/Course/CsCourse">
            <span>購買課程</span>{' '}
          </Link>
        </button>
      </div>
    </>
  )
}
