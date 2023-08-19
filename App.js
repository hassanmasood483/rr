import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes ,Route } from 'react-router-dom';
const App=()=>{
  return(
  <>
  <Navbar/>
  <Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/service"  element={<Service/>}/>
</Routes>

  </>
  );
};
export default App;