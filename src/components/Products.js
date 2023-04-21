import React, { Component } from "react";
import styles from "./Products.module.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import img1 from "./img/hard-ware-397x227.jpg";
import img2 from "./img/network-vip-2-397x227.jpg";
import img3 from "./img/web-397x227.jpg";
import img4 from "./img/python-2-397x227.jpg";
import img5 from "./img/android-v4-397x227.jpg";
import img6 from "./img/linux-v2-397x227.jpg";
import img7 from "./img/network-v4-397x227.jpg";
import img8 from "./img/pass-v4-397x227.jpg";
export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          img: img1,
          title: "دوره آموزشی سخت افزار",
          price: "6 میلیون ",
          num1: 139,
          num2: 3180,
        },
        {
          id: 2,
          img: img2,
          title: "دوره نت ورک پلاس (+CCNA - NETWORK)",
          price: "8 میلیون ",
          num1: 33,
          num2: 282,
        },
        {
          id: 3,
          img: img3,
          title: "دوره اصول و مبانی طراحی سایت",
          price: "6 میلیون ",
          num1: 19,
          num2: 90,
        },
        {
          id: 4,
          img: img4,
          title: "دوره برنامه نویسی پایتون",
          price: "5 میلیون ",
          num1: 46,
          num2: 790,
        },
        {
          id: 5,
          img: img5,
          title: 'آموزش برنامه نویسی اندروید 2022  "کاتلین"',
          price: "5.5 میلیون ",
          num1: 38,
          num2: 1906,
        },
        {
          id: 6,
          img: img6,
          title: "دوره لینوکس اوبونتو 2022",
          price: "1 میلیون ",
          num1: 12,
          num2: 554,
        },
        {
          id: 7,
          img: img7,
          title: "دوره مقدماتی آموزش شبکه",
          price: "1.5 میلیون ",
          num1: 6,
          num2: 226,
        },
        {
          id: 8,
          img: img8,
          title: "وبینار پسورد نویسی",
          price: "400هزار ",
          num1: 90,
          num2: 185,
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <Row>
          {this.state.data.map((item) => (
            <Col sm={6} md={4} lg={3}>
              {" "}
              <Product
                img={item.img}
                title={item.title}
                price={item.price}
                num1={item.num1}
                num2={item.num2}
                key={item.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
