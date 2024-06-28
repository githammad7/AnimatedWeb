import React from 'react';
import New from "./Images/About.png"
import Common from './Common';
const About=()=>{
    return (
        <>
       <Common name="Welcome to About Page"
       img={New}
       visit='/contact'
       btnname='contact us'
       />
        </>
    )
}
export default About;