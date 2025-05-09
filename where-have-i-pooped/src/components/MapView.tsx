import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { getUserLocation } from '../services/mapService';

const MapView = (props) => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const [checkIns, setCheckIns] = useState([]);

    useEffect(() => {
        const fetchUserLocation = async () => {
            const location = await getUserLocation();
            setUserLocation(location);
        };

        fetchUserLocation();
    }, []);

    const handleCheckIn = (mapProps, map, clickEvent) => {
        const newCheckIn = {
            lat: clickEvent.latLng.lat(),
            lng: clickEvent.latLng.lng(),
        };
        setCheckIns([...checkIns, newCheckIn]);
        // Additional logic to save check-in can be added here
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Map
                google={props.google}
                zoom={14}
                initialCenter={userLocation}
                center={userLocation}
                onClick={handleCheckIn}
            >
                <Marker position={userLocation} />
                {checkIns.map((checkIn, index) => (
                    <Marker key={index} position={checkIn} />
                ))}
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapView);