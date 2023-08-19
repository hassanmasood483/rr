import React from 'react';
import web from '../src/Images/web.jpg';
const Card=()=>{
  return(
  <>
  
  <div className='container'>
    <div className='row gy-4'>
      <div className=' col-12 text-center col-lg-4 gy-4'>
      <div class="card" >
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
   </div>
      </div>
    </div>
  </div>
  </>
  );
}
export default Card;


