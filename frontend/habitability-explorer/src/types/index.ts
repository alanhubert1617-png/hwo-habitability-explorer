// src/types/index.ts

export interface Planet {
    id: string;
    name: string;
    habitabilityScore: number;
    distanceFromEarth: number; // in light years
    description: string;
}

export interface SearchCriteria {
    minHabitabilityScore: number;
    maxDistance: number; // in light years
    planetType: string; // e.g., "terrestrial", "gas giant"
}