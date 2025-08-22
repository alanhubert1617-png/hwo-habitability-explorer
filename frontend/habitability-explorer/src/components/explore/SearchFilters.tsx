import React, { useState } from 'react';
import styles from './SearchFilters.module.css';

interface RangeValue {
  min: number;
  max: number;
}

const SearchFilters: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [radius, setRadius] = useState<RangeValue>({ min: 0, max: 10 });
    const [temperature, setTemperature] = useState<RangeValue>({ min: -100, max: 100 });
    const [habitabilityScore, setHabitabilityScore] = useState<RangeValue>({ min: 0, max: 100 });

    return (
        <div className={styles.filters}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search planets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.filterGrid}>
                <div className={styles.filterGroup}>
                    <label className={styles.label}>Planet Radius (Earth radii)</label>
                    <div className={styles.rangeInputs}>
                        <input
                            type="number"
                            value={radius.min}
                            onChange={(e) => setRadius({ ...radius, min: Number(e.target.value) })}
                            className={styles.numberInput}
                            min={0}
                            step={0.1}
                        />
                        <div className={styles.rangeSlider}>
                            <input
                                type="range"
                                value={radius.min}
                                onChange={(e) => setRadius({ ...radius, min: Number(e.target.value) })}
                                min={0}
                                max={10}
                                step={0.1}
                                className={styles.rangeInput}
                            />
                            <input
                                type="range"
                                value={radius.max}
                                onChange={(e) => setRadius({ ...radius, max: Number(e.target.value) })}
                                min={0}
                                max={10}
                                step={0.1}
                                className={styles.rangeInput}
                            />
                        </div>
                        <input
                            type="number"
                            value={radius.max}
                            onChange={(e) => setRadius({ ...radius, max: Number(e.target.value) })}
                            className={styles.numberInput}
                            min={0}
                            step={0.1}
                        />
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>Temperature (°C)</label>
                    <div className={styles.rangeInputs}>
                        <input
                            type="number"
                            value={temperature.min}
                            onChange={(e) => setTemperature({ ...temperature, min: Number(e.target.value) })}
                            className={styles.numberInput}
                        />
                        <div className={styles.rangeSlider}>
                            <input
                                type="range"
                                value={temperature.min}
                                onChange={(e) => setTemperature({ ...temperature, min: Number(e.target.value) })}
                                min={-100}
                                max={100}
                                className={styles.rangeInput}
                            />
                            <input
                                type="range"
                                value={temperature.max}
                                onChange={(e) => setTemperature({ ...temperature, max: Number(e.target.value) })}
                                min={-100}
                                max={100}
                                className={styles.rangeInput}
                            />
                        </div>
                        <input
                            type="number"
                            value={temperature.max}
                            onChange={(e) => setTemperature({ ...temperature, max: Number(e.target.value) })}
                            className={styles.numberInput}
                        />
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>Habitability Score</label>
                    <div className={styles.rangeInputs}>
                        <input
                            type="number"
                            value={habitabilityScore.min}
                            onChange={(e) => setHabitabilityScore({ ...habitabilityScore, min: Number(e.target.value) })}
                            className={styles.numberInput}
                            min={0}
                            max={100}
                        />
                        <div className={styles.rangeSlider}>
                            <input
                                type="range"
                                value={habitabilityScore.min}
                                onChange={(e) => setHabitabilityScore({ ...habitabilityScore, min: Number(e.target.value) })}
                                min={0}
                                max={100}
                                className={styles.rangeInput}
                            />
                            <input
                                type="range"
                                value={habitabilityScore.max}
                                onChange={(e) => setHabitabilityScore({ ...habitabilityScore, max: Number(e.target.value) })}
                                min={0}
                                max={100}
                                className={styles.rangeInput}
                            />
                        </div>
                        <input
                            type="number"
                            value={habitabilityScore.max}
                            onChange={(e) => setHabitabilityScore({ ...habitabilityScore, max: Number(e.target.value) })}
                            className={styles.numberInput}
                            min={0}
                            max={100}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.filterActions}>
                <button className={styles.resetButton}>Reset Filters</button>
                <button className={styles.applyButton}>Apply Filters</button>
            </div>
        </div>
    );
};

export default SearchFilters;