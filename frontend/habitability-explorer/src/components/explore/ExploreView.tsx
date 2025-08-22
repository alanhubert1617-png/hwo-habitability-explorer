import React from 'react';
import PlanetCard from './PlanetCard';
import SearchFilters from './SearchFilters';

const ExploreView: React.FC = () => {
    const planets = []; // This should be replaced with actual data

    return (
        <div className="explore-view">
            <h1>Explore Habitability</h1>
            <SearchFilters />
            <div className="planet-cards">
                {planets.map((planet) => (
                    <PlanetCard key={planet.id} planet={planet} />
                ))}
            </div>
        </div>
    );
};

export default ExploreView;