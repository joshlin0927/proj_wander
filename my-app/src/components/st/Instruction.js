import React from 'react'
import Typical from 'react-typical'

export default function Instruction() {
  return (
    <>
      <Typical
        steps={[
          '讓我們為您推薦最適合的課程',
          1000,
          '讓我們為您推薦最適合的課程，點選開始課程後開始！',
          500,
        ]}
        loop={1}
        wrapper="p"

      />
    </>
  )
}
