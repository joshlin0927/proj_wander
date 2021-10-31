import React from 'react'

import Carousel from './Carousel'

function Coursetest() {
  return (
    <>
      <div className="App">
        <Carousel cols={3} gap={10}>
          <Carousel.Item>
            <div className="item"> 11 </div>{' '}
          </Carousel.Item>{' '}
          <Carousel.Item>
            <div className="item"> 12 </div>{' '}
          </Carousel.Item>{' '}
          <Carousel.Item>
            <div className="item"> 13 </div>{' '}
          </Carousel.Item>{' '}
          <Carousel.Item>
            <div className="item"> 21 </div>{' '}
          </Carousel.Item>{' '}
          <Carousel.Item>
            <div className="item"> 22 </div>{' '}
          </Carousel.Item>{' '}
          <Carousel.Item>
            <div className="item"> 23 </div>{' '}
          </Carousel.Item>{' '}
        </Carousel>{' '}
      </div>
    </>
  )
}

export default Coursetest
