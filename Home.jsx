import React from 'react';
import web from "../src/Images/homeimg.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home=()=>{
  return(
    <>
  <Common 
    sname="Welcome to Home page"
    imgsrc={web}
    visit="/service"
    btname='Get Started'
    />
  </>

  );
}
export default Home;