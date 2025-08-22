import React from 'react';
import PlanetCard from './PlanetCard';
import SearchFilters from './SearchFilters';
import Features from '../Features';
import styles from './ExploreView.module.css';

const ExploreView: React.FC = () => {
    const planets = []; // This should be replaced with actual data

    return (
        <div className={styles.exploreView}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.title} slide-up`}>
                        Discover the Most Habitable Worlds
                    </h1>
                    <p className={`${styles.subtitle} slide-up`}>
                        AI-powered exploration for NASA's Habitable Worlds Observatory
                    </p>
                    <button className={`${styles.cta} slide-up`}>
                        Explore Exoplanets
                    </button>
                    
                    <div className={styles.waveContainer}>
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
            </section>

            <Features />

            <section className={styles.planetsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Explore Exoplanets</h2>
                    <SearchFilters />
                    <div className={styles.planetGrid}>
                        {planets.map((planet) => (
                            <PlanetCard key={planet.id} planet={planet} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExploreView;