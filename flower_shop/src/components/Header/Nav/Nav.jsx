import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src='/assets/aboutUs.svg' alt="about" />Про нас</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src="/assets/car.svg" alt="" />Доставка</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src="/assets/dollar.svg" alt="" />Оплата</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src="/assets/smile.svg" alt="" />Відгуки</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src="/assets/offerta.svg" alt="" />Оферта</a></li>
        <li className={styles.listItem}><a className={styles.link} href="#"><img className={styles.icon} src="/assets/contacts.svg" alt="" />Контакти</a></li>
      </ul>
    </nav>
  )
}
