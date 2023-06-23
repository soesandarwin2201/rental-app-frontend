import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
 
  return (
    <section className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJXT81T33nikwgqaiC6FZeyrSssNmq-VI" }}
        defaultCenter={{ lat: coordinates.lat, lng: coordinates.lng }}
        defaultZoom={14}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </section>
  );
};

export default Map;
