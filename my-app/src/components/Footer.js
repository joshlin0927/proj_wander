import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer class="footerWrap">
        <div class="wanderFooter container">
          <div class="row footer-left">
            <img
              id="Footer-Desktop-Logo"
              src="../images/logo/footer_desktop.png"
            />
            <img
              id="Footer-Mobile-Logo"
              src="../images/logo/footer_mobile.png"
            />
            <div class="Footer-page-links">
              <Link to="">關於我們</Link>
              <Link to="">常見問題</Link>
              <Link to="">國際角落</Link>
            </div>
          </div>
          <div class="row footer-right">
            <div class="icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div class="version-icon">
              <div class="icon-sp">
                <img
                  src="../images/elements/icon-mobile.svg"
                  alt=""
                />
                手機版
              </div>
              <div class="icon-sp">
                <img
                  src="../images/elements/icon-monitor.png"
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
