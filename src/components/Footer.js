import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="d#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="d#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="d#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#d">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2021 Reza Asadi</p>
        </footer>
      </div>
    );
  }
}
