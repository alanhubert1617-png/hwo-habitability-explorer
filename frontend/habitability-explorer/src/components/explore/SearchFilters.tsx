import React from 'react';

const SearchFilters: React.FC = () => {
    return (
        <div className="search-filters">
            <h2>Filter Planets</h2>
            <form>
                <label htmlFor="habitable">Habitable:</label>
                <select id="habitable" name="habitable">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label htmlFor="size">Size:</label>
                <select id="size" name="size">
                    <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

                <label htmlFor="distance">Distance from Earth:</label>
                <input type="range" id="distance" name="distance" min="0" max="100" />

                <button type="submit">Apply Filters</button>
            </form>
        </div>
    );
};

export default SearchFilters;