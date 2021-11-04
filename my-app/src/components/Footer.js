import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { devUrl } from '../config'

function Footer(props) {
  const { cartFooterMb } = props
  const member = localStorage.getItem('member')
    ? JSON.parse(localStorage.getItem('member'))
    : ''
  const identity = member ? member.identity : ''
  //申請表的顯示
  const [isShow, setIsShow] = useState(false)
  const handleIsClose = () => setIsShow(false)
  const handleIsShow = () => setIsShow(true)
  return (
    <>
      <footer
        className={
          cartFooterMb
            ? 'footerWrap cartFooterMargin'
            : 'footerWrap'
        }
      >
        <div className="wanderFooter container">
          <div className="footer-left">
            <div className="Footer-Desktop-Logo">
              <Link to="/">
                <img
                  src={`${devUrl}/images/logo/footer_desktop.png`}
                  alt=""
                />
              </Link>
            </div>

            <div className="mx-auto">
              <Link to="/">
                <img
                  className="Footer-Mobile-Logo"
                  src={`${devUrl}/images/logo/footer_mobile.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="Footer-page-links col-12 col-md-8">
              <Link to="#/">關於我們</Link>
              <Link to="#/">常見問題</Link>
              {identity === 0 ? (
                <Link to="/ArtIndex/ArticleSt">
                  國際角落
                </Link>
              ) : (
                <Link to="/ArtIndex/Article">熱門文章</Link>
              )}
            </div>
          </div>
          <div className="footer-right">
            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <div className="version-icon">
              <div className="icon-sp">
                <img
                  src={`${devUrl}/images/elements/icon-mobile.svg`}
                  alt=""
                />
                手機版
              </div>
              <div className="icon-sp">
                <img
                  src={`${devUrl}/images/elements/icon-monitor.png`}
                  alt=""
                />
                電腦版
              </div>
            </div>
          </div>
        </div>
        <div className="footerFill"></div>
      </footer>
      <Modal show={isShow} onHide={handleIsClose} centered>
        <Modal.Header>
          <Modal.Title>影片資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="resume">
            <input
              className="col-12 allInputs bgt"
              placeholder="請輸入影片標題 "
            />
            <button
              type="submit"
              className="btn-secondary browse"
            >
              更改名稱
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Footer
