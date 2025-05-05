import React from 'react';
import styles from './FeedBackSection1.module.css';

export default function FeedBackSection1() {
  return (
   <section className= {styles.feedBackContainer1}>
    <div className= {styles.feedBack1Wrapper}>
        <p className= {styles.FeedBack1Paragraph}>Підпишись і отримуй найсвіжіші новини та акції на свою електронну <br /> пошту!</p>
        <div className={styles.feedBackInputContainer}>
        <input type= "email" placeholder="Email..." className={styles.FeedBack1Input} />
        <button className={styles.feedBackButton}><span className={styles.FeedBackSpan}>Підписатись</span></button>
        </div>
    </div>
   </section>
  )
}
