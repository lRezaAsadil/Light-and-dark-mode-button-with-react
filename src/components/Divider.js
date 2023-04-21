import React from "react";
import Styles from "./Divider.module.css";
export default function Divider({DorL}) {
  return (
    <div className={Styles.container}>
      <button className={Styles.button}> &#10094; مشاهده تمام دوره ها </button>
      <h1 className={DorL ?`${Styles.titleL}` : `${Styles.titleD} `}> برترین دوره ها</h1>
    </div>
  );
}
