import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav/Nav.jsx';
import ControlPanel from './ControlPanel/ControlPanel.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.navigationPanel}>
          <Nav />
          <ControlPanel />
        </div>
      </div>
    </header>
  );
}