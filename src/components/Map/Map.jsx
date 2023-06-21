import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import Test from './test';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 21.9162,
      lng: 95.9560,
    },
    zoom: 14,
  };

  // const handleMapChange = (newCoordinates) => {
  //   // Handle map change event here
  //   console.log('Map changed:', newCoordinates);
  // };

  // const handleMarkerClick = (markerId) => {
  //   // Handle marker click event here
  //   console.log('Marker clicked:', markerId);
  // };

  return (
    <section className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJXT81T33nikwgqaiC6FZeyrSssNmq-VI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
       <Test
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </section>
  );
};

export default Map;
