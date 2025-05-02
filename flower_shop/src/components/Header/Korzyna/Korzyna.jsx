import React from 'react';
import styles from './Korzyna.module.css';

export default function Korzyna() {
  return (
    <div className={styles.korzyna}>
      <button className={styles.cartButton}>
        <img className={styles.cartIcon} src="/korzyna/korzyna.svg" alt="korzyna" />
        <span className={styles.itemCount}>0</span>
      </button>
      <span className={styles.totalPrice}>0 грн</span>
    </div>
  );
}