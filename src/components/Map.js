import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import data from './data.json'; // Import your JSON data

import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = L.map(mapRef.current).setView([20.5937, 82.9629], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Add GeoJSON layer
    const geojsonLayer = L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        const { district, schools, teachers, students } = feature.properties;
        layer.bindPopup(`<strong>${district}</strong><br/> Schools: ${schools}<br/> Teachers: ${teachers}<br/> Students: ${students}`);
      },
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '600px', width: '100%' }} />;
};

export default Map;
