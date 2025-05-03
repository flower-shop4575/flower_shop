import React from 'react';
import styles from './ProductSection.module.css';

export default function ProductSection() {
  return (
    <section className= {styles.productContainer}>
        <div className= {styles.btnsContainer}>
            <button className= {styles.btn1} tabIndex="0"> <p>Рекомендовані</p> </button>
            <button className= {styles.btn} tabIndex="0"> <p>Доповнення до квітів</p> </button>
        </div>
        <div className= {styles.logoContainer}>
            <img src="/product/logo.png" alt="logo" />
        </div>
        <div className= {styles.listContainer}>
            <ul className= {styles.productList}>
                <li className= {styles.productItem}>
                    <img className= {styles.productImage} src="/product/troyands1.png" alt="troy1" />
                    <p className= {styles.productParagraph}>101 Червона троянда</p>
                    <div className={styles.productInfo}>
                    <p className= {styles.productSpan}>19500 грн</p>
                    <button className= {styles.productBtn}> <span className= {styles.productSpan1}>Купити</span> </button> 
                    </div>
                </li>
                <li className= {styles.productItem}>
                <img className= {styles.productImage} src="/product/troyands2.png" alt="troy2" />
                <p className= {styles.productParagraph}>21 червона троянда</p>
                <div className={styles.productInfo}>
                <p className= {styles.productSpan}>4100 грн</p>
                <button className= {styles.productBtn}> <span className= {styles.productSpan1}>Купити</span></button> 
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
