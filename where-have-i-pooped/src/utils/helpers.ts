// src/utils/helpers.ts

export const formatCheckInDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const calculateReputationScore = (checkIns: number, flags: number): number => {
    return Math.max(0, checkIns - flags * 2);
};

export const isValidLocation = (latitude: number, longitude: number): boolean => {
    return (
        latitude >= -90 &&
        latitude <= 90 &&
        longitude >= -180 &&
        longitude <= 180
    );
};

export const handleError = (error: Error): void => {
    console.error('An error occurred:', error.message);
    // Additional error handling logic can be added here
};