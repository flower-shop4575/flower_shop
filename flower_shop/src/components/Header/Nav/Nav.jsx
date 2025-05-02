import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.listItem}><a href="#"><img src='/assets/aboutUs.svg' alt="about" />Про нас</a></li>
        <li className={styles.listItem}><a href="#"><img src="/assets/car.svg" alt="" />Доставка</a></li>
        <li className={styles.listItem}><a href="#"><img src="/assets/dollar.svg" alt="" />Оплата</a></li>
        <li className={styles.listItem}><a href="#"><img src="/assets/smile.svg" alt="" />Відгуки</a></li>
        <li className={styles.listItem}><a href="#"><img src="/assets/offerta.svg" alt="" />Оферта</a></li>
        <li className={styles.listItem}><a href="#"><img src="/assets/contacts.svg" alt="" />Контакти</a></li>
      </ul>
    </nav>
  )
}
