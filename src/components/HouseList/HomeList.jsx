import React, { useState } from 'react';
import HouseCard from './houseCard';
import './home.css';

const HomeList = () => {
     const places = [
     {
          name: "test 1",
          location: 'mandalay',
     },
     {
          name: "test 2",
          location: 'mandalay',
     },
     {
          name: "test 2",
          location: 'mandalay',
     },
     {
          name: "test 2",
          location: 'mandalay',
     },
     {
          name: "test 2",
          location: 'mandalay',
     },

     ]; 
     return ( 
          <div className="home-container">
               {
                    places?.map((place,i) => (
                         <HouseCard  key={i} place={place} />
                    ))
               }
          </div>
      );
}
 
export default HomeList;
