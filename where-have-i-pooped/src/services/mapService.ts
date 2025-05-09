// src/services/mapService.ts

import { LatLng } from 'leaflet'; // Assuming Leaflet is used for map handling

// Function to initialize the map
export const initializeMap = (mapElement: HTMLElement, center: LatLng, zoom: number) => {
    const map = L.map(mapElement).setView(center, zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    return map;
};

// Function to add a marker to the map
export const addMarker = (map: L.Map, position: LatLng, title: string) => {
    const marker = L.marker(position).addTo(map);
    marker.bindPopup(title).openPopup();
};

// Function to set up geofencing
export const setupGeofence = (map: L.Map, geofenceCoords: LatLng[]) => {
    const polygon = L.polygon(geofenceCoords).addTo(map);
    return polygon;
};

// Function to retrieve user's current location
export const getCurrentLocation = (): Promise<LatLng> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve(new LatLng(latitude, longitude));
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
};

// Function to handle location tagging
export const tagLocation = (location: LatLng, userId: string) => {
    // Logic to save the location tag to the database
    console.log(`Location tagged for user ${userId}: ${location.lat}, ${location.lng}`);
};

// Function to fetch map data (e.g., check-ins, territories)
export const fetchMapData = async (userId: string): Promise<any> => {
    // Placeholder for fetching data from the backend
    const response = await fetch(`/api/mapData/${userId}`);
    return response.json();
};