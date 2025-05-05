import React from 'react';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  return (
   <section className= {styles.newsContainer}>
    <h3 className= {styles.newsTitle}>Новини та акції</h3>
    <img src="/product/logo.png" alt="logo" className= {styles.newsImage} />
    <div className={styles.newsMoreInfo}>
        <time datetime="22.02.2018" className= {styles.time}>22.02.2018</time>
        <button className={styles.newsMoreInfoBtn}>
            <span className= {styles.BtnSpan}>Детальніше</span>
            </button>
    </div>
    <div className= {styles.newsLinkContainer}>
           <a target='_blank' href="https://chernigov.florella.com.ua/index.php?route=information/news" className={styles.newsLink}>
              Всі новини
              </a>
              </div>
   </section>
  )
}
