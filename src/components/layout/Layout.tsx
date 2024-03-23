import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import CloseButton from "../close-button/CloseButton";

const Layout = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (burgerMenuActive) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [burgerMenuActive]);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logoWrapper}>
          <h1 className={styles.logoTitle}>Айрат Ахметханов</h1>
          <span className={styles.logoSubTitle}>интерьерный фотограф</span>
        </NavLink>
        <nav
          className={`${styles.nav} ${burgerMenuActive ? styles.burgerMenuActive : ""}`}
          ref={navRef}
          role="presentation"
        >
          <ul className={styles.navList} id="navList">
            <NavLink to="/" className={styles.navLink} onClick={() => setBurgerMenuActive(false)}>
              Портфолио
            </NavLink>
            <NavLink
              to="/publications"
              className={styles.navLink}
              onClick={() => setBurgerMenuActive(false)}
            >
              Публикации
            </NavLink>
            <NavLink
              to="/archive"
              className={styles.navLink}
              onClick={() => setBurgerMenuActive(false)}
            >
              Архив
            </NavLink>
            <NavLink
              to="/contact"
              className={styles.navLink}
              onClick={() => setBurgerMenuActive(false)}
            >
              Контакты
            </NavLink>
            {/* <NavLink
              to="/about"
              className={`${styles.navLink} ${navLinkAbout}
              onClick={() => setBurgerMenuActive(false)}
            >
              О себе
            </NavLink> */}
          </ul>
          <div
            className={`${styles.closeButtonWrapper} ${burgerMenuActive ? styles.closeButtonWrapperActive : ""}`}
            onClick={() => {
              setBurgerMenuActive(false);
            }}
            role="presentation"
          >
            <CloseButton />
          </div>
        </nav>
        <div
          className={`${styles.burgerMenuButton} ${burgerMenuActive ? styles.burgerMenuActive : ""}`}
          onClick={() => {
            setBurgerMenuActive(true);
          }}
          role="presentation"
        >
          <span className={styles.burgerMenuButtonLine} />
          <span className={styles.burgerMenuButtonLine} />
          <span className={styles.burgerMenuButtonLine} />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
