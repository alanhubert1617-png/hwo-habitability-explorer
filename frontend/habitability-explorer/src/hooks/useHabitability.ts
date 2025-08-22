import { useState, useEffect } from 'react';

const useHabitability = () => {
    const [habitabilityData, setHabitabilityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHabitabilityData = async () => {
            try {
                const response = await fetch('/api/habitability'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHabitabilityData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchHabitabilityData();
    }, []);

    return { habitabilityData, loading, error };
};

export default useHabitability;