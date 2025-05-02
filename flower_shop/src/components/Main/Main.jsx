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
            <button className= {styles.buttonItem}></button>
            </li>
            <li className= {styles.socailListItem}>
            <button className= {styles.buttonItem}></button>
            </li>
        </ul>
    </section>
  )
}
