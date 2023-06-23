import React from 'react';
import Map from '../../components/Map/Map';
import HomeList from '../../components/HouseList/HomeList';
import './rent.css';

const RentPage = ({ setCoordinates, setBounds, coordinates  }) => (
  <>
    <section className="rent-section">
      <div className="flex-map"><Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} /></div>
      <div className="flex-home-list"><HomeList /></div>
    </section>

  </>
);

export default RentPage;
