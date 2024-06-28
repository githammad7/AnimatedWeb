
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from './Animatedweb/Home'
import About from './Animatedweb/About'
import Services from './Animatedweb/Services'
import Contact from './Animatedweb/Contact'
import Navbar from './Animatedweb/Navbar';



import { Routes,Route } from 'react-router-dom';
const App=()=>{
    return (
        <>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Routes>
        </>
    )
}
export default App;