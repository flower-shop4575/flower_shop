import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.listItem}><a href="#">Про нас</a></li>
        <li className={styles.listItem}><a href="#">Доставка</a></li>
        <li className={styles.listItem}><a href="#">Оплата</a></li>
        <li className={styles.listItem}><a href="#">Відгуки</a></li>
        <li className={styles.listItem}><a href="#">Оферта</a></li>
        <li className={styles.listItem}><a href="#">Контакти</a></li>
      </ul>
    </nav>
  )
}
