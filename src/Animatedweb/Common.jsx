import React from 'react';
import { NavLink } from 'react-router-dom';
const Common=(props)=>{
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
            <div className="container-fluid  ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 py-5 d-flex justify-content-center flex-column"> 
                                <h1>{props.name} <strong>Hammad</strong></h1>
                                <h2>we have talented Developers which make websites</h2>
                                <div className="mt-3 ">
                                    <NavLink to={props.visit} className='btn btn-outline-primary'>{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={props.img} alt="" className='img-fluid header-img' id="animated" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Common;