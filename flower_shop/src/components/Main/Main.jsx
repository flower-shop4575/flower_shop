import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <section className= {styles.mainBanner}>
        <div className={styles.logoContainer}>
        <img src="fon/logo.svg" alt="logo" className= {styles.logo} />
        </div>
        <ul className= {styles.socialList}>
            <li className= {styles.socailListItem}>
                <button className= {styles.buttonItem}>
                <img src="social/insta.svg" alt="instagram" className= {styles.buttonIcon} />
                </button>
            </li>
            <li className= {styles.socailListItem}>
            <button className= {styles.buttonItem}>
            <img src="social/vk.svg" alt="instagram" className= {styles.buttonIcon} />
            </button>
            </li>
            <li className= {styles.socailListItem}>
            <button className= {styles.buttonItem}>
            <img src="social/facebook.svg" alt="instagram" className= {styles.buttonIcon} />
            </button>
            </li>
        </ul>
        <p className= {styles.paragraph}>Доставка квітів</p>
        <div className= {styles.geo}>
        <hr />
        <div className={styles.geoContainer}>
        <span className= {styles.geoSpan}>в Чернігові</span>
        </div>
        <hr />
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.geoButton}><span>Замовити квіти</span></button>
        </div>
    </section>
  )
}
