import React, { useState, useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RentPage from './Pages/Rent/Rent';
import getHomeData from './Hooks/Home';
import './index.css';

const App = () => {
  const [ homes, setHomes] = useState([]);
  const [ coordinates, setCoordinates] = useState({ lat: 21.9588, lng: 96.0891 });
  const [ bounds, setBounds] = useState(null);

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude});
     })
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    getHomeData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setHomes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coordinates, bounds]);
  
  return ( 
    <BrowserRouter>
    <div className="nav-section">
      <Navbar />
      <Header />
    </div>
    <RentPage  setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
  </BrowserRouter>
   );
}
 
export default App;
