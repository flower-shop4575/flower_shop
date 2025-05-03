import React from 'react'
import styles from '../Section/Section.module.css';

export const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.items__1}>Букети </div>
      <div className={styles.items__1}>Троянди</div>
      <div className={styles.items__2}>Подарунки</div>
      <div className={styles.items__2}>Кімнатні рослини</div>
      <div className={styles.item__3}>Квіти в боксах</div>
    </section>
  )
}
