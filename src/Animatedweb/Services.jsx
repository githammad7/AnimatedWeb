import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata'
const Services=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <h1 className='text-center py-5'>Our Services</h1>
                <div className="row g-5">
             
         {Sdata.map((val,index)=>{
           return  <Cards imgsrc={val.Img}
           title={val.Title}
           key={index}
           />
         })}
 
                 </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        </>
    )
}
export default Services