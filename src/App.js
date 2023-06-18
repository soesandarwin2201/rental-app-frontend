import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MiniNavbar from './components/Navbar/miniNavbar';
import './index.css';

const App = () => {
  return ( 
    <BrowserRouter>
    <MiniNavbar />
    </BrowserRouter>
   );
}
 
export default App;

