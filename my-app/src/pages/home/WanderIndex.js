import React, { useEffect, useState } from 'react'
import { devUrl } from '../../config'
import './index.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import HomeBgDecorationNormal from '../../components/home/HomeBgDecorationNormal'
import ImageSlider from './Slider'
import ImageSliderST from './st/SliderST'

import MobileSlider from './Mobile-Slider'
import MobileSliderST from './st/Mobile-SliderST'

function WanderIndex() {
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''

  const identity = member ? member.identity : ''

  const [changeItem, setCHangeItem] = useState(
    `${devUrl}/images/index/01/01.png`
  )

  const myArray = [
    `${devUrl}/images/index/01/01.png`,
    `${devUrl}/images/index/01/02.png`,
    `${devUrl}/images/index/01/03.png`,
    `${devUrl}/images/index/01/04.png`,
    `${devUrl}/images/index/01/05.png`,
    `${devUrl}/images/index/01/06.png`,
    `${devUrl}/images/index/01/07.png`,
    `${devUrl}/images/index/01/08.png`,
    `${devUrl}/images/index/01/09.png`,
    `${devUrl}/images/index/01/10.png`,
  ]

  useEffect(() => {
    const timoutId = setInterval(() => {
      var randomItem =
        myArray[Math.floor(Math.random() * myArray.length)]
      // console.log(randomItem)
      setCHangeItem(randomItem)
    }, 5000)
    return () => clearTimeout(timoutId)
  }, [changeItem])

  return (
    <>
      <MultiLevelBreadCrumb />
      <div className="indexTopContent">
        <div className="topWord container-fluid w-100">
          <div className="row align-items-center h-100 position-relative">
            <div className="col-md-6 offset-md-1 col-12 offset-0">
              <span>提供學習多種外語的教學平台</span>
              <div className="w-100 my-3"></div>
              <span>能自由漫步世界各國。</span>
            </div>
          </div>
        </div>
        <div className="indexBigImg1 container-fluid w-100">
          <div className="row w-100 m-0">
            <div className="col-md-5 offset-md-6 col-11 offset-1 p-0">
              <img
                // src={`${devUrl}/images/index/01.jpg`}
                src={changeItem}
                alt=""
                className="img-01"
              />
            </div>
          </div>
        </div>
        <div className="indexBigImg2 container-fluid w-100">
          <div className="row">
            <div className="col-4">
              <img
                src={`${devUrl}/images/index/02.jpg`}
                alt=""
                className="img-02"
              />
            </div>
          </div>
        </div>
        <div className="indexBigImg5 container-fluid">
          <div className="row">
            <div className="col-4 ">
              <div className="imgc-move">
                <div className="img-triangle">
                  <svg
                    width="1300"
                    height="850"
                    viewBox="-50 -50 300 300"
                  >
                    <polygon
                      className="triangle"
                      strokeLinejoin="round"
                      points="100,0 0,200 200,200"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg3 container-fluid w-100">
          <div className="row w-100 m-0">
            <div className="col-md-2 offset-md-5 col-4 offset-8 p-0">
              <img
                src={`${devUrl}/images/index/03.jpg`}
                alt=""
                className="img-03"
              />
            </div>
          </div>
        </div>
        <div className="indexBigImg4 container-fluid">
          <div className="row w-100 m-0">
            <div className="col-md-2 offset-md-5 col-11 offset-1 p-0">
              <span className="slogan">
                #Learning never ends
              </span>
            </div>
          </div>
        </div>
        <div className="indexBigImg6 container-fluid">
          <div className="row w-100 m-0">
            <div className="col-md-2 offset-md-5 col-12 offset-0 p-0">
              <div className="card-a">
                <div className="carda">
                  <img
                    src={`${devUrl}/images/index/04/1-1.png`}
                    alt=""
                    className="img1-1"
                  />
                  <span className="img1-2">
                    2500+學員認證
                  </span>
                  <img
                    className="img1-3"
                    src="../images/index/04/1-3.png"
                    alt=""
                  />
                  <span className="img1-4">
                    Student certification
                  </span>
                </div>
                <div className="cardb">
                  <img
                    src={`${devUrl}/images/index/04/2-1.png`}
                    alt=""
                    className="img2-1"
                  />
                  <span className="img2-2">
                    高質量的原創課程
                  </span>
                  <img
                    className="img2-3"
                    src="../images/index/04/2-3.png"
                    alt=""
                  />
                  <span className="img2-4">
                    High-quality original courses
                  </span>
                </div>
              </div>
              <div className="mobile-card">
                <div className="row col-12 offset-0 p-0">
                  <div className="col-11 offset-1 p-0 ">
                    <img
                      src={`${devUrl}/images/index/mobile/card/01.png`}
                      alt=""
                    />
                    <img
                      src={`${devUrl}/images/index/mobile/card/02.png`}
                      alt=""
                    />
                  </div>
                  <div className="col-11 offset-1 p-0">
                    <img
                      src={`${devUrl}/images/index/mobile/card/03.png`}
                      alt=""
                    />
                    <img
                      src={`${devUrl}/images/index/mobile/card/04.png`}
                      alt=""
                    />
                    <div className="col-6 offset-2 p-0">
                      <div className="icon01">
                        <img
                          src={`${devUrl}/images/index/mobile/grey_triangle.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg7 container-fluid">
          <div className="row w-100 m-0">
            <div className="col-md-2 offset-md-5 col-12 offset-0 p-0">
              <div className="card-a">
                <div className="cardc">
                  <img
                    src={`${devUrl}/images/index/04/3-1.png`}
                    alt=""
                    className="img3-1"
                  />
                  <span className="img3-2">
                    隨時上課，沒有限制
                  </span>
                  <img
                    src={`${devUrl}/images/index/04/2-3.png`}
                    alt=""
                    className="img3-3"
                  />
                  <span className="img3-4">
                    Class anytime, no restrictions
                  </span>
                </div>
                <div className="cardd">
                  <img
                    src={`${devUrl}/images/index/04/4-1.png`}
                    alt=""
                    className="img4-1"
                  />
                  <span className="img4-2">
                    學成後的認證
                  </span>
                  <img
                    src={`${devUrl}/images/index/04/1-3.png`}
                    alt=""
                    className="img4-3"
                  />
                  <span className="img4-4">
                    Post-study certification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg9 container-fluid">
          <div className="row">
            <div className="mobile-card">
              <div className="row col-12 offset-0 p-0">
                <div className="col-2 offset-2 p-0">
                  <div className="row ">
                    <div className="yellow-area-2-Text">
                      <span>現在學習語言會不會太晚？</span>
                    </div>
                    <div className="imge-2-Text  ">
                      <span>想學習？是不是又擔心..</span>
                    </div>
                  </div>
                </div>
                <div className="col-6 offset-2 p-0 y-img">
                  <img
                    src={`${devUrl}/images/index/mobile/04.png`}
                    alt=""
                  />
                  <img
                    src={`${devUrl}/images/index/mobile/05.png`}
                    alt=""
                  />
                  <img
                    src={`${devUrl}/images/index/mobile/06.png`}
                    alt=""
                  />
                </div>
                <div className="col-6 offset-2 p-0">
                  <div className="icon02">
                    <img
                      src={`${devUrl}/images/index/mobile/yellowbox.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg8 container-fluid">
          <div className="row col-12 offset-0 p-0">
            <div className="col-md-5 offset-md-1 col-11 offset-1 p-0 indexBigImg8-img">
              <img
                src={`${devUrl}/images/index/05.jpg`}
                alt=""
              />
            </div>
            <div className="col-6">
              <div className=" yellow-a col-3 offset-md-4">
                <div className="yellow-area-1-Text">
                  <span>現在學習語言會不會太晚？</span>
                </div>
                <div className="imge-1-title">
                  <div className="imge-1-Text">
                    <span>想學習？是不是又擔心..</span>
                  </div>
                </div>
                <div className="col-3 offset-md-2 grey">
                  <div className="grey-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg12 container-fluid">
          <div className="row">
            <div className="mobile-card">
              <div className="row col-12 offset-0 p-0">
                <div className="imge-12-Text abc">
                  <span>快加入我們吧!!</span>
                </div>
              </div>
              <div className="row imge-12-Text-a offset-1 bcd">
                <span>
                  對於教學有熱誠? 對於學習語言有興趣?
                </span>
              </div>
              <div className="row col-11 offset-0 p-0 indexBigImg14">
                <div className="row yellow-area-but-3 offset-5">
                  {identity === '' ? (
                    <Link to="/SignUp">
                      <button className="btn checkoutBtn">
                        快來註冊吧!
                      </button>
                    </Link>
                  ) : (
                    ''
                  )}
                  {/* <Link to="/SignUp">
                    <button className="btn checkoutBtn">
                      快來註冊吧!
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg13 container-fluid">
          <div className="row">
            <div className="mobile-card">
              <div className="row col-12 offset-0 p-0">
                <div className="imge-12-Text mge-12-a">
                  <span>
                    {identity === 0
                      ? '推薦課程'
                      : '熱門課程'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="indexBigImg21 container-fluid w-100">
          <div className="row w-100 m-0 ">
            <div className="col-12 offset-0 p-0">
              <div className="mobile-card">
                {identity === 0 ? (
                  <MobileSliderST />
                ) : (
                  <MobileSlider />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg22 container-fluid">
          <div className="row">
            <div className="mobile-card">
              <div className="row col-12 offset-0 p-0 ">
                <div className="imge-12-Text mge-12-a-b">
              {/* <div>aaaa</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg10 container-fluid">
          <div className="row col-12 offset-0 p-0">
            <div className="imge-2-Text offset-1">
              <div className="top-a">
                <span>快加入我們吧!!</span>
              </div>
            </div>
            <div className="imge-3-Text  offset-0">
              <div className="top-b">
                <span>
                  對於教學有熱誠? 對於學習語言有興趣?
                </span>
              </div>
            </div>
            <div className="row w-100 m-0">
              <div className="col-md-12 offset-md-0 ">
                <div className="card-a">
                  <div className="yellow-area-but-4-index col-12 offset-1">
                    {identity === '' ? (
                      <Link to="/SignUp">
                        <button className="btn checkoutBtn-y">
                          快來註冊吧!
                        </button>
                      </Link>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 m-0">
              <div className="col-md-3 offset-md-8 ">
                <div className="imge-4-Text offset-1">
                  <div className="top-c ">
                    <span>
                      {identity === 0
                        ? '推薦課程'
                        : '熱門課程'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg11 container-fluid">
          <div className="row col-12 offset-0 p-0">
            <div className="row w-100 m-0 ">
              <div className="col-md-12 offset-md-0 ">
                {/* <span>bbbb</span> */}
                <div className="container mt-5 carousel">
                  {identity === 0 ? (
                    <ImageSliderST />
                  ) : (
                    <ImageSlider />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg16 container-fluid">
          <div className="row col-12 offset-0 p-0">
            <div className="row w-100 m-0 ">
              <div className="col-md-2 offset-md-1 col-7 offset-5 p-0">
                <div className="imge-4-Text ">
                  <div className="top-c ">
                    <span>
                      {identity === 0
                        ? '國際角落'
                        : '熱門文章'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="indexBigImg17 container-fluid">
          <div className="row col-12 offset-0 p-0">
            <div className="row col-12 justify-content-center d-flex">
              {identity === 0 ? (
                <div className="coursesection col-md-12 col-lg-12">
                  {/* <Link
                    to={`/ArtIndex/ArtMessage?articleSid=101`}
                  >
                    <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/12.png`}
                        alt=""
                      />
                    </div>
                  </Link> */}

                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/12.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          太陽召喚
                        </h3>
                        <span className="WanderIndex-post">
                          #熱門影集
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArtMessage?articleSid=101`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <Link
                    to={`/ArtIndex/ArtMessage?articleSid=96`}
                  >
                    <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/13.png`}
                        alt=""
                      />
                    </div>
                  </Link> */}

                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/13.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          不朽者
                        </h3>
                        <span className="WanderIndex-post">
                          #熱門影集
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArtMessage?articleSid=96`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 
                  <Link
                    to={`/ArtIndex/ArtMessage?articleSid=99`}
                  >
                    <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/14.png`}
                        alt=""
                      />
                    </div>
                  </Link> */}

                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/14.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          末日列車
                        </h3>
                        <span className="WanderIndex-post">
                          #熱門影集
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArtMessage?articleSid=99`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="coursesection col-md-12 col-lg-12">
                  {/* <Link
                    to={`/ArtIndex/ArticleMessage?articleSid=101`}
                  >
                    <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/06.png`}
                        alt=""
                      />
                    </div>
                  </Link> */}
                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/06.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          后翼棄兵
                        </h3>
                        <span className="WanderIndex-post">
                          #熱門影集
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=101`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <Link
                    to={`/ArtIndex/ArticleMessage?articleSid=96`}
                  >
                    <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/07.png`}
                        alt=""
                      />
                    </div>
                  </Link> */}
                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/07.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          燃燒自我的限時烏托邦
                        </h3>
                        <span className="WanderIndex-post">
                          #異國節慶
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=96`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="index-articleitem">
                    <div className="WanderIndex-box">
                      <img
                        src={`${devUrl}/images/index/08.png`}
                        alt=""
                      />
                      <div className="WanderIndex-box-content">
                        <h3 className="WanderIndex-title">
                          黑道律師文森佐
                        </h3>
                        <span className="WanderIndex-post">
                          #熱門影集
                        </span>
                        <ul className="WanderIndex-icon">
                          <li>
                            <Link
                              to={`/ArtIndex/ArticleMessage?articleSid=103`}
                            >
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="index-articleitem">
                      <img
                        src={`${devUrl}/images/index/08.png`}
                        alt=""
                      />
                    </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="indexBigImg19 container-fluid">
          <div className="row col-12 ">
            <div className="row w-100 m-0 ">
              <Link to={`/ArtIndex/ArtAll`}>
                <div className="col-md-6 offset-5 p-0 popular-card-but">
                  <button className="btn a-checkoutBtn-a ">
                    更多文章
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="indexBigImg20 container-fluid">
          <div className="mobile-card">
            <Link to={`/ArtIndex/ArtAll`}>
              <button className="btn checkoutBtn-m">
                更多文章
              </button>
            </Link>
          </div>
        </div>

        <div className="indexBigImg18 container-fluid">
          <div
            className="recommendation"
            id="recommendation"
          >
            <div className="wrap">
              <h3 className="section-title">
                <span className="section-title-span1">
                  好評
                </span>
                <span className="section-title-span2">
                  推薦
                </span>
              </h3>
              <div className="recommendation-wall ">
                <ul className="gallery-top animate">
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/01.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/01.png`}
                          alt=""
                        />
                        <div>
                          <h6>penny</h6>
                          <p className="recommend-text">
                            旅遊英文一把罩
                          </p>
                        </div>
                      </div>
                      <p>
                        實用簡單，課程規劃不會太長好吸收。
                      </p>
                    </div>
                  </li>
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/02.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/02.png`}
                          alt=""
                        />
                        <div>
                          <h6>Liz</h6>
                          <p className="recommend-text">
                            求職英文
                          </p>
                        </div>
                      </div>
                      <p>還不錯，容易記憶。</p>
                    </div>
                  </li>
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/03.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/03.png`}
                          alt=""
                        />
                        <div>
                          <h6>water</h6>
                          <p className="recommend-text">
                            社交話題不斷電
                          </p>
                        </div>
                      </div>
                      <p>課程架構清晰，值得推薦。</p>
                    </div>
                  </li>
                </ul>
                <ul className="gallery-bottom animate">
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/04.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/04.png`}
                          alt=""
                        />
                        <div>
                          <h6>940</h6>
                          <p className="recommend-text">
                            英文情境會話開口說
                          </p>
                        </div>
                      </div>
                      <p>
                        有邏輯的一門課，真是獲益良多！！
                      </p>
                    </div>
                  </li>
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/05.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/05.png`}
                          alt=""
                        />
                        <div>
                          <h6>PP</h6>
                          <p className="recommend-text">
                            700+分數保證多益課程
                          </p>
                        </div>
                      </div>
                      <p>很容易吸收的課程，收穫滿滿。</p>
                    </div>
                  </li>
                  <li className="recommendation-card">
                    <img
                      src={`${devUrl}/images/index/Praise/06.png`}
                      alt=""
                    />
                    <div className="recommend-content">
                      <div className="recommend-img">
                        <img
                          src={`${devUrl}/images/index/Praise/avatar/06.png`}
                          alt=""
                        />
                        <div>
                          <h6>Jennie</h6>
                          <p className="recommend-text">
                            生活英文實用課程
                          </p>
                        </div>
                      </div>
                      <p>課程內容優質、老師口條清晰。</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="indexBG"></div>
      <HomeBgDecorationNormal />
      <div className="indexBigFooter container-fluid">
        <Footer />
      </div>
    </>
  )
}

export default WanderIndex
