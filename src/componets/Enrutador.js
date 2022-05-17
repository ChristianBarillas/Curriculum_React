import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./linksconfig";
import About from "../pages/About";
import Home from "../pages/Home";
import Proyects from '../pages/Proyects';
import Donate from '../pages/Donate';
import Error404 from '../pages/Error404';
import Registro from '../pages/Registro';
import Iniciosesion from '../pages/Iniciosesion';






const Navigation = () => {
    return (

      <div>
        <BrowserRouter> 
           <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/proyects" element={<Proyects />} />
            <Route exact path="/donate" element={<Donate/>} />
            <Route exact path="/registro" element={<Registro/>} />
            <Route exact path="/iniciosesion" element={<Iniciosesion/>} />
            <Route path="*" element={<Error404/>} />
        </Routes> 
      </BrowserRouter>


<div>
  
</div>
      </div>

  
    );

    

}

export default Navigation