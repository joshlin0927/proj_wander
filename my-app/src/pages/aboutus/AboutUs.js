import React, { useState, useEffect, useRef } from 'react'
import { devUrl } from '../../config'
import './aboutus.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import HomeBgDecorationNormal from '../../components/home/HomeBgDecorationNormal'

import ComonproblemDecorationNormal from '../../components/articles/ComonproblemDecorationNormal'

import Figure from 'react-bootstrap/Figure'

function AboutUs() {
  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />
        <div className="row justify-content-center d-flex">
        <div className="row  col-md-12 col-lg-12  aboutus-img ">
          <div className="col-10 ml-auto comp-pageName ">
            <span className="comp-pageNameText ">
              關於我們
            </span>
          </div>
        </div>
        </div>

        <div className="row justify-content-center d-flex">
          <div className="row  col-md-12 col-lg-12  aboutus-comport-img-accordion ">
            <div className="aboutus-brand-reason col-md-5 col-lg-5  ">
              <br />
              <br />

              <div className="aboutus-art-title-sin">
                品牌緣由
              </div>
              <br />
              <br />
              <div className="TCp-intro-sin">
                <span className="aboutus-logo">Wander</span>
                取英文「漫步」之意。
                <br />
                <br />
                目的提供大學生、職場新鮮人培養第二、甚至第三外語專長,不讓外語成為求學、職場和人際交流的阻礙,悠遊漫步在世界各國。
                <br />
                <br />
                我們透過趣味的小遊戲,依程度推薦學員合適的課程,採單堂一次性收費影片可重複觀看,不必擔心錯過上課時間;課後提供教師一對一聊天室即時解決疑難雜症。重要的是,所有平台教師都是經過申請,官方審核通過後才能取得開課資格。
                <br />
                <br />
                教師也能經營個人品牌的教學空間,包括擁有個人介紹教學經驗及特色的專屬頁面,透過後台數據分析課程的觀看趨勢、留言板與學生互動,即時調整教學節奏。
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="aboutus-brand-reason col-md-5 col-lg-5  ">
              <div className="aboutus-aboutus-m">
                <br />
                <br />
                <br />
                <br />
              </div>
              <img
                src={`${devUrl}/images/aboutus/logo.png`}
                alt=""
              />
            </div>
          </div>
          <div className="coursesection col-md-12 col-lg-12 aboutus-aboutus-comport-img-accordion ">
            <div className="row col-md-12 col-lg-12">
              <div className="aboutus-aboutus-sh-pageName   mx-auto aboutus-aboutus-art-title-sin">
                產品特色
              </div>
            </div>
            <div className="row  col-md-12 col-lg-12">
              <div className="aboutus-grid">
                <img
                  src={`${devUrl}/images/aboutus/01.png`}
                  alt=""
                />
              </div>
              <div className="aboutus-grid">
                <img
                  src={`${devUrl}/images/aboutus/02.png`}
                  alt=""
                />
              </div>
              <div className="aboutus-grid">
                <img
                  src={`${devUrl}/images/aboutus/03.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="row  col-md-12 col-lg-12  aboutus-online-comport-img-accordion">
              <div className="aboutus-brand-reason col-md-5 col-lg-5  ">
                <div className="aboutus-aboutus-m">
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <img
                  src={`${devUrl}/images/aboutus/aboutus2.png`}
                  alt=""
                />
              </div>
              <div className="aboutus-brand-reason col-md-6 col-lg-6  ">
                <br />
                <br />
                <br />

                <div className="aboutus-art-title-sin">
                  線上課程
                </div>
                <br />
                <div className="TCp-intro-sin">
                  <br />
                  <br />
                  現今疫情的時代，線上學習成為當紅的關鍵字,目前線上語言教學平台，琳琅滿目的課程、五花八門收費制度,反而難以找
                  到適合課程。
                  <br />
                  <br />
                  我們提供彈性的時間、高品質的外語教學,並且建立單純收費制度及清楚的
                  課程分類,讓學員外語技能加分,自在漫步世界各國。
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComonproblemDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default AboutUs
