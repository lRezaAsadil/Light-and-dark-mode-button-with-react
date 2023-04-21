import React, { useEffect, useState } from "react";
import "./App.css";
import Styles from "./components/Navbar.module.css";
import logo from "./components/img/84894.png";
import "./components/Navbar.css";
import Banner from "./components/Banner";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Products from "./components/Products";

const AllCom = () => {
  const getMode = () => {
    const init = localStorage.getItem("mode");
    if (init == null) {
      if (window.matchMedia("(prefers-color-scheme: Dark)").matches) {
        return false;
      } else {
        return true;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };
  // const getMode = () => {
  //     const initialMode = localStorage.getItem("mode");
  //     if (initialMode == null) {
  //       if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //           return false;
  //         } else {
  //           return true
  //       }
  //     } else {
  //       return JSON.parse(localStorage.getItem("mode"));
  //     }
  //   }
  const [dark, setDark] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
    console.log(dark);
  }, [dark]);
  return (
    <div className={dark ? `${Styles.bgL}` : `${Styles.bgD} `}>
      <div>
        <header
          className={
            dark ? `${Styles.header}` : `${Styles.header} ${Styles.headerD}`
          }>
          <div className={Styles.navbarLoge}>
            <img src={logo} alt="" />
          </div>
          <div className={Styles.navbarList}>
            <ul className={Styles.NavbarUl}>
              <li>خانه</li>
              <li>دوره ها</li>
              <li>مقالات</li>
              <li>رزرو وقت مشاوره</li>
              <li>تماس با ما</li>
            </ul>
          </div>
          <div>
            <div className="left">
              <div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={dark}
                    onChange={() => setDark(!dark)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className={Styles.headerLogin}>
                <ul>
                  <li>ورود</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Banner />
          <Divider DorL={dark} />
          <Products DorL={dark} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AllCom;
