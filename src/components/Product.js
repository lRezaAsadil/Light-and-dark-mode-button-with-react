import React, { Component } from "react";
import styles from "./Product.module.css";
// import { Row , Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import teacher from "./img/teacher1.jpg";
export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  clickUpHandler = () => {
    if (this.state.number <= 9) {
      this.setState((prevState) => ({
        number: prevState.number + 1,
      }));
    }
  };
  clickDownHandler = () => {
    if (this.state.number >= 1) {
      this.setState((prevState) => ({
        number: prevState.number - 1,
      }));
    }
  };
  render() {
    const { img, title, price, num1, num2 } = this.props;
    const { number } = this.state;
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={img} alt="" />
        </div>
        <div className={styles.cardBody}>
          <h2>{title}</h2>
          <div className={styles.cardTeachers}>
            <div className={styles.cardTeacher}>
              <img src={teacher} alt="" />
              <h3>محمدحسین جهان شاد </h3>
            </div>
          </div>
        </div>
        <div
          className={`${styles.divider} ${styles.divTransparent} ${styles.divArrowDown}`}></div>
        <div className={styles.cardFooter}>
          <div className={styles.cardIcon}>
            <i class="bi bi-person-fill">
              <span>{num2}</span>
            </i>
            <i className="bi bi-chat-square-fill">
              <span>{num1}</span>
            </i>
            <span className={styles.number}>
              <span className={number > 9 ? styles.opacity : ""}>
                <i className="bi bi-plus-square" onClick={this.clickUpHandler}></i>
              </span>
              <span>{number}</span>
              <span className={number ? "" : styles.opacity}>
                <i
                  className="bi bi-dash-square"
                  onClick={this.clickDownHandler}></i>
              </span>
            </span>
          </div>
          <div className={styles.cardPrice}>
            <span className={styles.number}>{price} </span>
            <span className={styles.text}> تومان</span>
          </div>
        </div>
      </div>
    );
  }
}
