import React from 'react'
import { devUrl } from '../config'

export default function MobileCoursePlayer() {
  return (
    <>
      <div class="player col-12 des-none">
        <div class="play">
          <img
            src={`${devUrl}/images/elements/play_circle_outline.svg`}
            alt=""
          />
        </div>
        <div class="video">
          <img
            src={`${devUrl}/images/pic/課程圖片/韓國文化.jpeg`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
