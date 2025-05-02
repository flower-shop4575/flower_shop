import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <section className= {styles.mainBanner}>
        <div className={styles.logoContainer}>
        <img src="fon/logo.svg" alt="logo" />
        </div>
    </section>
  )
}
