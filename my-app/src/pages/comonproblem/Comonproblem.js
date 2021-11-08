import React, { useState, useEffect, useRef } from 'react'
import { devUrl } from '../../config'
import './comonproblem.css'
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

import ComonproblemDecorationNormal from '../../components/articles/ComonproblemDecorationNormal'

import Chevron from './chevron.svg'

function Comonproblem() {
  const [toggle, setToggle] = useState(false)
  const [togglea, setTogglea] = useState(false)
  const [toggleb, setToggleb] = useState(false)
  const [togglec, setTogglec] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [togglee, setTogglee] = useState(false)

  const [heightEl, setHeightEl] = useState()

  const refHeight = useRef()

  useEffect(() => {
    console.log(refHeight)
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
    setToggle(!toggle)
  }

  const toggleStatea = () => {
    setTogglea(!togglea)
  }

  const toggleStateb = () => {
    setToggleb(!toggleb)
  }
  const toggleStatec = () => {
    setTogglec(!togglec)
  }
  const toggleStated = () => {
    setToggled(!toggled)
  }
  const toggleStatee = () => {
    setTogglee(!togglee)
  }

  return (
    <>
      <div className="container mainContent">
        <MultiLevelBreadCrumb />

        <div className="row comport-img">
          <div className="col-10 ml-auto comp-pageName ">
            <span className="comp-pageNameText ">
              常見問題
            </span>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="coursesection col-md-12 col-lg-12 comport-img-accordion ">
            <div className="col-12 ml-auto comp2-pageName ">
              <span className="comp2-pageNameText ">
                經常問的問題
              </span>
            </div>
            <div className="accordion">
              <div>
                <button
                  onClick={toggleState}
                  className="accordion-visible"
                >
                  <span>退款狀態：常見問題</span>
                  <img
                    className={toggle ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    toggle
                      ? 'accordion-toggle animated'
                      : 'accordion-toggle'
                  }
                  style={{
                    height: toggle ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={toggle ? 'true' : 'false'}
                  >
                    課程購買可在購買後 30
                    天內退款。以下是我們收到的有關退款的一些最常見問題的答案，以及該過程需要多長時間。
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleStatea}
                  className="accordion-visible"
                >
                  <span>如何找到您遺漏的課程</span>
                  <img
                    className={togglea ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    togglea
                      ? 'accordion-togglea animated'
                      : 'accordion-togglea'
                  }
                  style={{
                    height: togglea ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={togglea ? 'true' : 'false'}
                  >
                    如果您購買了一門課程，但它沒有顯示在您的
                    學生帳戶的“我的課程”部分，請聯繫我們團隊。
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleStateb}
                  className="accordion-visible"
                >
                  <span>
                    如何下載您的結業證書（在瀏覽器上）{' '}
                  </span>
                  <img
                    className={toggleb ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    toggleb
                      ? 'accordion-toggleb animated'
                      : 'accordion-toggleb'
                  }
                  style={{
                    height: toggleb ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={toggleb ? 'true' : 'false'}
                  >
                    目前才有線上申請的方式，如果有問題請聯繫我們團隊。
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleStatec}
                  className="accordion-visible"
                >
                  <span>Wander 上的付款方式</span>
                  <img
                    className={togglec ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    togglec
                      ? 'accordion-togglec animated'
                      : 'accordion-togglec'
                  }
                  style={{
                    height: togglec ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={togglec ? 'true' : 'false'}
                  >
                    目前只支持，只支持超商付款方式。
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleStated}
                  className="accordion-visible"
                >
                  <span>如何解決付款問題</span>
                  <img
                    className={toggled ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    toggled
                      ? 'accordion-toggled animated'
                      : 'accordion-toggled'
                  }
                  style={{
                    height: toggled ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={toggled ? 'true' : 'false'}
                  >
                    如果您在嘗試購買課程時遇到錯誤，請聯繫我們團隊。
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={toggleStatee}
                  className="accordion-visible"
                >
                  <span>Wander 如何運作？</span>
                  <img
                    className={togglee ? '' : 'active'}
                    src={Chevron}
                    alt=""
                  />
                </button>

                <div
                  className={
                    togglee
                      ? 'accordion-togglee animated'
                      : 'accordion-togglee'
                  }
                  style={{
                    height: togglee ? `${heightEl}` : '0px',
                  }}
                  ref={refHeight}
                >
                  <p
                    aria-hidden={togglee ? 'true' : 'false'}
                  >
                    目前可以電腦上課和手機上課。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="coursesection col-md-12 col-lg-12 comport-img-accordion-img ">
            <div className="col-12 ml-auto comp2-pageName ">
              <span className="comp2-pageNameText ">
                選擇一個主題來搜索幫助
              </span>
            </div>
            <ul className="gride cs-style-2">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/1-1.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>入門</span>

                    <Link to="#/">
                      了解Wander
                      的工作原理以及如何開始學習。
                    </Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="grid cs-style-4">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/1-2.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>
                      帳戶/
                      <br />
                      個人資料
                    </span>

                    <Link to="#/">管理您的帳戶設置。</Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="grid cs-style-4">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/1-3.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>故障排除</span>

                    <Link to="#/">
                      遇到技術問題？檢查這裡。
                    </Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="grid cs-style-4">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/2-1.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>選課</span>

                    <Link to="#/">
                      關於參加 Wander 課程的一切。
                    </Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="grid cs-style-4">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/2-2.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>購買/退款</span>

                    <Link to="#/">
                      了解購買課程、如何退款。
                    </Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className="grid cs-style-4">
              <li>
                <figure>
                  <div>
                    <img
                      src={`${devUrl}/images/common/2-3.png`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    <span>移動裝置</span>

                    <Link to="#/">
                      在旅途中？了解我們的行動裝置。
                    </Link>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ComonproblemDecorationNormal />
      <div className="bgbeige"> </div>
      <Footer />
    </>
  )
}

export default Comonproblem
