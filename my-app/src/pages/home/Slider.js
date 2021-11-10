import React from 'react'
// import Slider from "react-slick";
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { devUrl } from '../../config'
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
                  src={`${devUrl}/images/index/Slider/1/01.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  用「英文邏輯」溝通說服你的主管、同事
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=69`}
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
                  src={`${devUrl}/images/index/Slider/1/02.jpg`}
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
                  src={`${devUrl}/images/index/Slider/1/03.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  生活與文化日語
                </div>
                <span className="sh-teachername">日文</span>
                <span className="co-price">7000TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=24`}
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
                  src={`${devUrl}/images/index/Slider/1/04.jpg`}
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
        <Item>
          <div className="wanderIndex-card-wrapper">
            <div className="wanderIndex-card">
              <div className="wanderIndex-card-image">
                <img
                  src={`${devUrl}/images/index/Slider/1/05.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  到日本人家作客
                </div>
                <span className="sh-teachername">日文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=59`}
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
                  src={`${devUrl}/images/index/Slider/1/06.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  秒懂日本飲食文化
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">2340TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=67`}
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
                  src={`${devUrl}/images/index/Slider/1/07.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  N5情境會話課程
                </div>
                <span className="sh-teachername">日文</span>
                <span className="co-price">6000TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=23`}
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
                  src={`${devUrl}/images/index/Slider/1/08.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  會議協商與簡報技巧
                </div>
                <span className="sh-teachername">英文</span>
                <span className="co-price">7000TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=26`}
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
                  src={`${devUrl}/images/index/Slider/1/09.jpg`}
                  alt=""
                />
                <div className="sh-coursename">
                  零基礎輕鬆成為日語達人
                </div>
                <span className="sh-teachername">日文</span>
                <span className="co-price">2755TWD</span>
              </div>
              <ul className="wanderIndex-social-icons">
                <li>
                  <Link
                    to={`/Course/CsCoursedes/?courseSid=1`}
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
