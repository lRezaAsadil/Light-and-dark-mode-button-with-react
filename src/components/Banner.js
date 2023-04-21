import React from "react";
import styles from "./Banner.module.css";
import banner1 from "./img/1.jpg";
import banner2 from "./img/2.jpg";
export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.banner2}>
        <img src={banner2} alt="" />
      </div>
      <div className={styles.banner1}>
        <img src={banner1} alt="" />
      </div>
    </div>
  );
}
