import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav/Nav.jsx';
import Korzyna from './Korzyna/Korzyna.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
    <Nav></Nav>
    <Korzyna></Korzyna>
    </div>
    </header>
  )
}
