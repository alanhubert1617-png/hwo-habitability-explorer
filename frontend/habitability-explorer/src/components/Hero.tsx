import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={`${styles.title} slide-up`}>
          Discover the Most Habitable Worlds
        </h1>
        <p className={`${styles.subtitle} slide-up`}>
          AI-powered exploration for NASA's Habitable Worlds Observatory
        </p>
        <button className={`${styles.cta} slide-up`}>
          Explore Exoplanets
        </button>
        
        <div className={styles.waveAnimation}>
          {/* Interactive sine wave animation will be added here */}
          <svg
            width="100%"
            height="120"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styles.wave}
          >
            <path
              d="M0 60 Q300 0, 600 60 T1200 60"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
      
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>
    </section>
  );
};

export default Hero;
