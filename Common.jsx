import React from 'react';
import web from "../src/Images/homeimg.png";
import { NavLink } from 'react-router-dom';
const Common=(props)=>{
  return(
    <>
  <div className='container'>
    <div className='row'>
      <div className='col-12 col-lg-6 order-2 order-lg-1'>
        <h1 className="mt-4"> {props.sname} <br/><strong className='brand'>xenzone</strong></h1>
        <h2>We are a group of talented and passionate hard workers</h2>
        <NavLink to={props.visit}><button className='btnn'>{props.btname}</button></NavLink>
      </div>
      
        
    
<div className=' header col-12 col-lg-6 order-1 order-lg-2'>
  <img src={props.imgsrc} alt="homeimg" className='img-fluid'
  
  ></img>
</div>


    </div>
  </div>
  </>

  );
}
export default Common;