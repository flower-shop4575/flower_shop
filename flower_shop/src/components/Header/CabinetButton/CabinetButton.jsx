import React from 'react';
import styles from './CabinetButton.module.css';

export default function CabinetButton() {
  return (
    <>
        <button className= {styles.but}><img src="/control/cabinet.svg" alt="my-cabinet" />
        <span className= {styles.span}>Мій кабінет</span>
        </button>
    </>
  )
}
