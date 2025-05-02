import React from 'react';
import styles from './HeaderButtons.module.css';

export default function HeaderButtons() {
  return (
    <div className= {styles.btnContainer}>
       <ul className={styles.btnList}>
        <li><button className= {styles.btn}><img src="/control/mobile.svg" alt="mobile" /></button></li>
       <li><button className= {styles.btn}><img src="/control/search.svg" alt="search" /></button></li>
       </ul>
    </div>
  )
}
