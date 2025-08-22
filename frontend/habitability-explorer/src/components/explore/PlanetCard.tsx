import React from 'react';
import styles from './PlanetCard.module.css';

interface PlanetCardProps {
    name: string;
    radius: number;
    temperature: number;
    habitabilityScore: number;
    imageUrl: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({
    name,
    radius,
    temperature,
    habitabilityScore,
    imageUrl
}) => {
    // Calculate habitability color based on score
    const getHabitabilityColor = (score: number) => {
        if (score >= 80) return '#34D399';
        if (score >= 60) return '#60A5FA';
        if (score >= 40) return '#FBBF24';
        if (score >= 20) return '#FB923C';
        return '#EF4444';
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={name} className={styles.image} />
                <div 
                    className={styles.habitabilityIndicator}
                    style={{ 
                        background: getHabitabilityColor(habitabilityScore),
                        '--score': `${habitabilityScore}%`
                    } as React.CSSProperties}
                >
                    <span className={styles.score}>{habitabilityScore}</span>
                </div>
            </div>
            
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.label}>Radius</span>
                        <span className={styles.value}>{radius.toFixed(2)} R⊕</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.label}>Temperature</span>
                        <span className={styles.value}>{temperature}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;