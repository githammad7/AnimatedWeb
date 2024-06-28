import React from 'react';

import { NavLink } from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
               
               <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <NavLink className="navbar-brand" to="/">Hammad</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Login</NavLink>
        </li>
       
        
      </ul>
      
    </div>
  
</nav>

                    </div>
                </div>
            
                </div>
        </>
    )
}
export default Navbar;