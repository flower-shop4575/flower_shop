import React from 'react';
import styles from './InstaSection.module.css';

export default function InstaSection() {
  return (
    <div className={styles.instaContainer}>
    <p className= {styles.instaParagraph}>Наш Instagram</p>
    <img src="/product/logo.png" alt="logo" />
    <img src="/product/insta.svg" alt="inst" />
    <a target='_blank' href="https://www.instagram.com/florella_chernihiv/" className={styles.instaLink}>
    Більше фото в Instagram
    </a>
</div>
  )
}
