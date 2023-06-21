import React from 'react';
import Map from '../../components/Map/Map';
import './rent.css';

const RentPage = () => (
  <>
    <section className="rent-section">
      <div className="flex-map"><Map /></div>
      <div className="flex-home-list">World</div>
    </section>

  </>
);

export default RentPage;
