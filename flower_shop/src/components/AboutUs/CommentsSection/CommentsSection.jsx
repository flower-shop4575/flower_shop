import React from "react";
import styles from "./CommentsSection.module.css";

export default function CommentsSection() {
  return (
    <section >
        <div className={styles.commentsContainer}>
      <ul className={styles.commentsList}>
        <li className={styles.commentItem1}>
          <p className={styles.ItemParagraph}>
            Заказ выполняют быстро и своевременно я осталась довольна ;)
          </p>
        </li>
        <li className={styles.commentItem2}>
        <p className={styles.ItemSpan}>Надежда Присяжная</p>
        <time datetime="2018-02-25" className={styles.ItemDate}>2018-02-25</time>
        </li>
       
      </ul>

      <ul className={styles.commentsList}>
        <li className={styles.commentItem1}>
          <p className={styles.ItemParagraph}>
            Идеальное обслуживание, очень милые и заботливые продавцы, теперь за
            цветами только во Florelly!!! Спасибо вам огромное!!!!
          </p>
        </li>
        <li className={styles.commentItem2}>
            <p className={styles.ItemSpan}>Оксана</p>
            <time datetime="2018-02-25" className={styles.ItemDate}>2018-02-25</time>
        </li>
       </ul>

      <ul className={styles.commentsList}>
        <li className={styles.commentItem1}>
          <p className={styles.ItemParagraph}>
            всё супер, беру теперь только тут
          </p>
        </li>
        <li className={styles.commentItem2}>
        <p className={styles.ItemSpan}>Тёма Грищенко</p>
        <time datetime="2018-02-25" className={styles.ItemDate}>2018-02-25</time>
        </li>
      </ul>

      <ul className={styles.commentsList}>
        <li className={styles.commentItem1}>
          <p className={styles.ItemParagraph}>
            Спасибо большое, все вовремя, все красиво и качественно)
          </p>
        </li>
        <li className={styles.commentItem2}>
        <p className={styles.ItemSpan}>Александр Банников</p>
        <time datetime="2018-02-25" className={styles.ItemDate}>2018-02-25</time>
        </li>
      </ul>
      </div>
      <div className= {styles.commentsLinkContainer}>
       <a target='_blank' href="https://chernigov.florella.com.ua/index.php?route=information/reviews" className={styles.commentsLink}>
          Більше відгуків
          </a>
          </div>
    </section>
  );
}
