import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
        {/* <div className='container nav-bg'> */}
            <div className="row">
                <div className="col-12 mx-auto">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to ="#">XNZONE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className={(isActive) => (isActive ? "active-style" : 'null')}  aria-current="page" to ="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(isActive) => (isActive ? "active-style" : 'null')}  to ="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(isActive) => (isActive ? "active-style" : 'null')} to ="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(isActive) => (isActive ? "active-style" : 'null')} to ="/service">Service</NavLink>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        
        </>
    )
    ;
}
export default Navbar;