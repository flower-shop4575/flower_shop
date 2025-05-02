import React from 'react';
import styles from './Selects.module.css';

export default function Selects() {
  return (
    <div className={styles.selectWrapper}>
      <div className={styles.customSelect}>
        <select className={styles.select}>
          <option value="uah">ГРН</option>
          <option value="usd">USD</option>
         
        </select>
      </div>

      <div className={styles.customSelect}>
        <select className={styles.select}>
          <option value="uk">UK</option>
          <option value="en">EN</option>
         
        </select>
      </div>
    </div>
  );
}