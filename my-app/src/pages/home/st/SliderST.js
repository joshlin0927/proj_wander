import React from 'react'
// import Slider from "react-slick";
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { devUrl } from '../../../config'
import { Link } from 'react-router-dom'

import './styles.css'

const breakPoints = [
  { width: 600, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

function ImageSlider() {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/01.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  跨國英語 con-call 實戰力
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=61`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/02.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  生活英文實用課程
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2130TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=37`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/03.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  帶老外遊台灣
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=62`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/04.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  社交話題不斷電
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=40`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/05.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  700+分數保證多益課程
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=63`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/06.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  提升英文口説流暢度
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=65`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/07.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  學美國道地的說話習慣
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=68`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/08.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  求職英文
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">8000TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=27`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/2/09.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  旅遊英文一把罩
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">7000TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=25`}
                  >
                    <i className="fa fa-link"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Item>
      </Carousel>
    </div>
  )
}

export default ImageSlider
