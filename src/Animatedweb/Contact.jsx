import React, { useState } from 'react';
const Contact=()=>{
  const [data,setdata]=useState({
    Email:"",
    Password:""
  })
  const eventcall=(event)=>{
    
    const {name,value}=event.target;
    setdata((preval)=>{
       return{
        
        ...preval,
        [name]:value,
        
       }
    })
  }
  const FormSubmit=(e)=>{
    e.preventDefault()
       alert(`Your Email is ${data.Email} and Password is ${data.Password}`)
  }

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto py-5">
                <form onSubmit={FormSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' name='Email' value={data.Email} onChange={eventcall}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1 " placeholder='Enter your Password' name='Password' value={data.Password} onChange={eventcall}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Contact;