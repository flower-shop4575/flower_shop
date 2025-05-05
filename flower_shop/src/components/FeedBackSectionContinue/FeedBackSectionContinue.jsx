import React from 'react';
import styles from './FeedBackSectionContinue.module.css';

export default function FeedBackSection2() {
  return (
    <section className={styles.feedBackContainer2}>
      <div className= {styles.leftSide}>
      <img src="/control/error.png" alt="error" />
      <h5 className={styles.title2}>Oops! Something went wrong.</h5>
      <p className={styles.subtitle2}>This page didn't load Google Maps correctly. See the JavaScript console
      for technical details.</p>
      </div>
      <div className= {styles.rightSide}>
      <img src="/control/florela.png" alt="florela" className={styles.rightImg} />
      <ul>
        <li className={styles.rightItem}>
          <img src="/assets/phone.svg" alt="phone" />
          <p className={styles.rightSubtitle}>+38(093)08 41 801</p>
        </li>
        <li className={styles.rightItem}>
          <img src="/assets/clock.svg" alt="clock" />
        <p className={styles.rightSubtitle}>9:00 - 21:00</p>
        </li>
        <li>
          <button className={styles.rightBtn}>
          <span className={styles.rightSpn}>Зворотній дзвінок</span>
          </button>
          </li>
      </ul>
      <ul>
        <li className={styles.rightItem1}>
          <img src="/assets/telegram.svg" alt="telegram" />
          <p className={styles.rightSubtitle}>florellaukr@gmail.com</p>
        </li>
        <li>
          <button className={styles.rightBtn}>
          <span className={styles.rightSpn}>Написати нам</span>
          </button>
          </li>
      </ul>
      <ul>
        <li className={styles.rightItem}>
          <img src="/assets/geol.svg" alt="geo" />
          <p className={styles.rightSubtitle1}>Україна, м. Чернігів, вул. Мстиславська 20 9:00</p>
         </li>
      </ul>
      </div>
    </section>
  )
}
