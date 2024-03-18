import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Gallery from '../gallery/Gallery';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.app}>
            <header className={styles.header}>
              <NavLink to="/" className={styles.logoWrapper}>
                <h1 className={styles.logoTitle}>Айрат Ахметханов</h1>
                <span className={styles.logoSubTitle}>интерьерный фотограф</span>
              </NavLink>
              <nav className={styles.nav}>
                <ul className={styles.navList} id="navList">
                  <NavLink to="/" className={styles.navLink}>
                    Главная
                  </NavLink>
                  <NavLink to="/about" className={styles.navLink}>
                    Публикации
                  </NavLink>
                  <NavLink to="/about" className={styles.navLink}>
                    Архив
                  </NavLink>
                  <NavLink to="/about" className={styles.navLink}>
                    Контакты
                  </NavLink>
                  <NavLink to="/about" className={styles.navLink}>
                    О себе
                  </NavLink>
                </ul>
              </nav>
            </header>
            <Gallery />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
