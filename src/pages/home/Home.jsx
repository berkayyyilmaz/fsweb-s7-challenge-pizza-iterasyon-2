import React from 'react';
import styles from './Home.module.css'
import { Link } from 'react-router-dom'



function Home() {

  return (
    <>
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.headerTitle}>Teknolojik Yemekler</div>
        <div className={styles.note}>KOD ACIKTIRIR</div>
        <div className={styles.note}>PIZZA, DOYURUR</div>

        <Link to='/order' className={styles.customLink}>ACIKTIM</Link>
      </div>
    </div>
    </>
  )
}

export default Home