import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { FcSearch } from 'react-icons/fc';
import './header.css';

const Header = () => {
  const [type, setType] = useState('Rent');
  const [home, setHome] = useState('');
  const [location, setLocation] = useState('');
  return ( 
    <ul className="header">
    <li className="header-items">
      {/* <Autocomplete> */}
      <div className="search">
        <input type="search" placeholder="Search your City,neighborhood" className="search-bar" />
      </div>
      {/* </Autocomplete> */}
    </li>
    <li className="header-items select">
      <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="For rent" selected>For Rent</option>
        <option value="For Buy">For Buy</option>
        <option value="Sold">Sold</option>
      </select>
    </li>
    <li className="header-items select">
      <select name="home-type" id="home-type" value={home} onChange={(e) => setHome(e.target.value) }>
        <option value="Single Family Home selected">Single Family Home</option>
        <option value="Apartment">Multi Family Home</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Villa">House</option>
        <option value="Villa">Condo</option>
        <option value="Villa">Dorm</option>
      </select>
    </li>
    <li className="header-items select">
      <select name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="Mandalay" selected>Mandalay</option>
        <option value="Mahar Aung Myay Township">Mahar Aung Myay Township</option>
        <option value="Aung Myay Thar Zan Township">Aung Myay Thar Zan Township</option>
        <option value="Chan Mya Thar Sie Township">Chan Mya Thar Sie Township</option>
        <option value="Chan Aye Thar Zan Township">Chan Aye Thar Zan Township</option>
        <option value="Amarapura Township">Amarapura Township</option>
        <option value="Pyi Gyi Tan Chon Township">Pyi Gyi Tan Chon Township</option>
        <option value="Pathein Gyi Township">Pathein Gyi Township</option>
      </select>
    </li>
  </ul>

   );
}
 
export default Header;
