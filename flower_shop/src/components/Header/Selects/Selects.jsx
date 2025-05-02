import React from 'react';
import styles from './Selects.module.css';

export default function Selects() {
  return (
    <div className={styles.selectWrapper}>
      <div className={styles.customSelect}>
        <select className={styles.select}>
          <option value="uah">ГРН</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>

      <div className={styles.customSelect}>
        <select className={styles.select}>
          <option value="uk">Українська</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  );
}