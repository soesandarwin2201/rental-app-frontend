import React from 'react';

const HouseCard = ({place}) => {
     return ( 
          <>
          <h2>{place.name}</h2>
          <h3>{place.location}</h3>
          </>
      );
}
 
export default HouseCard;