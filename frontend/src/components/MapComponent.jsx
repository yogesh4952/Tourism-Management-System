import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvents,
  ZoomControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude, longitude, placeName }) => {
  const [markerPosition, setMarkerPosition] = useState([latitude, longitude]);
  const [currentPlaceName, setCurrentPlaceName] = useState(placeName);
  const [isLoading, setIsLoading] = useState(false); // For loading state during reverse geocoding
  const [error, setError] = useState(null); // For error handling

  // Update place name when prop changes
  useEffect(() => {
    setCurrentPlaceName(placeName);
  }, [placeName]);

  // Function to reverse geocode coordinates into a place name
  const reverseGeocode = async (lat, lng) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Extract the display name from the API response
      const displayName =
        data.display_name || `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
      setCurrentPlaceName(displayName);
    } catch (err) {
      console.error('Reverse geocoding failed:', err);
      setError('Failed to fetch location name. Please try again.');
      setCurrentPlaceName(`Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle map click events
  const MapEventHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const newPosition = [lat, lng];

        setMarkerPosition(newPosition);
        reverseGeocode(lat, lng); // Fetch place name for new coordinates
      },
    });

    return null;
  };

  return (
    <MapContainer
      center={markerPosition}
      zoom={13}
      zoomControl={false}
      style={{ height: '500px', width: '100%' }}
      smoothWheelZoom={true}
      zoomSnap={0.25}
      zoomDelta={0.25}
      wheelDebounceTime={50}
    >
      <MapEventHandler />

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; OpenStreetMap contributors'
      />

      {/* Marker without custom icon */}
      <Marker position={markerPosition}>
        <Popup>
          {isLoading ? 'Loading...' : error ? error : currentPlaceName}
        </Popup>
        <Tooltip>
          {isLoading ? 'Loading...' : error ? error : currentPlaceName}
        </Tooltip>
      </Marker>

      <ZoomControl position='topright' />
    </MapContainer>
  );
};

export default MapComponent;
