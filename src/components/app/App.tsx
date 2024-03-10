import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <NavLink to="/" className={styles.logoWrapper}>
          <h1 className={styles.logoTitle}>{t('full name')}</h1>
          <span className={styles.logoSubTitle}>interior photographer</span>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logoWrapper}>
            Overview
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default App;
