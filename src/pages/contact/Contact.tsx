import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <p>ayratakhmetkhanov@gmail.com</p>
      <button onClick={() => navigator.clipboard.writeText("Your text for copy")} type="button">
        123
      </button>
      <Link to="https://wa.me/+79520431431">Написать в WatsApp</Link>
      <Link to="https://t.me/+79520431431">Написать в Telegramm</Link>
      <Link to="tel:PHONE_NUM"> PHONE_NUM </Link>
    </div>
  );
};

export default Contact;
