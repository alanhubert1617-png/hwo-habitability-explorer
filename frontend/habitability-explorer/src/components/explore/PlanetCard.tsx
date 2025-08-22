import React from 'react';

interface PlanetCardProps {
    name: string;
    description: string;
    imageUrl: string;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="planet-card">
            <img src={imageUrl} alt={name} className="planet-image" />
            <h3 className="planet-name">{name}</h3>
            <p className="planet-description">{description}</p>
        </div>
    );
};

export default PlanetCard;