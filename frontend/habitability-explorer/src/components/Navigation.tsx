import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <Logo />
        </a>
        
        <div className={styles.links}>
          <a href="/" className={styles.link}>HOME</a>
          <a href="/explore" className={styles.link}>EXPLORE</a>
          <a href="/about" className={styles.link}>ABOUT</a>
          <a href="/contact" className={styles.link}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
