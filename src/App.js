import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RentPage from './Pages/Rent/Rent';
import './index.css';

const App = () => {
  return ( 
    <BrowserRouter>
    <div className='nav-section'>
    <Navbar />
    <Header />
    </div>
    <RentPage />
    </BrowserRouter>
   );
}
 
export default App;

