import React from 'react';
import styles from './AboutUs.module.css';
import InstaSection from './InstaSection/InstaSection';
import CommentsSection from './CommentsSection/CommentsSection';
import NewsSection from './NewsSection/NewsSection';

export default function AboutUs() {
  return (
    <section className= {styles.aboutUsContainer}>
       <InstaSection></InstaSection>
       <CommentsSection></CommentsSection>
        <NewsSection></NewsSection>
    </section>
  )
}
