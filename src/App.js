import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './index.css';

const App = () => {
  return ( 
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
   );
}
 
export default App;

