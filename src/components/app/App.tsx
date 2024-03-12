import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styles from './App.module.css';
import IMG4409 from '../../assets/images/IMG_4409-HDR.webp';
import IMG4438 from '../../assets/images/IMG_4438-HDR.webp';
import IMG4449 from '../../assets/images/IMG_4449-HDR.webp';
import IMG4523 from '../../assets/images/IMG_4523-HDR.webp';
import IMG4598 from '../../assets/images/IMG_4598-HDR.webp';
import IMG4643 from '../../assets/images/IMG_4643-HDR.webp';

const galleryImages = [IMG4409, IMG4438, IMG4449, IMG4523, IMG4598, IMG4643];

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
                    Архив
                  </NavLink>
                  <NavLink to="/about" className={styles.navLink}>
                    О себе
                  </NavLink>
                </ul>
              </nav>
            </header>
            <div className={styles.gallery}>
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1230: 2, 1650: 3, 2100: 4 }}>
                <Masonry gutter="12px">
                  {galleryImages.map((image) => (
                    <img className={styles.image} src={image} alt="interior" key={image} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
