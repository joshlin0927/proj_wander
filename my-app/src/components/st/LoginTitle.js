import React from 'react'
import Typical from 'react-typical'

export default function Logintitle() {
  return (
    <>
      <Typical
        steps={['Wander', 1000, 'Wander with Us!', 500]}
        loop={1}
        wrapper="p"
      />
    </>
  )
}
