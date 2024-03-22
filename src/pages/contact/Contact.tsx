import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import callIcon from "../../assets/icons/telephone-outgoing-svgrepo-com.svg";
import telegramIcon from "../../assets/icons/telegram-svgrepo-com.svg";
import whatsappIcon from "../../assets/icons/whatsapp-svgrepo-com.svg";
import mailIcon from "../../assets/icons/mail-svgrepo-com.svg";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <ul className={styles.contactList}>
        <li className={styles.contactListItem}>
          <Link className={styles.contactListItemLink} to="tel:+79520431431">
            <img className={styles.contactListItemIcon} src={callIcon} alt="call" />
            Позвонить +79520431431
          </Link>
        </li>
        <li className={styles.contactListItem}>
          <Link className={styles.contactListItemLink} to="https://wa.me/+79520431431">
            <img className={styles.contactListItemIcon} src={whatsappIcon} alt="whatsapp" />
            Написать в WatsApp
          </Link>
        </li>
        <li className={styles.contactListItem}>
          <Link className={styles.contactListItemLink} to="https://t.me/+79520431431">
            <img className={styles.contactListItemIcon} src={telegramIcon} alt="telegram" />
            Написать в Telegram
          </Link>
        </li>
        <li className={styles.contactListItem}>
          <p className={styles.contactListItemText}>
            <img className={styles.contactListItemIcon} src={mailIcon} alt="mail" />
            <span>E-mail:</span> ayratakhmetkhanov@gmail.com
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
