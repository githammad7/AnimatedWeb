import React from 'react';
import { NavLink } from 'react-router-dom';
// import Web from './Images/About.png'
// import { NavLink } from 'react-router-dom';
const Cards=(props)=>{
    return (
        <>
       
                 <div className="col-4">
                 <div class="card">
  <img class="card-img-top fix-img" src={props.imgsrc} alt={props.imgsrc}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="mt-3 ">
                                    <NavLink to="/" className='btn btn-outline-primary'>Click Here</NavLink>
                                </div>
  </div>
</div>
 </div>
 
                
        </>
    )
}
export default Cards;