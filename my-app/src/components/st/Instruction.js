import React from 'react'
import Typical from 'react-typical'

export default function Instruction() {
  return (
    <>
      <Typical
        steps={[
          'Wander為您推薦最適合的課程',
          1000,
          'Wander為您推薦最適合的課程，點選開始測驗後進行！',
          500,
        ]}
        loop={1}
        wrapper="p"
      />
    </>
  )
}
