import React from 'react'
import { Link } from 'react-router-dom'
import { devUrl } from '../config'

function Footer(props) {
  const { cartFooterMb } = props
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
          <div className="row footer-left">
            <Link to="/">
              <img
                id="Footer-Desktop-Logo"
                src={`${devUrl}/images/logo/footer_desktop.png`}
                alt=""
              />
            </Link>
            <div className="mx-auto">
              <Link to="/">
                <img
                  id="Footer-Mobile-Logo"
                  src={`${devUrl}/images/logo/footer_mobile.png`}
                  alt=""
                />
              </Link>
            </div>
            <div className="Footer-page-links">
              <Link to="">關於我們</Link>
              <Link to="">常見問題</Link>
              <Link to="">國際角落</Link>
            </div>
          </div>
          <div className="row footer-right">
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
      </footer>
    </>
  )
}

export default Footer
