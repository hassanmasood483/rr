import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
const Service=()=>{
  return(
  <>
  <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
  <div className='container'>
    <div className='row gy-4'>
     {
      Sdata.map((val,ind)=>{
        return(
      <Card imgsrc={val.imgsrc}
      title={val.title}/>
        )
      })
     }
     </div>
     </div>
      
    
  </>
  );
}
export default Service;