import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage: (language: string) => void = (language) => i18n.changeLanguage(language);

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
          <button onClick={() => changeLanguage('ru')} type="button">
            RU
          </button>
          <button onClick={() => changeLanguage('en')} type="button">
            EN
          </button>
        </nav>
      </header>
    </div>
  );
}

export default App;
