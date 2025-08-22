import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Logo />
                    <span className={styles.logoText}>Habitability Explorer</span>
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <Link to="/" className={styles.link}>HOME</Link>
                    <Link to="/explore" className={styles.link}>EXPLORE</Link>
                    <Link to="/about" className={styles.link}>ABOUT</Link>
                    <Link to="/contact" className={styles.link}>CONTACT</Link>
                </nav>

                <button 
                    className={styles.menuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} />
                </button>
            </div>
        </header>
    );
};

export default Header;