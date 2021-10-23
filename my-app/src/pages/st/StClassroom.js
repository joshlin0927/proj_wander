import React from 'react'
import './style/classroom.css'
import { devUrl } from '../../config'

//共用元件
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import StSideBar2 from '../../components/st/StSideBar2'

export default function StClassroom() {
  return (
    <>
      <div class="container mainContent">
        <div class="row">
          <MultiLevelBreadCrumb />
          <div class="col-10 ml-auto pageName">
            <span class="pageNameText class">Class</span>
          </div>
        </div>

        <div class="row mb150">
          <StSideBar2 />
          <div class="player col-7 mo-none">
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
          <div class="playlist col-3 mo-none">
            <div class="first clip">
              <p>自我介紹</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
          </div>
        </div>

        <div class="row mb30 des-none">
          <div class="player col-12">
            <div class="play">
              <img
                src="../public/imgs/網頁素材/play_circle_outline.svg"
                alt=""
              />
            </div>
            <div class="video">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div class="row  mb30 des-none ">
          <div class="playlist col-8">
            <div class="first clip">
              <p>自我介紹</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>西班牙文基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
            <div class="clip">
              <p>基礎發音</p>
              <p>02:33</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
